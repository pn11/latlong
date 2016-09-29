#!/usr/bin/ruby
# -*- coding: utf-8 -*-
require "rexml/document"
require "utc2jst.rb"
require "geokit" #http://www.rubydoc.info/github/geokit/geokit/master/Geokit
require "time2unix.rb"


def makeGraph(in_file_name)
    puts "makeGraph #{in_file_name}"
    out_file_name = in_file_name.sub("gpx", "google") # replace first gpx to google (dir name)
    out_file_name = out_file_name.sub(".gpx", "_graph.js") ## replace second gpx to js
    fout = File.open(out_file_name, "w")
    doc = nil
    File.open(in_file_name) {|xmlfile|
        doc = REXML::Document.new(xmlfile)
    }
    
    npoint = 0
    iarray = 0
    distance = 0.0
    geo_current = Geokit::LatLng.new()
    geo_pre = Geokit::LatLng.new()
    unixtime_pre = "0"

    fout.puts "function array_ele(){"
    fout.puts "  var var_array = ["
    fout.puts "    ['Time', 'Elevation (m)', 'Distance (km)', 'Velocity (km/h)'],"
    gpx = doc.elements["/gpx"]
    gpx.elements.each("trk"){|trk|
        trk.elements.each("trkseg"){|trkseg|
            trkseg.elements.each("trkpt"){|trkpt|
                longtitude = trkpt.attributes.get_attribute("lon")
                latitude = trkpt.attributes.get_attribute("lat")
                geo_current.lat = "#{latitude}"
                geo_current.lng = "#{longtitude}"
                time = trkpt.elements["time"]
                ele = trkpt.elements["ele"]
                if time != nil; time = time.text; else time = "0"; end
                if ele != nil; ele = ele.text; else ele = "0"; end
                unixtime = time2unix(time)
                time = utc2jst(time)
                velocity = 0.0
                if npoint > 0
                    distance_tmp = geo_current.distance_to(geo_pre, {:units => :kms})
                    distance += distance_tmp
                    time_diff = unixtime - unixtime_pre
                    if time_diff != 0
                       velocity = distance_tmp / (time_diff / 60.0 / 60.0)
                    end
                end
                fout.puts "    [new Date('#{time}'), #{ele}, #{distance}, #{velocity}],"
                #puts "distance = #{distance}"
                ## end of process
                geo_pre.lat = "#{latitude}"
                geo_pre.lng = "#{longtitude}"
                unixtime_pre = unixtime
                npoint += 1;
            }
        }
    }
    fout.puts "  ];"
    fout.puts "  return var_array;"
    fout.puts "}"
    fout.puts ""
    fout.puts "// npoint = #{npoint}"
    fout.puts ""
    writeFunctionGraph(fout)
    writeHTMLGraph(fout)
    fout.close
end


def writeFunctionGraph(fout)
    fout.puts ""
    fout.puts "function draw_ele(){"
    fout.puts "  google.charts.setOnLoadCallback(drawChart_ele);"
    fout.puts "  function drawChart_ele() {"
    fout.puts "    var dashboard = new google.visualization.Dashboard("
    fout.puts "        document.getElementById('dashboard_ele')"
    fout.puts "    );"
    fout.puts "    var chart_option = getGraphOptions();"
    fout.puts "    var control_option = getControlOptions();"
    fout.puts "    var data = array_ele();"

    fout.puts "    var chart = new google.visualization.ChartWrapper({"
    fout.puts "        chartType: 'LineChart',"
    fout.puts "        containerId: 'graph_ele',"
    #    fout.puts "        options: chart_option,"
    fout.puts "        view: {'columns': [0,1]}"
    fout.puts "    });"
    fout.puts "    chart.setOption('vAxis.title', 'Elevation (m)');"

    fout.puts "    var chart_distance = new google.visualization.ChartWrapper({"
    fout.puts "        chartType: 'LineChart',"
    fout.puts "        containerId: 'graph_distance',"
    #    fout.puts "        options: chart_option,"
    fout.puts "        view: {'columns': [0,2]}"
    fout.puts "    });"
    fout.puts "    chart_distance.setOption('vAxis.title', 'Distance (km)');"

    fout.puts "    var chart_velocity = new google.visualization.ChartWrapper({"
    fout.puts "        chartType: 'LineChart',"
    fout.puts "        containerId: 'graph_velocity',"
    #    fout.puts "        options: chart_option,"
    fout.puts "        view: {'columns': [0,3]}"
    fout.puts "    });"
    fout.puts "    chart_velocity.setOption('vAxis.title', 'Velocity (km/h)');"

    fout.puts "    var control = new google.visualization.ControlWrapper({"
    fout.puts "        controlType: 'ChartRangeFilter',"
    fout.puts "        containerId: 'control_ele',"
    fout.puts "        options: control_option,"
    fout.puts "    });"
    fout.puts "    dashboard.bind(control, [chart, chart_distance, chart_velocity]);"
    fout.puts "    dashboard.draw(data);"
    fout.puts "  }"
    fout.puts "}"
    fout.puts ""
    fout.puts "draw_ele();"
    fout.puts ""
end

def writeHTMLGraph(fout)
    content = ""
    fout.puts "function writeHTMLGraph(){"
    content += "<h2>Graph</h2><div id=\"dashboard_ele\" style=\"width: 0px; height: 0px\"></div><div id=\"graph_ele\" style=\"width: 800px; height: 200px\"></div><div id=\"graph_distance\" style=\"width: 800px; height: 200px\"></div><div id=\"graph_velocity\" style=\"width: 800px; height: 200px\"></div><div id=\"control_ele\" style=\"width: 800px; height: 100px\"></div>"
    fout.puts "  document.getElementById(\"graph\").innerHTML='#{content}';"
    fout.puts "}"
    fout.puts ""
end

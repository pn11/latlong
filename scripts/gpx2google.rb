#!/usr/bin/ruby
# -*- coding: utf-8 -*-
require "rexml/document"
require "utc2jst.rb"

def gpx2google(in_file_name)
    puts "gpx2google #{in_file_name}"
    out_file_name = in_file_name.sub("gpx", "google") # replace first gpx to google (dir name)
    out_file_name = out_file_name.sub("gpx", "js") ## replace second gpx to js
    fout = File.open(out_file_name, "w")
    
    doc = nil
    File.open(in_file_name) {|xmlfile|
        doc = REXML::Document.new(xmlfile)
    }
    
    npoint = 0;
    iarray = 0;
    
    gpx = doc.elements["/gpx"]
    gpx.elements.each("trk"){|trk|
        trk.elements.each("trkseg"){|trkseg|
            trkseg.elements.each("trkpt"){|trkpt|
                if (npoint % 400 == 0)
                    if (npoint != 0)
                        fout.puts "  ];"
                        fout.puts "  return var_array;"
                        fout.puts "}"
                        fout.puts ""
                        iarray += 1
                    end
                    fout.puts "function array#{iarray}(){"
                    fout.puts "  var var_array = ["
                    fout.puts "    ['Lat', 'Long', 'Time'],"
                end
                longtitude = trkpt.attributes.get_attribute("lon")
                latitude = trkpt.attributes.get_attribute("lat")
                time = trkpt.elements["time"]
                if time != nil; time = time.text; else time = "0"; end
                time = utc2jst(time)
                fout.puts "    [#{latitude}, #{longtitude}, '#{time}'],"
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
    fout.puts "function getNarray(){"
    fout.puts "  return #{iarray}"
    fout.puts "}"
    fout.puts ""
    writeFunction(fout, iarray)
    writeHTML(fout, iarray)
    fout.close
end


def writeFunction(fout, narray)
    for id in 0..narray
        fout.puts "function draw#{id}(){"
        fout.puts "  google.charts.setOnLoadCallback(drawChart#{id});"
        fout.puts "  function drawChart#{id}() {"
        fout.puts "    var map = new google.visualization.Map(document.getElementById('map_div#{id}'));"
        fout.puts "    var data = google.visualization.arrayToDataTable(array#{id}());"
        fout.puts "    var options = getOptions();"
        fout.puts "    map.draw(data, options);"
        fout.puts "  }"
        fout.puts "}"
        fout.puts "draw#{id}();"
        fout.puts ""
    end
end

def writeHTML(fout, narray)
    content = ""
    fout.puts "function writeHTML(){"
    for id in 0..narray
        content += "<h2>Part #{id}</h2><div id=\"map_div#{id}\" style=\"width: 800px; height: 600px\"></div>"
    end
    fout.puts "  document.getElementById(\"map\").innerHTML='#{content}';"
    fout.puts "}"
    fout.puts ""
end

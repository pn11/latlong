#!/usr/bin/ruby
# -*- coding: utf-8 -*-
require "rexml/document"
require "time2unix.rb"

def gpx2dat(in_file_name)
    puts "gpx2dat #{in_file_name}"
    out_file_name = in_file_name.gsub("gpx", "dat")
    
    fout = File.open(out_file_name, "w")
    fout.puts "#time elevation" ## distance and speed are bit complex so leave it for later.
    doc = nil
    File.open(in_file_name) {|xmlfile|
        doc = REXML::Document.new(xmlfile)
    }
    
    gpx = doc.elements["/gpx"]
    gpx.elements.each("trk"){|trk|
        trk.elements.each("trkseg"){|trkseg|
            trkseg.elements.each("trkpt"){|trkpt|
                longtitude = trkpt.attributes.get_attribute("lon")
                latitude = trkpt.attributes.get_attribute("lat")
                speed = trkpt.elements["speed"]
                time = trkpt.elements["time"]
                elevation = trkpt.elements["ele"]
                if speed != nil; speed = speed.text; else speed = "0"; end
                if time != nil; time = time.text; else time = "0"; end
                if elevation != nil; elevation = elevation.text; else elevation = "0" end
                
                unixtime = time2unix(time)
                
                fout.puts "#{unixtime} #{speed} #{elevation}"
            }
        }
    }
    fout.close
end

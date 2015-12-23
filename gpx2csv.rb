#!/usr/bin/ruby
# -*- coding: utf-8 -*-
require "rexml/document"

in_file_name = ARGV[0]
out_file_name = in_file_name.gsub("gpx", "csv")

fout = File.open(out_file_name, "w")
fout.puts "lat, lon" 
doc = nil
File.open(in_file_name) {|xmlfile|
  doc = REXML::Document.new(xmlfile)
}

trkseg = doc.elements["/gpx/trk/trkseg"]
trkseg.elements.each("trkpt"){|trkpt|
  longtitude = trkpt.attributes.get_attribute("lon")
  latitude = trkpt.attributes.get_attribute("lat")
  fout.puts "#{latitude}, #{longtitude}"
} 

fout.close

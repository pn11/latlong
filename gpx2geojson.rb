#!/usr/bin/ruby
# -*- coding: utf-8 -*-
$LOAD_PATH << "."

require "change_name.rb"
require "gpx2csv.rb"

gpxdir = "gpx"
timestamp = ".timestamp"


ls = `ls -1 #{gpxdir}`
ls.lines{|line| 
    in_file_name = "#{gpxdir}/#{line.chomp}"
    change_name(in_file_name)
}


# needs to list once again after changing file name
ls = `ls -1 #{gpxdir}`
ls.lines{|line|
    csv_file_name = in_file_name.gsub("gpx", "csv")
    geojson_file_name = in_file_name.gsub("gpx", "geojson")
    if (!File.exist?(geojson_file_name))
        cmd3 = "csv2geojson --line true #{csv_file_name} > #{geojson_file_name}"
        gpx2csv(in_file_name)
        puts cmd3
        puts `#{cmd3}`
    end
}

`touch #{timestamp}`





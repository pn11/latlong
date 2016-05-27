#!/usr/bin/ruby
# -*- coding: utf-8 -*-
$LOAD_PATH << "./scripts"

require "change_name.rb"
require "gpx2csv.rb"
require "gpx2dat.rb"
require "time2unix.rb"
require "no_space_for_filename.rb"

gpxdir = "gpx"
geojsondir = "geojson"
kmldir = "kml"
timestamp = ".timestamp"


if ARGV[0] == "reset"
    rmcmd = "rm #{geojsondir}/*"
    puts rmcmd
    `#{rmcmd}`
    exit
end

ls = `ls -1 #{gpxdir}`
ls.lines{|line|
    no_space_for_filename(gpxdir)
    in_file_name = "#{gpxdir}/#{line.chomp}"
    change_name(in_file_name)
}

no_space_for_filename(kmldir)


# needs to list once again after changing file name
ls = `ls -1 #{gpxdir}`
ls.lines{|line|
    in_file_name = "#{gpxdir}/#{line.chomp}"
    csv_file_name = in_file_name.gsub("gpx", "csv")
    geojson_file_name = in_file_name.gsub("gpx", "geojson")
    if (!File.exist?(geojson_file_name))
        gpx2csv(in_file_name)
        gpx2dat(in_file_name)
        cmd3 = "csv2geojson --line true #{csv_file_name} > #{geojson_file_name}"
        puts cmd3
        puts `#{cmd3}`
    end
}

`touch #{timestamp}`





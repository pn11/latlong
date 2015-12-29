#!/usr/bin/ruby
# -*- coding: utf-8 -*-


gpxdir = "gpx"
timestamp = ".timestamp"


ls = `ls -1 #{gpxdir}`
ls.lines{|line| 
in_file_name = "#{gpxdir}/#{line.chomp}"
cmd1 = "ruby change_name.rb #{in_file_name}"
puts cmd1
puts `#{cmd1}`
}


ls = `ls -1 #{gpxdir}`
ls.lines{|line|
  in_file_name = "#{gpxdir}/#{line.chomp}"
  csv_file_name = in_file_name.gsub("gpx", "csv")
  geojson_file_name = in_file_name.gsub("gpx", "geojson")
  if (!File.exist?(geojson_file_name))
    cmd2 = "ruby gpx2csv.rb #{in_file_name}"
    cmd3 = "csv2geojson #{csv_file_name} > #{geojson_file_name}"
    puts cmd2
    puts `#{cmd2}`
    puts cmd3
    puts `#{cmd3}`
  end
}

`touch #{timestamp}`





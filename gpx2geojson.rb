#!/usr/bin/ruby
# -*- coding: utf-8 -*-

in_file_name = ARGV[0]
csv_file_name = in_file_name.gsub("gpx", "csv")
geojson_file_name = in_file_name.gsub("gpx", "geojson")

`ruby gpx2csv.rb #{in_file_name}`
`csv2geojson #{csv_file_name} > #{geojson_file_name}`

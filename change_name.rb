#!/usr/bin/ruby
# -*- coding: utf-8 -*-


require "rexml/document"
STDOUT.sync = true

def change_name(in_file_name)
    puts "changing name of #{in_file_name}"
    doc = nil
    File.open(in_file_name) {|xmlfile|
        doc = REXML::Document.new(xmlfile)
    }

    time = ""
    status = true
    trkseg = doc.elements["/gpx/trk/trkseg"]
    trkseg.elements.each("trkpt"){|trkpt|
        trkpt.elements.each("time"){|t|
            time = t.text
            puts time
            break
        }
        break
    }

    if time. == nil
        puts "No time infomation."
        exit
    end

    time.gsub!(":","_")
    split = in_file_name.split("/")
    size = split.size
    newfname = ""

    for i in 0..size-1
        if i != size-1
            newfname += "#{split[i]}/"
        else
            split2 = split[i].split(".")
            newfname += "#{time}.#{split2[split2.size-1]}"
        end
    end

    bacname = in_file_name.gsub("gpx", "backup")
    backup = "cp #{in_file_name} #{bacname}"
    puts backup
    `#{backup}`

    cmd = "mv #{in_file_name} #{newfname}"
    puts cmd
    `#{cmd}`
end


#!/usr/bin/ruby
# -*- coding: utf-8 -*-

## Replace spaces in filenames with underscore.

STDOUT.sync = true

def no_space_for_filename(dirname)
    fnames = Dir.glob("#{dirname}/*\s*")
    fnames.each{|fname|
        File.rename(fname, fname.gsub("\s", "_"))
    }
end

#!/usr/bin/ruby

def time2unix(time)
    #    puts time ## test
    if time == nil
        return 0.0
    end
    if time.size < 8
        return 0.0
    end
    timesplit = time.split(/[-\s,T:_Z.]/)
    #    p timesplit ## test
    year = timesplit[0].to_i
    month = timesplit[1].to_i
    day = timesplit[2].to_i
    if time.size < 17
        hour = 0
        minute = 0
        second = 0
    else
        hour = timesplit[3].to_i
        minute = timesplit[4].to_i
        second = timesplit[5].to_i
    end
    unixtime = Time.local(year,month,day,hour,minute,second).to_i

    return unixtime
end
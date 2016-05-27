# under constrution
# http://qiita.com/1024jp/items/f0ccbab6422a6a64e130
set term pdf
set output "test.pdf"

set xdata time
set timefmt "%s"
set format x "%Y/%d/%m\n%H:%M"
set ylabel "Altitude"
#plot "../dat/2014-02-23T04_47_31.835Z.dat" u 1:3
plot "../dat/2016-05-27T08_08_53Z.dat" u 1:3 w l
exit

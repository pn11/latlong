# LatLong files

## Usage

1. Add GPX files in `gpx`.
1. Running `gpx2geojson.rb` will rename gpx files and convert it to geojson.
1. You can check with you web browser converted GeoJSON in `geojson`.  Needs `csv2geojson` ([mapbox/csv2geojson: magically convert csv files to geojson files](https://github.com/mapbox/csv2geojson)).

## To do

- Make graph of velocity, elevation, etc.
- Treatment of waypoints and routes in GPX.
- I noticed KML-formatted outputs from [山旅ロガー](http://www.chizroid.info/ytlog) have atomospheric pressure information. So I will use KML rather than GPX for new data.
- gpx2root

## My foot print

See [footprint.md](footprint.md).

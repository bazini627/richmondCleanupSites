# Hazardous Waste Cleanup Site In Richmond California

## Data Sources

### Richmond California Neighborhood Boundaries

- Data source: [City of Richmond Open Data Portal](https://opendata.ci.richmond.ca.us/)
- Data downloaded with `curl` command:

   `curl -Lk "http://opendata.ci.richmond.ca.us/api/geospatial/wt9g-tcue?method=export&format=GeoJSON" -o richmondNabes.json`

### Richmond Hazardous Waste Site Point Data

- Data source: State of California [GeoTracker](https://geotracker.waterboards.ca.gov/map/?CMD=runreport&myaddress=Sacramento) website.  
- Data points within a 30,000 foot radius of Richmond downloaded via their web map as an Excel file. 
- File converted to CSV with `gnumeric` on Linux with command:

  `ssconvert geoTrackerSites.xls geoTrackerSites.csv` 

### Richmond City Limit Data

- Data source: [Contra Costa County GIS](https://gis.cccounty.us/Downloads/Planning/) website.
- Shapefile converted to a GeoJSON projected in WGS84 with [Mapshaper](https://mapshaper.org/).

## Data processed with Node modules

See build scripts: https://github.com/bazini627/richmondCleanupSites/tree/master/build-scripts

- [Mapshaper](https://www.npmjs.com/package/mapshaper)
- [csv2geojson](https://www.npmjs.com/package/csv2geojson)
- [chalk](https://www.npmjs.com/package/chalk)
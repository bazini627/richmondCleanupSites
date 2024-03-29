# Hazardous Waste Cleanup Site In Richmond California

## Data Sources
### Richmond California Neighborhood Boundaries
- Data was downloaded from the [City of Richmond Open Data Portal](https://opendata.ci.richmond.ca.us/)
- `curl` was used to download the data and command used was `curl -Lk "http://opendata.ci.richmond.ca.us/api/geospatial/wt9g-tcue?method=export&format=GeoJSON" -o richmondNabes.json`

### Richmond Hazardous Waste Site Point Data
- Data was downloaded from State of California [GeoTracker](https://geotracker.waterboards.ca.gov/map/?CMD=runreport&myaddress=Sacramento) website.  
- Data points within a 30,000 foot radius of Richmond were downloaded via their web map as an Excel file. 
- File was converted to csv with `gnumeric` on Linux and command used was `ssconvert geoTrackerSites.xls geoTrackerSites.csv` 

### Richmond City Limit Data
- Data was downloaded from [Contra Costa County GIS](https://gis.cccounty.us/Downloads/Planning/) website.
- Shapefile was then converted to a GeoJSON projected in WGS84 with mapshaper.

## Node Modules Used
- [Mapshaper](https://www.npmjs.com/package/mapshaper)
- [csv2geojson](https://www.npmjs.com/package/csv2geojson)
- [chalk](https://www.npmjs.com/package/chalk)
// Declare that we would like to use our csv2geosjon script as a module
const csvConversion = require('./csv2geojson.js');
const colorScheme = require('./colorScheme.js');

// Run the module to convert our csv to geojson
csvConversion.csv2Geo();
colorScheme.getColors();
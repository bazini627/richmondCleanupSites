// Declare our required modules
const fs = require('fs');
const csv2geojson = require('csv2geojson');
const chalk = require('chalk');

// Fuction which we'll use to convert our cleanup site csv file to geojson
const csv2Geo = function convertCsvToGeojson() {

    // Read in our cleanup site csv file
    fs.readFile(__dirname + '/../project-files/geoTrackerSites.csv', 'utf-8', (err, csvString) =>{

        if (err) throw err;

        console.log(chalk.magenta('geoTrackerSites.csv loaded'))
        console.log(chalk.yellow('parsing csv data ...'))

        // Identify which fields in our csv contain lat/long data and the delimiter used in our file from our passed csvString variable
        csv2geojson.csv2geojson(csvString, {
            latfield: 'LATITUDE',
            lonfield: 'LONGITUDE',
            delimiter: ','
        }, (err, geojson) => {

            if (err) throw err;

            // Pass the geojson object we just created to our filtered fields function to refine what eilds we would like to retain
            var outGeoJSON = filterFields(geojson);

            // Output our json file to our data dir
            fs.writeFile(__dirname + '/../data/activeCleanupSites.json', JSON.stringify(outGeoJSON), 'utf-8', (err) => {

                if (err) throw err;

                console.log(chalk.green('activeCleanupSites.json created'));
            });
        });
    });
}

const filterFields = function filterGeojsonFields(geojson) {

    // Shorthand for features in geojson
    let features = geojson.features,
    
    // Empty array that will hold our filtered features
    newFeatures = [];

    // Loop through the features of our geojson
    features.forEach((feature) => {
        
        // Temporary object to store the fields we wish to keep
        tempProps = {}
        
        // Only keep the features if the city is Richmond and the status is Active or Open...
        if (feature.properties.CITY === 'RICHMOND' && (feature.properties.STATUS.includes('OPEN') || feature.properties.STATUS === 'ACTIVE' )) {
            
            for (let prop in feature.properties) {
                // Add the properties of our filtered data to the tempProps object
                tempProps = feature.properties;
            }

            // Add the features to our newFeatures array
            newFeatures.push({
                "type": feature.type,
                "geometry": feature.geometry,
                "properties": tempProps
            });
        }
    });

    // Return our final filtered geojson
    return {
        "type": "FeatureCollection",
        "features": newFeatures
    }
}

exports.csv2Geo = csv2Geo;
exports.filterFields = filterFields;
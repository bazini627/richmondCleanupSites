// Declare all of our required modules
const fs = require('fs');
const chalk = require('chalk');

// Function to extrac the pastel color scheme from the cartocolors json
const getColors = function extractColorFromJson() {

    // Read in the cartocolors json
    fs.readFile(__dirname + '/../project-files/cartocolors.json', function (err, response) {

        if (err) throw err;

        console.log(chalk.cyan("cartocolors.json file has been loaded"));

        // Assign the parsed JSON data to a variable
        const colorData = JSON.parse(response);

        console.log(chalk.cyan("cartocolors.json file has been parsed"));

        // Assign the desired key:value pairs from the json to a variable
        const dataToOutput = {
            'Pastel': colorData['Pastel']
        };

        console.log(chalk.cyan("Pastel color scheme has been extracted from the parsed data"));

        // Output the pastel color scheme to a json file
        fs.writeFile(__dirname + '/../data/pastelColors.json', JSON.stringify(dataToOutput), 'utf-8', function (err) {

            if (err) throw err;

            console.log(chalk.cyan("pastelColors.json has been created"));
        });
    });
}

// Export the function to later be used as a module
exports.getColors = getColors;
const ms = require('mapshaper')

// Filter out some of the fields in our richmondaNabes.json file
ms.runCommands('../project-files/richmondNabes.json -filter-fields nhcode,nhname -simplify dp 30% -o precision=.0001 format=geojson ../data/richmondNabes.json');

// Filter out some of the fields the city limits shapefile to only pull out Richmond and simplify the lines
ms.runCommands("../project-files/contraCostaCityLimits/BND_DCD_City_Limits.shp -filter-fields NAME -filter NAME=='Richmond' -simplify dp 30% -o precision=.0001 format=geojson ../data/richmondCityLimits.json");


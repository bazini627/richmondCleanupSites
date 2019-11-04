const ms = require('mapshaper')

// Filter out some of the fields in our richmondaNabes.json file
ms.runCommands('../project-files/richmondNabes.json -filter-fields nhcode,nhname -simplify dp 30% -o precision=.0001 format=geojson ../data/richmondNabes.json');
const csvFile = './inputCSV.csv';
const csv = require('csvtojson');
const fs = require('fs');

csv().fromFile(csvFile).on('json', json => {
  fs.writeFileSync('jsonOutput.json', JSON.stringify(json));  
})
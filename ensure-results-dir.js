const fs = require('fs');
const path = require('path');

const resultsDir = path.join(__dirname, 'results');

if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
    console.log('Results directory created.');
} else {
    console.log('Results directory already exists.');
}
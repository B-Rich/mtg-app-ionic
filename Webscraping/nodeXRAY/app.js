var jsonfile = require('jsonfile');
// var inFile = 'test.json';
// var outFile = 'outputTest.json';

var inFile = 'AllSets.json';
var outFile = 'outputSetTest.json';

// var data = {};

data = jsonfile.readFile(inFile, function (err, obj) {
    // console.dir(obj);

    var data = obj;

    for(var i = 0; i < 2; i++) {
        console.dir(data.i);
    }

    // for (var i in data) {
    //     console.dir(data[i]);
    // }

    // jsonfile.writeFile(outFile, data, {spaces: 2}, function (err) {
    //     console.error(err);
    // })
});


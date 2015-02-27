var cp = require('child_process'),
    fs = require('fs'),
    path = require('path');

var child = cp.fork('./child'),
    text = fs.readFileSync(path.join(__dirname, 'code.txt'), 'utf8');

child.send(text);

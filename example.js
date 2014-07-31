var cp = require('child_process'),
    fs = require('fs'),
    path = require('path');

var child = cp.fork('./child'),
    text = fs.readFileSync(path.join(__dirname, 'code.txt'), 'utf8');

child.send({
    type: 'methodCall',
    objectId: 2,
    methodName: 'process',
    args: [
        text,
        {
            devMode: true,
            cache: false,
            exportName: 'BEMHTML',
            applyFuncName: 'apply'
        }
    ],
    promiseId: 2
});

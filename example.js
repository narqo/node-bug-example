var cp = require('child_process');
var child = cp.fork('./child');
var message = new Buffer(65533);
message.fill('x');
child.send(message.toString());

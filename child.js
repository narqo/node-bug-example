process.on('message', function(data) {
    setImmediate(function() {
        console.log('all OK');
    });
});

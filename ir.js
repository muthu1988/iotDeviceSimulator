var Gpio = require('onoff').Gpio;
var sensorOne = new Gpio(2, 'in', 'both');
var { sendData } = require('./index.js');
sensorOne.watch(function (err, value) {
    if (err) {
        console.error('There was an error', err);
        return;
    }
    if(value) {
        console.log('vehicle not parked');
        sendData({ id: 1,zone_id: 1, isbooked: 0 });
    } else {
        console.log('vehicle parked');
        sendData({ id: 1,zone_id: 1, isbooked: 1 });
    }
});

//function to run when exiting program
function unexportOnClose() {
    sensorOne.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c
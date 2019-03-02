var Gpio = require('onoff').Gpio;
var sensorOne = new Gpio(2, 'in');

sensorOne.watch(function (err, value) {
    if (err) {
      console.error('There was an error', err);
    return;
    }
    if(value)
        console.log('something sensed:'+value);
    else
        console.log('nothing sensed:'+value);
  });
  
//function to run when exiting program
  function unexportOnClose() {
    sensorOne.unexport(); // Unexport Button GPIO to free resources
  };
  
  process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c
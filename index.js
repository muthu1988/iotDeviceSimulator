var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
  keyPath: './certs/8dfa4ca1fb-private.pem.key',
  certPath: './certs/8dfa4ca1fb-certificate.pem.crt',
  caPath: './certs/rootCA.pem.crt',
  host: 'a1xzl4epedfphc-ats.iot.us-east-1.amazonaws.com'
});

// Connect
device.on('connect', function () {
  console.log('Connected');
  // Subscribe to myTopic
  device.subscribe("myTopic");
  // Publish to myTopic
  device.publish("myTopic", JSON.stringify({ message: 'hello' }));
});

// Receiving a message from any topic that this device is subscribed to.
device.on('message', function (topic, payload) {
  console.log('message', topic, payload.toString());
});

// Error
device.on('error', function (error) {
  console.log('Error: ', error);
});
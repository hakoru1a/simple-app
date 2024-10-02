'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(
    `<body style='background-color:#283E5B'><h1 style='color: orange;text-align:center'>Test Hello AWS ${os.hostname()}</h1></body>`
  );
});

app.post('/', (req, res) => {
  const interfaces = os.networkInterfaces();
  let ipAddress = '';

  // Loop through network interfaces and find the IPv4 address
  for (let interfaceName in interfaces) {
    const iface = interfaces[interfaceName].find(
      iface => iface.family === 'IPv4' && !iface.internal
    );
    if (iface) {
      ipAddress = iface.address;
      break;
    }
  }

  res.send({
    data: `Test This is secret data from ${os.hostname()}`,
    ip: ipAddress
  });
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

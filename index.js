const net = require('net');
const { parseCommand, executeCommand, init } = require('./src/core');

const port = 6378;
const host = "127.0.0.1";
const server = net.createServer((connection) =>
  {
    console.log('Client connected');
    connection.on ('data', (data) =>
      {
        let response
        // console.log('==>' + data.toString());
        try {
        const {command, args} = parseCommand(data);
         response = executeCommand(command, args);

        } catch (error) {
          response = "-Error unknown command\r\n"
        }

        connection.write(response);
      });
  });

  server.listen(port, host, () => {
    init();
    console.log(`Redis Clone Server started at port ${port}`);
  });
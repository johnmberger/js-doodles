const http = require('http');
const port = 8000;
const fs = require('fs');

http.createServer((req, res) => {

  var operation = req.url.split('/')[1];
  var num1 = parseFloat(req.url.split('/')[2]);
  var num2 = parseFloat(req.url.split('/')[3]);

  function acceptRequest(response) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(`<h1>${response}</h1>`);
  }

  function rejectRequest() {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 400;
    res.end('Usage: /[ add | sub | mult | div ]/ NUM / NUM /');
  }

  if (req.url.split('/')[3] == undefined) {
    rejectRequest();
  } else if (operation == 'add') {
    let sum = num1 + num2;
    acceptRequest(`${num1} + ${num2} = ${sum}`);
  } else if (operation == 'sub') {
    let diff = num1 - num2;
    acceptRequest(`${num1} - ${num2} = ${diff}`);
  } else if (operation == 'mult') {
    let prod = num1 * num2;
    acceptRequest(`${num1} x ${num2} = ${prod}`);
  } else if (operation == 'div') {
    let quot = num1 / num2;
    acceptRequest(`${num1} / ${num2} = ${quot}`);
  } else {
    rejectRequest();
  }

}).listen(port);

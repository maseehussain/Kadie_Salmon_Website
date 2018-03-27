const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const sockets = require('./lib/sockets');
sockets.connect(server);

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

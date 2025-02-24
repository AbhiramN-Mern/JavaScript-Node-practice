const express = require('express');
const morgan = require('morgan');
const app = express();

// Third-party middleware
app.use(morgan('dev')); // Logging middleware
const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log('Middleware executed');
  next(); // Pass control to the next middleware or route handler
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));

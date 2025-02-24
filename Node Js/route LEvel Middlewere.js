const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-level middleware triggered');
  next(); 
});

router.get('/example', (req, res) => {
  res.send('This is the example route!');
});
app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

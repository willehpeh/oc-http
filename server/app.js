const express = require('express');
const { DUMMY_PROPERTIES } = require('./data');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/api/properties', (req, res) => {
  res.json(DUMMY_PROPERTIES);
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
});

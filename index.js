const express = require('express');
const app = express();

app.get('/cityInfo', (req, res) => {
  const state = req.query.state;
  const city = req.query.city;
  // handle the state and city values as needed
  res.send(`City info for ${city}, ${state}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

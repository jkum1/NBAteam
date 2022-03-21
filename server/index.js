const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('client/dist'));

app.get('/teams', (req, res) => {
  axios.get('https://www.balldontlie.io/api/v1/teams')
    .then((data, err) => {
      if (err) {
        throw err;
      }
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
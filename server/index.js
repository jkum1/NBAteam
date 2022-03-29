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

app.get('/game', (req, res) => {
  const id = req.query.id;
  if (req.query.id === 0) {
    id = 1;
  }
  const season = "seasons[]";
  const teamId = "team_ids[]";
  axios.get('https://www.balldontlie.io/api/v1/games', {
    params: {
      [season]: 2021,
      [teamId]: id
    }
  })
    .then((data, err) => {
      if (err) {
        throw err;
      }
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
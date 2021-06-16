const express = require('express');
const path = require('path');

const app = express();
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/../client/views"));

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});

app.get('/capture/:capture_id', (req, res) => {
  res.render("share_preview", {
    id: req.params.capture_id
  })
});

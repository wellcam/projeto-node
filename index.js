const express = require("express");
const PORT = 3000;
const app = express();
const routes = require('./routes');

app.use(express.json())
app.use(express.static(__dirname));

routes(app);

app.listen(PORT, () => {
  console.log("################ Server online ", PORT, " ################");
});
const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json())
app.use(express.static(__dirname));

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/web/index.html");
});


app.listen(PORT, () => {
  console.log("Server online ", PORT);
});
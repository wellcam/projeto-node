const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json())

app.get("/", (req, res, next) =>{
  res.send({message: 'Servidor Online', status:200});
});


app.listen(PORT, () => {
  console.log("Server online ", PORT);
});
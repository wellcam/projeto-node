const {Router} = require('express')
const router = Router()

router.get("/", (req, res) =>{
    console.log(__dirname);
    res.sendFile("/home/wellington/Documents/Alura/aws-testes/projeto-node/index.html");
});

module.exports = router;
const router = require('express').Router();
const fs = require('fs');

router.post('/downloads', (req, res, next)=>{
    // fs.appendFileSync('output.bin', req.body)
    console.log(req.body);
    //do whatever with your code here.
    res.send();
})

module.exports.router = router
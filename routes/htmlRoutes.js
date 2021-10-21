// GET * should return the index.html file.
const path = require('path');
const router = require('express').Router()

// grab information from notes.html 
router.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, `../public/notes.html`))

})

// grab information from index.html
router.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,`../public/index.html`))
 })



 module.exports = router;

// GET /notes should return the notes.html file.
const fs = require('fs');
const router = require('express').Router();
let db = require('../db/db.json');

// grabs information from user input, puts it into a json object and is synced with db.json
router.get('/notes', (req,res)=>{
    db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF8'))
    res.json(db)
})

// places user information into an array, stores data and places it on the page
router.post('/notes', (req,res)=>{

    let noteModel = {
        title:req.body.title,
        text:req.body.text,
        // creates random id for inputs
        id:Math.floor(Math.random()*5000)
    }
  
    db.push(noteModel);
    fs.writeFileSync('./db/db.json', JSON.stringify(db,null,4));
    res.json(db)
})


module.exports = router;
// GET /notes should return the notes.html file.
const { NOTINITIALIZED } = require('dns');
const fs = require('fs');
const { stringify } = require('querystring');
const { receiveMessageOnPort } = require('worker_threads');
const router = require('express').Router();
let db = require('../db/db.json');
// const unique = require('unique')




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


// router.delete('/notes', (req,res)=>{
    // need an id key to note model, for loop over db.length, if id of data != id of note slected to delete, push into an array for notes to keep, notes to keep array ---> db array db=notestokeeparr
//     for (let i = 0; i < db.length; i++) {
//         if (id !== noteID){

//         }
        
//     }
//     fs.writeFileSync('./db/db.json', JSON.stringify(db,null,4))
//     res.json(db)

// })

module.exports = router;
// GET /notes should return the notes.html file.
const fs = require('fs');
const { stringify } = require('querystring');
const { receiveMessageOnPort } = require('worker_threads');
const router = require('express').Router();
let db = require('../db/db.json');
const unique = require('unique')




// grabs information from user input, puts it into a json object and is synced with db.json
router.get('/notes', (req,res)=>{
    db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF8'))
    res.json(db)
})

// places user information into an array, stores data and places it on the page
router.post('/notes', (req,res)=>{
    let noteModel = {
        title:req.body.title,
        text:req.body.text
        // if note needs to be deleted, it will need an id
    }
    req.body.id = unique();
    db.push(noteModel)
    fs.writeFileSync('./db/db.json', JSON.stringify(db,null,4))
    res.json(db)
})

// takes stored information from array and places it into main section when clicked
// router.post('/notes', (req,res)=>{
//     activeNote.push(db)
    // fs.writeFileSync('./db/db.json', JSON.stringify(db,null,4))
//     res.json(activeNote)
// })


// router.delete('/notes', (req,res)=>{
    // need an id key to note model, for loop over db.length, if id of data != id of note slected to delete, push into an array for notes to keep, notes to keep array ---> db array db=notestokeeparr
//     db.push(noteModel)
//     fs.writeFileSync('./db/db.json', JSON.stringify(db,null,4))
//     res.json(db)

// })

module.exports = router;
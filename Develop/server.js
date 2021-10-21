// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes')
const notesRoutes = require('./routes/notesRoutes')
const PORT = 3000;


// allows information to be recieved and stored 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// tells server to look in public folder for information
app.use(express.static('public'));

// connects both scripts to the server with appropriate location
app.use('/api', notesRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


const express = require('express');
const path = require('path');
//const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');  // uuidv4()
const fs = require('fs');
//const db = require('./db/db.json')

// This creates our APP instance 
const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes

app.get('/api/notes', (req, res) => {
   
    fs.readFile('./db/db.json', 'UTF-8', (err, data) => {
        if(err) {
            throw err;
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(newNote);
            
    fs.writeFile("./db/db.json", JSON.stringify(notes))
        res.json(notes);
        
            
        }

        //console.log("Dataset: ", data);
        // what do we return to the calling request function?
        res.status(200).json(JSON.parse(data));
    })
})

app.post('/api/notes', (req, res) => {
    //console.log("Req Body: ", req.body);
    res.json(notes);
});

app.get('/notes', (req, res) => {
    
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, './public/index.html'))
});


app.post('/test', (req, res) => {
    //console.log("Req Obj: ", req.body);
    //console.log("Req Type: ", typeof req.body);
});

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Turn on our server
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

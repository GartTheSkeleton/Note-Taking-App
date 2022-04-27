const { notes } = require('./Develop/db/db.json')
const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/api/notes', (req, res) => {
  let results = notes;
  //res.sendFile(path.join(__dirname, './Develop/db/db.json'))
  res.json(results);
  });

app.post('/api/notes', (req, res) => {
  const note = createNewNote(req.body, notes);
  });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
  });

app.get('/assets/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/assets/css/styles.css'));
  });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });
 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
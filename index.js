// Creating a http server using the http module
const express = require('express');
const path = require('path');

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

require("dotenv").config();

const projectID = process.env.PROJECT_ID;
var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: `${projectID}.firebaseapp.com`,
    databaseURL: `https://${projectID}.firebaseio.com`,
    projectId: projectID,
    storageBucket: `${projectID}.appspot.com`,
    messagingSenderId: "889753875782",
    appId: "1:889753875782:web:add2635411645966912147",
    measurementId: "G-4267PR5636"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.database().ref('users/').set({
//     username: 'name',
//     email: 'email',
//     profile_picture : 'imageUrl'
//   });

const app = express();
//app.use(express.static('static'));

app.use(express.json());

app.use('/public', express.static(path.join(__dirname,'static')));
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'static', 'index.html'));
});
app.get('/:page', (req,res)=>{
    res.sendFile(path.join(__dirname,'static', req.params.page));
});

app.post('/api',(req,res)=>{
    console.log(req.body);
});
// app.post('/api', (req,res)=>{
//     console.log(req.body);
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT);


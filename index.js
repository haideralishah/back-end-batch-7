
// console.log("inside index file");

// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }

// console.log('loop finished again');























// import React from 'react';
// var React = require('react');

// var http = require('http');

// http.createServer(function (req, res) {

//     if (req.url === '/login') {
//         res.end('Login route working fine');
//     }
//     else if (req.url === '/signup') {
//         res.end('signup route working fine');
//     }
//     else {
//         res.end("Hello World");
//     }

// }).listen(4000);































































// import express from 'express';

// const app = express();

// app.use((req, res, next) => {
//     // console.log(req.url);
//     next();
// });

// app.get("/signup", (req, res, next) => {
//     console.log('inside signup ');
//     res.end('Signup run');
// });

// app.use((req, res) => {
//     console.log('inside second middleware 1');
//     res.end();
// })

// app.listen(7000, () => {
//     console.log('=================== server started on 7000 ===================');
// });
















































































import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js'

const app = express();

mongoose.connect("mongodb+srv://akbar:saylani123@cluster0.no8pi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

mongoose.connection.once('open', () => {
    console.log('=================== ISI Secrete Database Connected ===================');
});
mongoose.connection.on('error', () => {
    console.log('=================== Black Vigo is outside your home ===================');
});


app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: false }))


// app.use((req, res) => {
//     console.log(req.body, '***************');
//     res.end();
// });

app.post('/add-student', async (req, res) => {
    console.log(req.body);
    let student = new Student({
        studentName: req.body.stName,
        email: req.body.emailAddress,
        rollNumber: req.body.rollNum
    });
    let savedData = await student.save();

    res.json(savedData);
});


app.listen('5000', () => {
    console.log('=================== server started on 5000 ===================');
});

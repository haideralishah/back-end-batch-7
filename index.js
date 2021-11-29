
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































































import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

let users = [
    {userName: 'haider', rollNumber:'2643'},
    {userName: 'ali', rollNumber:'2644'},
]


app.post("/signup", (req, res, next) => {
    console.log('inside signup ');
    res.end('Signup run');
});

app.use((req, res) => {
    console.log('inside second middleware 1');
    res.end();
})

app.listen(3000, () => {
    console.log('=================== server started on 3000 ===================');
});


import express from 'express';
import mongoose from 'mongoose';
import data from "./data.js";
import Videos from "./dbModel.js";

//const express = require("express");
//const mongoose = require("mongoose");
//const data = require("./data.js");
//const Videos = require("./dbModel.js")[]



//app config
const app = express();
const port = process.env.PORT || 8100;

//middlewares 
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeaders('Access-Control-ALlow-Origin', '*'),
    res.setHeaders('Access-Control-Allow-Headers','*'),
    next();
});
//db config 

const connection_url = 'mongodb+srv://admin:GQo4DQ8TnVof0wiM@cluster0.5lc1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url, 
    async(err)=>{
        if(err) throw err;
        console.log("connected to db")
    }
);


//api endpoints 


app.get('/', (req, res) => res.status(200).send('HELLO WORLD'));


app.get('/v1/posts', (req, res) => res.status(200).send(data) );

app.get('/v2/posts', (req, res)=>{

    Videos.find((err, data)=>{
        if(err)
        {

        res.status(500).send(err);
        }
        else
        {
            res.status(200).send(data);
        }
    });
});


app.post('/v2/posts', (req, res)=> {
    //POST request is to ADD DATA to the database
    //IT will let us add a video to the videos COLLECTION 
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data)=>{
        if (err)
        {
            res.status(500).send(err)
        }
        else 
        {
            res.status(201).send(data)
        }
    })
})

//listen 
app.listen(port, ()=>console.log(`listening on localhost: ${port}`));


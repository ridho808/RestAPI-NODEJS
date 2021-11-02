const express = require('express');

var app = express()
const PORT = process.env.PORT || 808

app.get('/',(req,res)=>{
    res.send("Menerima metode GET HTTP");
});

app.post('/',(req,res)=>{
    res.send("menerima metode POST HTTP");
});

app.delete('/',(req,res)=>{
    res.send("Menerima metode DELETE HTTP");
});

app.put('/',(req,res)=>{
    res.send("Menerima Metode PUT HTTP");
});

app.listen(PORT,()=>{
    console.log(`Aplikasi berjalan di ${PORT}!`);
});
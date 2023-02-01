const express = require('express');
const { default: mongoose } = require('mongoose');
const productRouter = require('./routes/productRoutes');


const app =  express();
const cors = require("cors");

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
app.use(express.json());


mongoose.connect("mongodb+srv://Elgun:7951587Das@cluster0.igztkwx.mongodb.net/productbd")
    .then(res => {
        console.log('Connect!');
    })
    .catch(err => {
        console.log('err', err);
    })


app.use('/api/product', productRouter);

app.get('/', function (req, res) {
    res.json("Hello");
})

app.listen(8080);
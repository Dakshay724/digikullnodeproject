const express=require('express');
const cors=require('cors')
require('./connection')
const productroute=require('./routes/product')

const app=express();

//middleware
app.use(cors())
app.use(express.json())
app.use('/product',productroute)
const server= require('http').createServer(app)

const PORT=5050;

server.listen(PORT,()=>{
    console.log('listening to port',PORT)
})
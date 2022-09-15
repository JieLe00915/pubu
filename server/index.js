const express=require('express')
const app=express()
const router=require("./router")
const cors=require('cors')
app.use(cors())
app.use('/api',router)
app.listen(5000,() => { 
    console.log('服务器5000启动成功');
 })
import express from "express"
import { wrriteAgent } from "./agentsFunctions.js"
import { readAgent } from "./agentsFunctions.js"
import fs from "fs/promises"
const port=3000
const app=express()

app.post('/',(req,res)=>{
    console.log("hello")
    const result=wrriteAgent()
    res.send(result)
})

app.get('/a',async(req,res)=>{
    console.log("hy")
    const result=await readAgent()
    console.log("hy2")
    res.send(result)
})



app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
        
})
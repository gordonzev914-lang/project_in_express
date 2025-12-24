import express from "express"
import { writeAgent } from "./agentsFunctions.js"
import { readAgent } from "./agentsFunctions.js"
import {writereport} from "./reportFunctions.js"
import { readReports } from "./reportFunctions.js"
import fs from "fs/promises"
const port=3000
const app=express()

app.post('/',(req,res)=>{
    console.log("hello")
    const result=writeAgent()
    res.send(result)
})

app.get('/a',async(req,res)=>{
    console.log("hy")
    const result=await readAgent()
    console.log("hy2")
    res.send(result)
})

app.post('/report',(req,res)=>{
    console.log("hello")
    const result=writereport()
    console.log("hello2")
    res.send(result)
})

app.get('/report', async(req,res)=>{
    console.log("start")
    const result=await readReports()
    console.log("end")
    res.send(result)
})




app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
        
})

import fs from "fs/promises"
export const wrriteAgent = () => {
    try {
        const agents=[{id:1,name:"moshe"}]
        let agentslist = JSON.stringify(agents);
        fs.writeFile('./agentsList.json', agentslist, 'Utf-8',(agentslist)=>{console.log(agentslist)})
        return "2 agents created successfully"
    } catch (err) {
        console.log(err);
    }
}


export const  readAgent=async()=>{
    try{
const data=await fs.readFile('./agentsList.json','utf-8',()=>{})
console.log('data' ,data)
const data2=JSON.parse(data)
    console.log("work2")
    console.log("hello",data2)
    return data2
    }
    catch (err){
        console.log(err)
    }
}
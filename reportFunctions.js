import fs from "fs/promises"
export const writereport=()=>{
    try{  
        const reports=[{id:13}]
        let reportslist=JSON.stringify(reports)
        fs.writeFile("./reportsList.json",reportslist,"utf-8",(reportslist)=>{consle.log(reportslist)})
        console.log("report file created successfully")
        return reportslist
        }
        catch(err){
            console.log(err)
        }
    }
export const readReports=async()=>{
    try{
        const reportsdata=await fs.readFile("./reportsList.json","utf-8",()=>{})
        console.log("reports",reportsdata)
        const reportData2=JSON.parse(reportsdata)
        console.log("reportData2",reportData2)
        return reportData2
    }
    catch(err){
        console.log(err)
    }
}
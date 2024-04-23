const express=require("express")
const mongoose =require("mongoose")
const authRoutes=require("./Routes/auth")
const adminRoutes=require("./Routes/admin")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(authRoutes)
app.use(adminRoutes)


mongoose.connect("mongodb+srv://Aniket1506:15062001@cluster0.ljdinxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
console.log("Connected to DB");    
app.listen(8080,()=>{
        console.log("Server running on port 8080");
    })
}).catch(err=>{
    console.log("Couln't connect to db");
})


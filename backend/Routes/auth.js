const express=require("express")
const bcrypt=require("bcrypt")
const User=require("../Schema/User")
const router=express.Router()

router.post("/login",(req,res)=>{
    const {email,password}=req.body
    User.findOne({
        email:email
    }).then(resUser=>{
        return bcrypt.compare(password,resUser.password)
    }).then(result=>{
        if(result){
            res.status(200).json({
                message:"Logged in Sucessfully"
            })
           return res.send()
        }
        else if(!result){
            res.status(400).json({
                message:"incorrect Password"
            })
            return res.send()
        }
    }).catch(err=>{
        console.log("There was an error");
        res.status(400).json({message:"Error while Logging In"})
        res.send()
    })
})

router.post("/signup",(req,res)=>{
    const {name,email,password}=req.body;
    User.findOne({email:email}).then((result)=>{
        if(result){
            res.status(400).json({message:"User Already Exists"})
            return res.send()
            
        }else
        if(!result){
            return bcrypt.hash(password,12)
        }
    }).then((enPass)=>{
        const newUser=new User({
            email:email,
            password:enPass,
            name:name
        })
         newUser.save()
         res.status(200).json({message:"User Created"})
         res.send()
    })
    .catch(err=>{
        console.log("Error Occured While Signup")
        console.log(err);
        res.status(400).json({message:"Error Occured"})
        res.send()
    })
})


module.exports=router
const express=require("express")
const multer=require("multer")
const upload=multer({dest:"uploads/"})
const xlsx =require("xlsx")
const User=require("../Schema/User")
const router=express.Router()
const bcrypt=require("bcrypt")

router.post("/postdata",upload.single('file'),(req,res)=>{
    const file=req.file;
    // console.log(file);
    // console.log(data)
    if(!file){
        res.status(404).json({msg:"Upload Failed"})
        res.send()
    }

    if (file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        res.status(400).json({ message: 'Uploaded file is not an Excel file' });
        return res.send()
    }

    // const workbook = xlsx.readFile(file.path);
    // const sheetName = workbook.SheetNames[0];
    // const sheet = workbook.Sheets[sheetName];
    // const jsonData = xlsx.utils.sheet_to_json(sheet);
    // console.log(jsonData);

    const uploadedFilePath = `uploads/${file.filename}`;
    const fileData = xlsx.readFile(uploadedFilePath);
    const uploadedSheet = fileData.Sheets[fileData.SheetNames[0]];
    const uploadedData = xlsx.utils.sheet_to_json(uploadedSheet);
    uploadedData.forEach(data=>{
        const email=data.Email,name=data.Name,password=String(data.Password)
        // console.log(typeof name);
        User.findOne({email:email}).then((result)=>{
            if(result){
                console.log(`user with email ${email} already exists`);
                return Promise.resolve()
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
             return newUser.save()
             
        }).then(
            res=>{
                console.log(`User with email ${email} Created`);
            }
        )
    })
    res.status(200).json({msg:"All Users Uploaded"})
})

module.exports =router
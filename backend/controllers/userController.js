
const userModel = require('../models/userModel');
const userContact= require('../models/userContact')
const userAddress= require('../models/userAddress')

const jwt = require("jsonwebtoken");
const SECRET_KEY = "process.env.SECRET_KEY";
const signup=async(req,res)=>{

        const {name , gender , dob , age, phn} = req.body;
        try {
            const existingUser =await userModel.findOne({name:name});
            console.log(existingUser);
           if (existingUser) {
            console.log("existingUser");
            return res.status(400).json({message:"user already exists"});
            
           
           }

           const result = await userModel.create({
            name:name,
            gender:gender,
            dob:dob,
            age: age
           });

           const token = jwt.sign({id:result._id}, SECRET_KEY)
           res.status(201).json({message:"Signup Successfully",result:result,token:token})
        } catch (error) {
            res.send(error);
            res.status(500).json({message:"something went wrong!!"});
        }

}
const NumberLogin=async(req,res)=>{

        const {phn} = req.body;
        try {
            const existingUser =await userContact.findOne({phn: phn});
               if (!existingUser) {
                return res.status(404).json({message:"User NOT FOUND"});
               }
            
            const token = jwt.sign({phn:phn,id:existingUser._id}, SECRET_KEY) ;
            
            res.status(200).json({message:"LoggedIn Successfully",user:existingUser,token:token});
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Something went wrong!!"})
            
        }
       
    }

    const contactNumber=async(req,res)=>{

        const { phn} = req.body;
        try {
            const existingUser =await userContact.findOne({phn:phn});
            console.log(existingUser);
           if (existingUser) {
            console.log("existingUser");
            return res.status(400).json({message:"user already exists"});
            // return res.status(400).alert('This number is already exist');
           }

           const result = await userContact.create({
            phn:phn
           });

           const token = jwt.sign({id:result._id}, SECRET_KEY)
           res.status(201).json({message:"Phn Number Updated Successfully",result:result,token:token})
        } catch (error) {
            res.send(error);
            res.status(500).json({message:"something went wrong!!"});
        }

}

const userAdd=async(req,res)=>{

    const { state, district , pinCode} = req.body;
    try {
        const existingUser =await userAddress.findOne({});
        console.log(existingUser);

       const result = await userAddress.create({
        state: state,
        district: district,
        pinCode : pinCode
       });

       const token = jwt.sign({id:result._id}, SECRET_KEY)
       res.status(201).json({message:"Address updated Successfully",result:result,token:token})
    } catch (error) {
        res.send(error);
        res.status(500).json({message:"something went wrong!!"});
    }

}

module.exports ={signup,NumberLogin,contactNumber,userAdd}
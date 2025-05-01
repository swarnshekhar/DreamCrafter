const mongoose = require('mongoose');

const AdminSchema=new mongoose.Schema({
    
    name:{
      type:string,
      default:"me",
      required:true,
    },
    color:{
        type:string,
        default:"violet",
        required:true,
    },
    role:{
        type:string,
        default:"user",
        required:true
    },
    email:{
       type:string,
       required:true,
    },
    password:{
        type:string,
        required:true,
    },
    phone:{
        type:string,
        required:true,
    },
    gender:{
        type:string,
        required:true,
        default:"female",
    }
})

const Admin=mongoose.model('Admin',AdminSchema);
module.exports=Admin;
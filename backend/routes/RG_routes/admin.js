const express = require("express");
const router = require("express").Router();
const validator = require("validator");
const adminauth = require('../../middleware/Admin_middleware/adminauth')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let admin= require("../../models/RG_models/admin");

//Admin Register to Web application
router.post('/adminsignup', async (req, res) => {
    try {
      const {
        name, 
        phone,
        nic,
        sliitid,
        email,
        password,

      } = req.body

      //Check application has already created account using given email or SLIIT  id  
      let admin_a = await admin.findOne({ email });
      if (admin_a) {
        throw new Error("User already exists");
      }
    
      let admin2 = await admin.findOne({ sliitid });
      if (admin2) {
        throw new Error("User already exists");
      }
      admin_a = {
        name: name,
        phone:phone,
        nic : nic,
        sliitid : sliitid,
        email : email,
        password : password,
      }
 
//create new account and genarate token
const newadmin = new admin(admin_a)
      await newadmin.save()
      const token = await newadmin.generateAuthToken()
      res
         .status(200)
         .send({admin: newadmin, token: token, status: 'Admin Account Creation Success'})
    } catch (error) {
      res
      .status(500)
      .send({error: error.message})
       console.log(error)
    }
  });

//admin login function    
router.post('/adminsignin', async (req, res) => {
  try {
    const {sliitid, password} = req.body
    const Admin = await admin.findByCredentials(sliitid, password)
    const token = await Admin.generateAuthToken()
    res.status(200).send({token: token, Admin: Admin})

  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
});


//admin member logout the profile
router.get("/adminlogout",adminauth,async(req,res)=>{
  try{
    req.Admin.token = req.Admin.token.filter((token)=>{
      return token.token !== req.token;
    });
    await req.Admin.save();
    res.status(200).save("Logout Successfully!!!!");
  }
  catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
});

//admin member profile 
router.get("/adminprofile",adminauth,async (req, res) => {
  try {
    res.status(201)
    res.send({ status: "Admin Details fetched", Admin: req.Admin});
  } catch (error) {
    res.status(500)
    res.send({ status: "Error with Admin profile", error: error.message });
  }
});

//delete admin member account
router.delete("/admindelete",adminauth, async (req, res) => {
  try {
    const Admin = await admin.findById(req.Admin.id);
    if (!Admin) {
      throw new Error("There is no Admin Member to delete");
    }
    const deleteProfile = await admin.findByIdAndDelete(req.Admin.id);
    res.status(200).send({ status: "Member deleted", Admin : deleteProfile });
  } catch (error) {
    res
      .status(500)
      .send({ status: "error with id", error: error.message });
  }
})



module.exports = router;
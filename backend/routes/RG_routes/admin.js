const express = require("express");
const router = require("express").Router();
const validator = require("validator");
const auth = require('../../middleware/Admin_middleware/auth')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let admin= require("../../models/RG_models/admin");

//Admin Register to Web application
router.post('/adminsignup', async (req, res) => {
    try {
      const {
        fname, 
        phone,
        nic,
        sliitid,
        email,
        password,

      } = req.body

      //Check application has already created account using given email or SLIIT staff id  
      let admin1 = await admin.findOne({email})
      let admin2 = await admin.findOne({sliitid})
      if (admin1 || admin2) {
        throw new Error('Admin Account Already Exists')
      }
      let admin3 = await admin.findOne({sliitid})
      if(admin3){
        throw new Error('Username Already Exists')
      }
        admin1 = {
        fname: fname,
        phone:phone,
        nic : nic,
        sliitid : sliitid,
        email : email,
        password : password,
      }
 
      //create new account and genarate token
      const newadmin = new admin(admin1)
      await newadmin.save()
      const token = await newadmin.generateAuthToken()
      res.status(200).send({admin: newadmin, token: token, status: 'Admin Account Creation Success'})
    } catch (error) {
      res.status(500).send({error: error.message})
      console.log(error)
    }
  });

//admin login function    
router.post('/adminsignin', async (req, res) => {
    try {
      const {sliitid,password} = req.body
      const admin1 = await admin.findByCredentials(sliitid, password)

      if(admin1){
        const token = await admin1.generateAuthToken()
        res.status(200).send({token: token, admin1: admin1, message : "login success"})
      }else{
        throw new Error('Invalid Credentials')
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
      console.log(error);
    }
  });

module.exports = router;
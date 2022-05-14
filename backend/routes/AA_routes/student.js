const express = require("express");
const router = require("express").Router();
let student = require("../../models/AA_models/student");
let group = require("../../models/AA_models/student-group");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('../../middleware/auth');

//sign up

router.post("/signup", async (req, res) => {
  try {
    const {
      name,
      nic,
      faculty,
      student_id,
      batch,
      specialization,
      phone,
      DOB,
      email,
      pwd,
      imageUrl
    } = req.body;

  
    let student_a = await student.findOne({ email });
  if (student_a) {
    throw new Error("User already exists");
  }

  let student_b = await student.findOne({ student_id });
  if (student_b) {
    throw new Error("User already exists");
  }


    student_a = {
      name: name,
      nic: nic,
      faculty: faculty,
      student_id: student_id,
      batch: batch,
      specialization: specialization,
      phone: phone,
      DOB: DOB,
      email: email,
      pwd: pwd,
      imageUrl: imageUrl
    };

    const newstudent = new student(student_a);
    await newstudent.save();
    const token = await newstudent.generateAuthToken();
    res
      .status(201)
      .send({ status: "student Created", student: newstudent, token: token });
      console.log(student_a);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({error: error.message});
  }
});

//login

router.post('/login', async (req, res) => {
  try {
    const {student_id, pwd} = req.body
    const Std = await student.findByCredentials(student_id, pwd)
    const token = await Std.generateAuthToken()
    res.status(200).send({token: token, Std: Std})

  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }

})

    //get student profile

    router.get("/profile", auth, async (req, res) => {
    
      try {
        res
          .status(201)
          .send({ status: "Student logged in", Std: req.Std
         });
      } catch (error) {
        res
          .status(500)
          .send({ status: "Error with /profile", error: error.message });
      }
    });

    //update

router.put('/update', auth, async (req, res) => {

  try {
    const {
      name,
      nic,
      faculty,
      student_id,
      batch,
      specialization,
      phone,
      DOB,
      email,
      pwd,
      imageUrl

    } = req.body;

    let Std = await student.findOne({student_id})

    if (!Std) {
      throw new Error('There is no student account')
    }

    const studentUpdate = await student.findByIdAndUpdate(req.Std.id, 
      {
      name: name,
      nic: nic,
      faculty: faculty,
      student_id: student_id,
      batch: batch,
      specialization: specialization,
      phone: phone,
      DOB: DOB,
      email: email,
      pwd: pwd,
      imageUrl: imageUrl
      })

    res.status(200).send({status: 'Student Profile Updated', Std: studentUpdate})

  } catch (error) {
    res.status(500).send({error: error.message})
    console.log(error)
  }
});

  //logout

  router.post("/logout", auth, async (req, res) => {

    try {
      req.Std.tokens = req.Std.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.Std.save();
      res.status(200).send("Logout successfully");
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }
    
  });

  //group register

  router.post("/groupReg", async (req, res) => {
    try {
      const {
        
        group_name,

      } = req.body;

      group1 = {
    
          group_name: group_name,

      };

      let groupName = await group.findOne({ group_name });
      if (groupName) {
        throw new Error("Group name already taken");
      }
  
      const newgroup = new group(group1);
      await newgroup.save()
      res
        .status(201)
        .send({ status: "group Created", group: newgroup });
       // console.log(group1);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({error: error.message});
    }
  });



  //register members

  router.post("/groupReg/:id", async (req, res) => {
    const groupId = req.params.id
    try {
      const group1 = await group.findById(groupId)

      if (!group1) {
        throw new Error('There is no group..!!!')
      }

      const {

        member1_student_id,

      } = req.body;


    //check whether the registering student's student id is valid or not.
    let student1 = await student.findOne({ student_id: member1_student_id});
    if (!student1) {
      throw new Error("Invalid Student ID...!!!");
    }


    //check wether the student is regstered to a group or not.
    if (student1.status == "Registered") {
      throw new Error("Student already registered in a group...!!!");
    }
  


    ////check wether the student group is full or not.
      const arrLength = group1.groupMembers.length;

      if(arrLength >= 4){
        throw new Error('This group already have 4 members..!!!')
      }else{


    //update registering member status
        const grp_status = "Registered";
        const gID = groupId;
        
        student1.status = grp_status;
        student1.grp_id = gID;

        await student1.save()

        
    
      //add registering member details to student group db 
        const id1 = await student.find({ student_id: member1_student_id},{"_id":1});
        const mem1 = await student.findById(id1);

        let groupMember1 = {
          _id: mem1._id,
          student_id: mem1.student_id,
          name: mem1.name,
          email: mem1.email,
          phone: mem1.phone,
        };

          await group.findOneAndUpdate(
            { _id: groupId },
            { $push: { groupMembers: groupMember1}},
            { new: true, upsert: true }
          )
          res.status(200).send({ status: "Group Member Registered.."});

          }   

        } catch (error) {
          console.log(error.message);
          res.status(500).send({ error: error.message });
        }
      
  //   const id1 = await student.find({ student_id: member1_student_id});
  //   const mem1 = await student.findById(id1);

  //   let student_groupItem = {
  //     // student_id: student_id,
  //     member1_name: mem1.member1,
  //     member2_name: mem1.member2,
  //     member3_name: mem1.member3,
  //     member4_name: mem1.member4,
  //     member1_phone: mem1.phone1,
  //     member2_phone: mem1.phone2,
  //     member3_phone: mem1.phone3,
  //     member4_phone: mem1.phone4,
  //     member1_student_id: mem1.student_id1,
  //     member2_student_id: mem1.student_id2,
  //     member3_student_id: mem1.student_id3,
  //     member4_student_id: mem1.student_id4,
  //     member1_email: mem1.email1,
  //     member2_email: mem1.email2,
  //     member3_email: mem1.email3,
  //     member4_email: mem1.email4
  //   };

  //   await group.findOneAndUpdate(
  //       { _id: groupId },
  //       { $push: { groupMembers: student_groupItem}},
  //       { new: true, upsert: true }
  //     )
  //     res.status(200).send({ status: "Group Member Registered.."});

  //     } catch (error) {
  //     console.log(error.message);
  //     res.status(500).send({ error: error.message });
  //   }
  });





module.exports = router;
const mongoose = require("mongoose");
const Topic = require("../models/IS_models/stdgroups");
const topicData = { reserch_topic:"abcdef" , research_Field:"stryuw"  };


describe("Topic Model Test", () => {

  
    beforeAll(async () => {
    
        process.env.MONGODB_UR,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    
          },
    
          (err) => {
          if (err) {
          console.error(err);
          process.exit(1);
             }
           };
         });
    
    it("register to the system admin without required field", async () => {
    
        const RequiredField = new Topic({
            research_Field: "stryuw",
          });
    
        let err;
    
        try {
          const savedRequiredField =
          await RequiredField.save();
          error = savedRequiredField;
    
        } catch (error) {
          err = error;
    
        }
       expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
       expect(err.errors.reserch_topic).toBeDefined();
    
      });
    
    });





   
    
    
    
//     describe("Admin Model Test", () => {
// beforeAll(async () => {

//     process.env.MONGODB_UR,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,

//       },

//       (err) => {
//       if (err) {
//       console.error(err);
//       process.exit(1);
//          }
//        };
//      });

// it("register to the system admin without required field", async () => {

//     const RequiredField = new Admin({
//      email: "it200984850@gmail.com",
//       });

//     let err;

//     try {
//       const savedRequiredField =
//       await RequiredField.save();
//       error = savedRequiredField;

//     } catch (error) {
//       err = error;

//     }
//    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
//    expect(err.errors.reserch_topic).toBeDefined();

//   });

// });







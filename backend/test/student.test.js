const mongoose = require("mongoose");
const student = require("../models/AA_models/student");

describe("Student Model Test", () => {
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
  

//check student NIC 
  it("Register to the system Staff without NIC Number", async () => {
    const RequiredField = new student({
        nic :"667845126v",
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
expect(err.errors.name).toBeDefined();

});

//check student ID 
it("Register to the system Staff without ID Number", async () => {
    const RequiredField = new student({
        student_id :"it20130770",
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
expect(err.errors.nic).toBeDefined();

});

//check student Email 
it("Register to the system Staff without Email", async () => {
    const RequiredField = new student({
        email:"randima@gmail.com" ,
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
expect(err.errors.student_id).toBeDefined();

});

});
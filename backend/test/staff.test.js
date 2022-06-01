const mongoose = require("mongoose");
const staff = require("../models/SS_models/staff");

describe("Staff Model Test", () => {
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

//check staff id 
  it("Register to the system Staff without Staff ID", async () => {
    const RequiredField = new staff({
        staff_id: "ST001",
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
expect(err.errors.phone).toBeDefined();

});

//check email
  it("Register to the system Staff without Email", async () => {
      const RequiredField = new staff({
      email: "randima@gmail.com",
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
 expect(err.errors.staff_id).toBeDefined();

  });


  //check staff password
  it("Register to the system Staff without Staff Password", async () => {
    const RequiredField = new staff({
        password:"Abc@123",
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
expect(err.errors.email).toBeDefined();

});


});
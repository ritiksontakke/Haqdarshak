const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
   
    phn: {
        type: Number,
        required: true,
      }
  },
  { timestamps: true }
);

const userContact = mongoose.model("User Contact", UserSchema);
module.exports = userContact;

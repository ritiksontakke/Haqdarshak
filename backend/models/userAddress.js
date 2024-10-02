const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
   
    state: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      pinCode: {
        type: Number,
        required: true,
      }
  },
  { timestamps: true }
);

const userAddress = mongoose.model("User Address", UserSchema);
module.exports = userAddress;

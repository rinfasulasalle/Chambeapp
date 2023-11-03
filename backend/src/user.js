const mongoose = require("./db");

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  is_active: Boolean,
  is_admin: Boolean,
  created_at: Date,
  date_of_birth: Date,
  gender: String,
  country: String,
  profile_image: String,
  bio: String,
  address: String,
  phone: String,
  follows: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

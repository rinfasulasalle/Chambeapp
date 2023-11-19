const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name:{
      type: String,
      required: true
  },
  lastname:{
      type: String,
      require: true
  },
  username:{
      type: String,
      require:false
  },
  email:{
      type: String,
      require: true
  },
  password:{
    type: String,
    require: true
  },
  is_active:{
    type: Boolean,
    require: true
  },
  is_admin:{
    type: Boolean,
    require: true
  },
  created_at:{
    type: Date,
    require: true
  },
  date_of_birth:{
      type:Date,
      require: true
  },
  gender:{
    type: String,
    require: true
  },
  country:{
    type: String,
    require: true
  },
  profile_image:{
    type: String,
    require: false
  },
  bio:{
    type: String,
    require: false
  },
  address:{
    type: String,
    require: false
  },
  phone:{
    type: String,
    require: true
  },
  follows:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ]
});

module.exports = mongoose.model('users', userSchema);
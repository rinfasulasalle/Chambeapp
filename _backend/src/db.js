const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rinfas:hx3o4NjfaZ4ga0rj@cluster0.0vlghfl.mongodb.net/ChambeaBD?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose;

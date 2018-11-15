const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
   firstname: {
      type: String,
      require: true
   },
   lastname: {
      type: String,
      require: true
   }
})

module.exports = Profile = mongoose.model("profiles", PromileSchema);
const mongoose = require("mongoose")
mongoose.Promise = global.Promise
module.exports = mongoose.connect("mongodb://172.17.0.2:27017/todo")
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var schemaName = "User";

var schema = new Schema({
  name: { type: String, required: true },

});


module.exports = mongoose.model(schemaName, schema);

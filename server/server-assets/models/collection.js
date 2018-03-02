var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var schemaName = "Collection";

var schema = new Schema({
  trackId:{ type: String, required: true },
  trackName:{ type: String, required: true },
  artistName:{ type: String, required: true },
  artistId:{ type: String, required: true },
  collectionName:{ type: String, required: true },
  creatorId: { type: ObjectId, ref: "User" }
});

module.exports = mongoose.model(schemaName, schema);

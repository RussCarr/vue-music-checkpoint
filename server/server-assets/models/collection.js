var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var schemaName = "Collection";

var schema = new Schema({
  creatorId: { type: ObjectId, ref: "User" },
  artistId: { type: Number, required: true },
  artistName: { type: String, required: true },
  trackId: { type: Number, required: true },
  trackName: { type: String, required: true },
  collectionId: { type: Number, required: true },
  collectionName: { type: String, required: true },
  trackNumber: { type: Number, required: true },
  artworkUrl100: { type: String, required: true },
  previewUrl: { type: String, required: true },
  like: {type: Number, default: 0},
  dislike: {type: Number, default: 0}
  // songId: {type: Number, required: true}
});

module.exports = mongoose.model(schemaName, schema);

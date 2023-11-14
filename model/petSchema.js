// backend/model/petSchema.js

const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: { type: String},
    type: { type: String},
    breed: { type: String },
    color: { type: String },
    description: { type: String },
    status: { type: String, enum: ["lost", "found"], required: true },
}, {
    collection: "pets"
});

module.exports = mongoose.model("petSchema", petSchema);

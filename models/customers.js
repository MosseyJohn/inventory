const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const customersSchema = new Schema({
_id: { type: Schema.Types.ObjectId, required: true },
name: { type: String, required: true},
email: { type: String, required: false},
phone: { type: String, required: false},
year: { type: Array, required: false},
model: { type: String, required: true},
trim: { type: String, required: false},
min: { type: Number, required: false},
max: { type: Number, required: false},
int: { type: Array, required: false},
ext: { type: Array, required: false},
options: { type: Array, required: false},
notes: { type: String, required: false},
}, {_id: false });

const Customers = mongoose.model("Customers", customersSchema);

module.exports = Customers;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  deadline: { type: Date }, // New field for deadline
  status: { type: String, default: 'pending' } // New field for task status
});

module.exports = mongoose.model('Task', TaskSchema);


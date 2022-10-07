import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  content: String,
}, {
  timestamps: true
})

const runSchema = new mongoose.Schema({
  name: String,
  miles: Number,
  date: Date,
  route: String,
  complete: Boolean,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  comments: [commentSchema],

}, {
  timestamps: true
})

const Run = mongoose.model('Run', runSchema)

export {
  Run
}

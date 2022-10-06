import mongoose from 'mongoose'

const comSchema = new mongoose.Schema({
  content: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
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
  comments: [comSchema],

}, {
  timestamps: true
})

const Run = mongoose.model('Run', runSchema)

export {
  Run
}

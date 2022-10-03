import mongoose from 'mongoose'

const runSchema = new mongoose.Schema({
  name: String,
  miles: Number,
  date: Date,
  route: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}

}, {
  timestamps: true
})

const Run = mongoose.model('Run', runSchema)

export {
  Run
}

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  userName: String,
  position: String,
  experience: String,
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);

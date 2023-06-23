const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    role: {
      type: String,
      default: 'user', // auto apply on creation time
      enum: ['user', 'admin', 'super-admin'],
    },
    // forms will be added soon here
  },
  {
    timestamps: true,
  },
);

const User = model('User', userSchema);

export default User;

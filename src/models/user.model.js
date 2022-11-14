import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required:true

    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required:true
    },
    mobile:{
      type: String,
      required:true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);

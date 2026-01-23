import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  serviceName:{type:String,required:true},
  role:{type:String,default:'professional'},
  createdAt:{type:Date,default:Date.now},
});

const User = mongoose.models.User || mongoose.model('User',UserSchema);
export default User;

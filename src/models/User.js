// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema({
//   name:{type:String,required:true},
//   email:{type:String,required:true,unique:true},
//   password:{type:String,required:true},
//   serviceName:{type:String,required:true},
//   role:{type:String,default:'professional'},
//   createdAt:{type:Date,default:Date.now},
// });

// const User = mongoose.models.User || mongoose.model('User',UserSchema);
// export default User;


import mongoose from "mongoose";

const UserSchema =
  new mongoose.Schema({
    // ================= BASIC =================
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    // ================= SERVICES =================
    serviceName: {
      type: [String],
      default: [],
    },

    // ================= ROLE =================
    role: {
      type: String,
      default: "professional",
    },

    // ================= CONTACT =================
    phone: {
      type: String,
      default: "",
    },

    alternatePhone: {
      type: String,
      default: "",
    },

    // ================= COMPANY =================
    company: {
      type: String,
      default: "",
    },

    postcode: {
      type: String,
      default: "",
    },

    hasWebsite: {
      type: String,
      default: "",
    },

    companySize: {
      type: String,
      default: "",
    },

    // ================= WORK =================
    availability: {
      type: String,
      default: "",
    },

    timeSlots: {
      type: String,
      default: "",
    },

    workType: {
      type: String,
      default: "",
    },

    miles: {
      type: String,
      default: "",
    },

    // ================= CREDITS =================
    credits: {
      type: Number,
      default: 0,
    },

    // ================= SUBSCRIPTION =================
    subscription: {
      plan: {
        type: String,
        default: "Free",
      },

      expiresAt: {
        type: Date,
      },
    },

    // ================= DOCUMENTS =================
    documents: {
      type: Object,
      default: {},
    },

    // ================= SECURITY =================
    accountStatus: {
      type: String,
      default: "active",
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    lastLogin: {
      type: Date,
    },

    // ================= CREATED =================
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const User =
  mongoose.models.User ||
  mongoose.model(
    "User",
    UserSchema
  );

export default User;
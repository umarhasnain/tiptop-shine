// import mongoose from "mongoose";

// const QuoteRequestSchema = new mongoose.Schema({

//   serviceName: {
//     type: String,
//     required: true
//   },

//   answers: {
//     type: Object,
//     default: {}
//   },

//   name: {
//     type: String,
//     required: true
//   },

//   email: {
//     type: String,
//     required: true
//   },

//   phone: {
//     type: String,
//     required: true
//   },

//   postcode: {
//     type: String,
//     required: true
//   },

//   status: {
//     type: String,
//     default: "new"
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now
//   }

// });

// export default mongoose.models.QuoteRequest ||
// mongoose.model("QuoteRequest", QuoteRequestSchema);


import mongoose from "mongoose";

const QuoteRequestSchema = new mongoose.Schema({

  serviceName: {
    type: String,
    required: true
  },

  professionalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professional",
    default: null
  },

  professionalName: {
    type: String,
    default: null
  },

  answers: {
    type: Object,
    default: {}
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  postcode: {
    type: String,
    required: true
  },

  details: {
    type: String
  },

  status: {
    type: String,
    default: "new"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.models.QuoteRequest ||
mongoose.model("QuoteRequest", QuoteRequestSchema);
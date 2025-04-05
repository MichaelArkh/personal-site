import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    demo: {
      type: String,
      required: true,
    },
    info: {
      type: [String], // Array of strings
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export const Project = mongoose.model('Project', projectSchema);
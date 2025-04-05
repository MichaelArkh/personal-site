// src/models/Experience.ts
import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  location: {
    type: String,
  },
  dates: {
    type: String,
  },
  order: {
    type: Number,
    default: 0
  },
  info: {
    type: [String],
    default: []
  },
  image: {
    type: String,
  },
}, { timestamps: true });

export const Experience = mongoose.model('Experience', experienceSchema);
import mongoose from 'mongoose';

const publicationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    authors: {
      type: String, // Store authors as a single string
    },
    description: {
      type: String,
    },
    urls: {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export const Publication = mongoose.model('Publication', publicationSchema);
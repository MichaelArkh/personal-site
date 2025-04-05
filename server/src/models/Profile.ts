// src/models/Profile.ts
import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
    enum: ['GitHub', 'LinkedIn', 'Email']
  },
  url: {
    type: String
  }
});

const dataSchema = new mongoose.Schema({
    text: {
        type: String
    },
    link: {
        type: String
    }
});

const profileSchema = new mongoose.Schema({
  name: {
    type: String
  },
  title: {
    type: String
  },
  data: {
    type: [dataSchema],
    default: []
  },
  avatarUrl: {
    type: String,
    required: true
  },
  socialLinks: {
    type: [socialLinkSchema],
    default: []
  }
}, { timestamps: true });

export const Profile = mongoose.model('Profile', profileSchema);
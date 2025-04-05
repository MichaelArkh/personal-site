import { Experience } from '../models/Experience.js';

export const experienceResolvers = {
  Query: {
    experiences: async (orderBy) => {
      const sortField = orderBy || "order";
      return await Experience.find().sort({ [sortField]: 1 }); 
    },
    
    experience: async (_, { id }) => {
      return await Experience.findById(id);
    }
  },
  
  Mutation: {
    addExperience: async (_, args) => {
      const experience = new Experience(args);
      return await experience.save();
    },
    
    updateExperience: async (_, { id, ...updates }) => {
      return await Experience.findByIdAndUpdate(
        id, 
        updates, 
        { new: true, runValidators: true }
      );
    },
    
    deleteExperience: async (_, { id }) => {
      const result = await Experience.deleteOne({ _id: id });
      return result.deletedCount > 0;
    }
  }
};

import { Publication } from '../models/Publication.js';

export const publicationResolvers = {
  Query: {
    publications: async (orderBy) => {
        const sortField = orderBy || "order"; 
        return await Publication.find().sort({ [sortField]: 1 }); 
    },
    publication: async (_, { id }) => {
      return await Publication.findById(id);
    },
  },
  Mutation: {
    addPublication: async (_, args) => {
      const newPublication = new Publication(args);
      return await newPublication.save();
    },
    updatePublication: async (_, { id, ...updates }) => {
      return await Publication.findByIdAndUpdate(
        id,
        updates, 
        { new: true, runValidators: true }
      );
    },
    deletePublication: async (_, { id }) => {
      const result = await Publication.findByIdAndDelete(id);
      return result ? true : false;
    },
  },
};
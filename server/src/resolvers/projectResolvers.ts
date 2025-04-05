import { Project } from '../models/Project.js';

export const projectResolvers = {
  Query: {
    projects: async (_, { orderBy }) => {
        const sortField = orderBy || "order"; 
        return await Project.find().sort({ [sortField]: 1 }); 
    },
    project: async (_, { id }) => {
      return await Project.findById(id);
    },
  },
  Mutation: {
    addProject: async (_, args) => {
      const newProject = new Project(args);
      return await newProject.save();
    },
    updateProject: async (_, { id, ...updates }) => {
      return await Project.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );
    },
    deleteProject: async (_, { id }) => {
      const result = await Project.findByIdAndDelete(id);
      return result ? true : false;
    },
  },
};
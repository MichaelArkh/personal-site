import { experienceResolvers } from './experienceResolvers.js';
import { publicationResolvers } from './publicationResolvers.js';
import { profileResolvers } from './profileResolvers.js';
import { projectResolvers } from './projectResolvers.js';

export const resolvers = {
  Query: {
    ...experienceResolvers.Query,
    ...publicationResolvers.Query,
    ...profileResolvers.Query,
    ...projectResolvers.Query
  },
  Mutation: {
    ...experienceResolvers.Mutation,
    ...publicationResolvers.Mutation,
    ...profileResolvers.Mutation,
    ...projectResolvers.Mutation
  }
};
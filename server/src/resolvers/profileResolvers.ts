import { Profile } from '../models/Profile.js';

export const profileResolvers = {
    Query: {
        profile: async () => {
            return await Profile.findOne();
        }
    },

    Mutation: {
        updateProfile: async (_, { id, ...updates }) => {
            return await Profile.findByIdAndUpdate(
                id,
                updates,
                { new: true, runValidators: true }
            );
        },

        addProfile: async (_, args) => {
            //Create a new profile with the provided arguments
            const profile = new Profile(args);
            return await profile.save();
        },

        deleteProfile: async (_, { id }) => {
            const result = await Profile.deleteOne({ _id: id });
            return result.deletedCount > 0;
        }
    }
};
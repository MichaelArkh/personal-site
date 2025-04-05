import { Profile } from '../models/Profile.js';

export const profileResolvers = {
    Query: {
        profile: async () => {
            // Get the first profile or create a default one if none exists
            let profile = await Profile.findOne();

            return profile;
        }
    },

    Mutation: {
        updateProfile: async (_, { id, ...updates }) => {
            // Find the first profile or create a new one
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
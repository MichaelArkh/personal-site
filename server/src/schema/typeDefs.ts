export const typeDefs = `
  type Experience {
    id: ID!
    title: String
    subtitle: String
    location: String
    dates: String
    info: [String]
    order: Int
    image: String
    createdAt: String
    updatedAt: String
  }
  
  type Url {
    name: String
    url: String
    image: String
  }

  input UrlInput {
    name: String
    url: String
    image: String
  }

  type Publication {
    id: ID!
    title: String
    authors: String
    description: String
    urls: Url!
    order: Int
    createdAt: String
    updatedAt: String
  }
  
  type SocialLink {
    id: ID!
    platform: String
    url: String
  }
    
  input SocialLinkInput {
    platform: String
    url: String
  }
  
  type DataItem {
    id: ID!
    text: String
    link: String
  }

  input DataItemInput {
    text: String
    link: String
  }
  
  type Profile {
    id: ID!
    name: String!
    title: String!
    data: [DataItem]
    avatarUrl: String!
    socialLinks: [SocialLink]
    createdAt: String
    updatedAt: String
  }
  
  type Project {
    id: ID!
    name: String!
    date: String!
    type: String!
    url: String!
    demo: String!
    info: [String]!
    order: Int!
    createdAt: String
    updatedAt: String
  }

  type Query {
    experiences: [Experience]
    experience(id: ID!): Experience
    publications: [Publication]
    publication(id: ID!): Publication
    projects: [Project]
    project(id: ID!): Project
    profile: Profile
  }
  
  type Mutation {
    addProject(
      name: String!
      date: String!
      type: String!
      url: String!
      demo: String!
      info: [String]!
      order: Int!
    ): Project

    updateProject(
      id: ID!
      name: String
      date: String
      type: String
      url: String
      demo: String
      info: [String]
      order: Int
    ): Project

    deleteProject(id: ID!): Boolean

    addExperience(
      title: String
      subtitle: String
      location: String
      dates: String
      info: [String]
      order: Int
      image: String
    ): Experience
    
    updateExperience(
        id: ID!
        title: String
        subtitle: String
        location: String
        dates: String
        info: [String]
        order: Int
        image: String
        ): Experience
    
    deleteExperience(id: ID!): Boolean
    
    addPublication(
      title: String
      authors: String
      description: String
      order: Int
      urls: UrlInput!
    ): Publication
    
    updatePublication(
      id: ID!
      title: String
      authors: String
      description: String
      order: Int
      urls: UrlInput
    ): Publication
    
    deletePublication(id: ID!): Boolean

    updateProfile(
        id: ID!
        name: String
        title: String
        data: [DataItemInput]
        avatarUrl: String
        socialLinks: [SocialLinkInput]
    ): Profile
    
    addProfile(
        name: String!
        title: String!
        data: [DataItemInput]
        avatarUrl: String!
        socialLinks: [SocialLinkInput]
    ): Profile
    
    deleteProfile(id: ID!): Boolean
  }
`;
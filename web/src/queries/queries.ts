import { gql } from '@apollo/client';

export const GET_NAME = gql`
  query Profile {
    profile {
      name
    }
  }
`;

// Query to fetch profile data
export const GET_PROFILE = gql`
  query Profile {
    profile {
      id
      name
      title
      data {
        text
        link
      }
      avatarUrl
      socialLinks {
        platform
        url
      }
    }
  }
`;

// Query to fetch experiences
export const GET_EXPERIENCES = gql`
  query experiences {
    experiences {
      id
      title
      subtitle
      location
      dates
      info
      order
      image
    }
  }
`;

// Query to fetch publications
export const GET_PUBLICATIONS = gql`
  query publications {
    publications {
      id
      title
      authors
      description
      urls {
        name
        url
        image
      }
      order
      createdAt
      updatedAt
    }
  }
`;

export const GET_PROJECTS = gql`
  query projects {
    projects {
      id
      name
      date
      type
      url
      demo
      info
      order
      createdAt
      updatedAt
    }
  }
`;
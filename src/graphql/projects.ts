import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      _id
      name
      description
    }
  }
`;

export const CREATE_PROJECT = gql`
    mutation($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
        _id
        createdAt
        name
        description
    }
    }
`;
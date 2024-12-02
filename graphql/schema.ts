import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Link {
    id: String
    title: String
    url: String
    imageUrl: String
    description: String
    category: String
    users: [String]
  }

  type Query {
    links: [Link!]!
  }
`;

export default typeDefs;

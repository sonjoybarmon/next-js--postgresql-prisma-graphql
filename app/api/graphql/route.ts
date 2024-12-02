import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "../../../graphql/schema";
import resolvers from "../../../graphql/resolvers";
import { createContext } from "../../../graphql/context";
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: createContext,
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

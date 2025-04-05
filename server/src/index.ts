// src/index.ts
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectToDatabase } from './db/connection.js';
import { typeDefs } from './schema/typeDefs.js';
import { resolvers } from './resolvers/index.js';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  // Connect to MongoDB
  await connectToDatabase();
  
  // Create Apollo server add plugins if production
  var server = new ApolloServer({
      typeDefs,
      resolvers
    });
  
  const port = process.env.SERVER_PORT || 4000; // Default to 4000 if PORT is not defined
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(port) }
  });
  
  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
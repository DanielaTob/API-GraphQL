import { createServer } from '@graphql-yoga/node'

const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        serverStatus: String
      }
    `,
    resolvers: {
      Query: {
        serverStatus: () => 'Working ok',
      },
    },
  },
})

server.start()
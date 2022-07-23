import { createServer } from '@graphql-yoga/node'

let clients = [
  {
    'name': 'Peter',
    'lastName': 'Parker',
  },
  {
    'name': 'Paul',
    'lastName': 'Perez',
  },
  {
    'name': 'Mary',
    'lastName': 'kay',
  },
  {
    'name': 'John',
    'lastName': 'puerto',
  }
];

const typeDefinitions = ` 
    type Query {
      clients: [Client]
    },
    type Client {
      name: String,
      lastName: String
    }
`;

const resolvers = {
  Query: {
    clients: () => {
      return clients;
    }
  }
}

const server = createServer({
  schema: {
    typeDefs: typeDefinitions,
    resolvers: resolvers,
  },
})


server.start()
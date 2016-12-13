const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const GraphQLSchema = graphql.GraphQLSchema;
// const GraphQLObjectType = graphql.GraphQLObjectType;
// const GraphQLString = graphql.GraphQLString;
// const GraphQLInt = graphql.GraphQLInt;


const goldbergQueries = require('./static/queries/goldbergs');
const queries = require('./static/queries')

// const { goldbergs } = require('goldbergs')

// const goldbergs = {
//  1: {
//    character: "Beverly Goldberg",
//    actor: "Wendi McLendon-Covey",
//    role: "matriarch",
//    traits: "embarrassing, overprotective",
//    id: 1
//  },
//  2: {
//    character: "Murray Goldberg",
//    actor: "Jeff Garlin",
//    role: "patriarch",
//    traits: "gruff, lazy",
//    id: 2
//  },
//  3: {
//    character: "Erica Goldberg",
//    actor: "Hayley Orrantia",
//    role: "oldest child",
//    traits: "rebellious, nonchalant",
//    id: 3
//  },
//  4: {
//    character: "Barry Goldberg",
//    actor: "Troy Gentile",
//    role: "middle child",
//    traits: "dim-witted, untalented",
//    id: 4
//  },
//  5: {
//    character: "Adam Goldberg",
//    actor: "Sean Giambrone",
//    role: "youngest child",
//    traits: "geeky, pop-culture obsessed",
//    id: 5
//  },
//  6: {
//    character: "Albert 'Pops' Solomon",
//    actor: "George Segal",
//    role: "grandfather",
//    traits: "goofy, laid back",
//    id: 6
//  }
// }


// const goldbergType = new GraphQLObjectType({
//   name: "Goldberg",
//   description: "Member of The Goldbergs",
//   fields: {
//    character: {
//      type: GraphQLString,
//      description: "Name of the character",
//    },
//    actor: {
//      type: GraphQLString,
//      description: "Actor playing the character",
//    },
//    role: {
//      type: GraphQLString,
//      description: "Family role"
//    },
//    traits: {
//      type: GraphQLString,
//      description: "Traits this Goldberg is known for"
//    },
//    id: {
//      type: GraphQLInt,
//      description: "ID of this Goldberg"
//    }
//  }
// });

// const queryType = new GraphQLObjectType({
//   name: "query",
//   description: "Goldberg query",
//   fields: {
//     goldberg: {
//       type: goldbergType,
//       args: {
//         id: {
//           type: GraphQLInt
//         }
//       },
//       resolve: function(_, args){
//         return getGoldberg(args.id)
//       }
//     }
//   }
// });

// function getGoldberg(id) {
//  return goldbergs[id]
// }

const schema = new GraphQLSchema({
 query: queries,
})

const graphQLServer = express();
graphQLServer.use('/', graphqlHTTP({ schema: schema, graphiql: true }));
graphQLServer.listen(8080);
console.log("The GraphQL Server is running.")
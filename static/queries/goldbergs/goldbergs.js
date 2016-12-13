// import getProjection from 'helpers/get-projection';
const {
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType,
} = require('graphql');

const goldbergType = require('../../types/goldbergType');
const getGoldberg = require('../../models/goldberg');

// export default {
//   type: new GraphQLList(colorType),
//   args: {},
//   resolve (root, params, options) {
//     const projection = getProjection(options.fieldASTs[0]);
//     return ColorModel.find().select(projection).exec();
//   }
// };



const goldbergQuery = new GraphQLObjectType({
  name: "query",
  description: "Goldberg query",
  fields: {
    goldberg: {
      type: goldbergType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: function(_, args){
        // const goldbergItem = goldbergModel(getGoldberg[id]);
        return getGoldberg(args.id)
      }
    }
  }
});

module.exports = goldbergQuery
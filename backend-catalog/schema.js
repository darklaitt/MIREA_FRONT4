const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLInt } = require('graphql');

// Тип для товара
const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        description: { type: GraphQLString },
        category: { type: new GraphQLList(GraphQLString) }
    }
});

// Корневой запрос
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                // Возвращаем список товаров
                return require('../products.json');
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
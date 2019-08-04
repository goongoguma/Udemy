// schema file contains all of the knowledge required telling GraphQL exactly what your application data looks like
// most importantly what properties each object has and exactly how each object is related to each other 

const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    // GraphQLSchema takes in RootQuery and returns GraphQL schema instance
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// QUERY

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    // UserType이 선언되기도 전에 쓰였으므로 에러를 내지만 fields를 화살표 함수로 만들어줌으로써 문제 해결이 가능
    // 자바스크립트 클로저로 인해 함수로 감싸여진 fields의 객체는 먼저 정의되나 파일이 전체적으로 실행되기 전 까지는 실행되지 않는다
    fields: () => ({
        id: { type: GraphQLString }, 
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
            // multiple user associated with company
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
                    .then(res => res.data);
            }
        }
    })
})

const UserType = new GraphQLObjectType({
    // name property describes the type we are defining
    name: 'User',
    // fields tells all different property User has
    fields: () => ({
        id: { type: GraphQLString }, 
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: { 
            type: CompanyType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
                    .then(res => res.data);
            }
        }
    })
});

// RootQuery is something that allows us to jump in a graph of data
// Think it as an entry point of a data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }},
            // resolve function actually go into a data base and find actual data we are looking for
            // resolve function returns a reference of another data
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(res => res.data);
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                    .then(res => res.data);
            }
        }
    }
});

// MUTATION

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // fiedls property describes the operation that this mutation undertake
        addUser: {
            type: UserType,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                companyId: { type: GraphQLString }
            },
            resolve(parentValue, { firstName, age}) {
                return axios.post(`http://localhost:3000/users`, { firstName, age })
                    .then(res => res.data);
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLString) }
            }, 
            resolve(parentValue, args) {
                return axios.delete(`http://localhost:3000/users/${args.id}`)
                    .then(res => res.data);
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                firstName: { type: (GraphQLString) },
                age: { type: (GraphQLInt) },
                companyId: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return axios.patch(`http://localhost:3000/users/${args.id}`, args)
                    .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});




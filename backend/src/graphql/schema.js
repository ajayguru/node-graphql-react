const { buildSchema } = require('graphql');

const userSchema =  buildSchema(`
type User {
    id: ID!
    name: String!
    email: String!
    password: String
    status: String!
}

type UserAuthData {
    bearer: String!
    userId: String!
}

input UserInputSaveData {
    email: String!
    name: String!
    password: String!
}

type Query {
    signIn(email: String!, password: String!): UserAuthData!
}

type Mutation {
    userRegister(userInput: UserInputSaveData): User!
}
`);

module.exports = userSchema;

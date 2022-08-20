import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    Registers: [RegisterScoreType!]
  }

  type RegisterScoreType {
    name: String,
    age: Float
  }

  input RegisterScoreInput {
    name: String,
    birth: String
  }

  type Mutation {
    Registers(data: RegisterScoreInput): RegisterScoreType
  }
`

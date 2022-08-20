import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    FilmsAll(page: Int!): GetFilmsContScore
    FilmsOne(id: String!): GetFilmsScore,
    FilmsCreate: Create
  }

  type Create {
    message: String
  }
  type GetFilmsScore {
    _id: String
    title: String
    image: String
    description: String
    director: String
    producer: String
    createdAt: String
    updatedAt: String
  }

  type GetFilmsContScore {
    cont: Int
    page: Int
    data: [GetFilmsScore]
  }
`

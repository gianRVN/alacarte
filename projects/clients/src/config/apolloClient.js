import { ApolloClient, InMemoryCache } from '@apollo/client'
import { favoriteMovieVar } from "./cache"

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          favoriteMovie: {
            read() {
              return favoriteMovieVar()
            }
          }
        }
      }
    }
  }),
})

export default client
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import movieReducer from './reducers/movieReducer'

const store = createStore((combineReducers({
  movie: movieReducer
})), applyMiddleware(thunk))

export default store
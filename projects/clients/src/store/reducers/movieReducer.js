const initialState = {
  loading: true,
  error: false,
  movies: [],
  slider: [],
  genre: []
}

const movieReducer = (state=initialState, action) => {
  switch(action.type) {
    case("FETCH_MOVIES"):
      return {...state, movies: state.movies.concat(action.payload), genre: action.genre, loading: false}
    case("SLIDER_MOVIES"):
      return {...state, slider: action.payload, loading: false}
    case("SELECT_CATEGORIES"):
      return {...state, movies: action.payload, loading: false}
    default: 
      return state
  }
}

export default movieReducer
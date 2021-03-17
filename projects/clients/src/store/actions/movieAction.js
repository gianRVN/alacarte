export const fetchMovies = (num, popularity) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US&sort_by=popularity.desc&page=${num}`)
      const data = await response.json()
      const genreList = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US`)
      const genre = await genreList.json()
      dispatch({
        type: "FETCH_MOVIES",
        payload: data.results,
        genre: genre
      })
    } catch (err) {
      dispatch({
        type: "ERROR_MOVIES",
        payload: 'error'
      })
    }
  }
}

export const sliderMovies = (num, popularity) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US&sort_by=popularity.desc&page=${num}`)
      const data = await response.json()
      dispatch({
        type: "SLIDER_MOVIES",
        payload: data.results.slice(0, 4)
      })
    } catch (err) {
      dispatch({
        type: "ERROR_MOVIES",
        payload: 'error'
      })
    }
  }
}

export const selectCategories = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${value}&page=1`)
      const data = await response.json()
      dispatch({
        type: "SELECT_CATEGORIES",
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: "ERROR_MOVIES",
        payload: 'error'
      })
    }
  }
}
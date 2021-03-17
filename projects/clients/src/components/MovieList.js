import '../assets/styles/movieList.css'
import MovieCard from './MovieCard'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, selectCategories } from '../store/actions/movieAction'
import moment from "moment"

function MovieList() {
  const dispatch = useDispatch();
  const { movies, genre, loading, error } = useSelector(state => state.movie) 
  const [movieData, setMovieData] = useState(1)
  const [value, setValue] = useState("")
  const [genreType, setGenreType] = useState([])
  useEffect(() => {
    dispatch(fetchMovies(movieData));
    // eslint-disable-next-line
  }, []);

  const loadMore = (e) => {
    e.preventDefault()
    dispatch(fetchMovies(+movieData + 1))
    setMovieData(+movieData + 1)
  }

  const handleChange = async (e) => {
    try {
      setValue(e.target.value)
      switch(e.target.value) {
        case("rating-ascending"):
          movies.sort((a, b) => {
            return a.vote_average - b.vote_average
          })
          break;
        case("rating-descending"):
          movies.sort((a, b) => {
            return b.vote_average - a.vote_average
          })
          break;
        case("popularity-ascending"):
          movies.sort((a, b) => {
            return a.popularity - b.popularity
          })
          break;
        case("popularity-descending"):
          movies.sort((a, b) => {
            return b.popularity - a.popularity
          })
          break;
        case("release-date-ascending"):
          movies.sort((a, b) => {
            return moment(a.release_date).format('yyyy') - moment(b.release_date).format('yyyy')
          })
          break;
        case("release-date-descending"):
          movies.sort((a, b) => {
            return moment(b.release_date).format('yyyy') - moment(a.release_date).format('yyyy')
          })
          break;
        default:
          return movies
      }
    } catch (err){
      console.log(err)
    }
  }

  const genreCheck = async (e) => {
    try {
      if(e.target.checked) {
        genre.genres.forEach(el => {
          if(el.name.toLowerCase() === e.target.value) {
            dispatch(selectCategories([...genreType, el.id].join()))
            setGenreType([...genreType, el.id])
          }
        })
      } else {
        genre.genres.forEach(el => {
          if(el.name.toLowerCase() === e.target.value) {
            dispatch(selectCategories(genreType.filter(element => +element !== +el.id).join()))
            setGenreType(genreType.filter(element => +element !== +el.id))
          }
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  movies.forEach((el, index) => {
    el.genreList = []
    el.genreListId = []
    el.genre_ids.forEach(genre_id => {
      genre.genres.forEach(genreName => {
        if(genre_id === genreName.id) {
          el.genreList.push(genreName.name)
          el.genreListId.push(genreName.id)
        }
      })
    }) 
  })

  if(loading) {
    return (
      <h1>LOADING.....</h1>
    )
  }

  if(error) {
    return (
      <h1>LOADING.....</h1>
    )
  }

  return (
    <>
    <div className="movie-list">
      <div className='movie-box-1'>
      </div>
      <div className="container-movie-list">
        <div className="discover-section">
          <span className="discover-movies"><span className="discover">Discover </span>Movies</span><br></br>
        </div>
        <div className="card-movie-category">
          <div className="card-category">
            <p className="result-movies" htmlFor="result">Sort Result By</p>
            <hr></hr>
            <div className="select-feature">
              <select id="categories" name="categories" value={value} onChange={handleChange} >
                <option value="popularity-ascending" >Popularity Ascending</option>
                <option value="popularity-descending" >Popularity Descending</option>
                <option value="release-date-ascending" >Release Date Ascending</option>
                <option value="release-date-descending" >Release Date Descending</option>
                <option value="rating-ascending" >Rating Ascending</option>
                <option value="rating-descending" >Rating Descending</option>
              </select><br></br>
            </div>
            <hr></hr>
            <p className="result-movies" htmlFor="result">Genres</p>
            <hr></hr>
            <div className="form-checkbox">
              <label htmlFor="action"> Action</label>
              <input type="checkbox" id="action" name="action" value="action" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="adventure"> Adventure</label>
              <input type="checkbox" id="adventure" name="adventure" value="adventure" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="animation"> Animation</label>
              <input type="checkbox" id="animation" name="animation" value="animation" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="comedy"> Comedy</label>
              <input type="checkbox" id="comedy" name="comedy" value="comedy" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="crime"> Crime</label>
              <input type="checkbox" id="crime" name="crime" value="crime" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="documentary"> Documentary</label>
              <input type="checkbox" id="documentary" name="documentary" value="documentary" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="drama"> Drama</label>
              <input type="checkbox" id="drama" name="drama" value="drama" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="family"> Family</label>
              <input type="checkbox" id="family" name="family" value="family" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="fantasy"> Fantasy</label>
              <input type="checkbox" id="fantasy" name="fantasy" value="fantasy" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="history"> History</label>
              <input type="checkbox" id="history" name="history" value="history" onChange={genreCheck}></input>
            </div>
            <div className="form-checkbox">
              <label htmlFor="horror"> Horror</label>
              <input type="checkbox" id="horror" name="horror" value="horror" onChange={genreCheck}></input>
            </div>
          </div>
          <div className="card-position">
            {
              movies.map((el, index) => {
                return (
                  <MovieCard key={index} movie={el}/>      
                )            
              })
            }  
              <div className="button-section">
                <button className="load-more" onClick={loadMore}>Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieList
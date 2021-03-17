import React from 'react'
import moment from 'moment'
import '../assets/styles/movieCard.css'

function MovieCard(props) {
  return (
    <>
    <div className="movie-card-template">
      <div className="movie-card">
        <div className="card-image">
          <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`} alt=""></img>
          <span className="movie-card-vote">{props.movie.vote_average}</span>
        </div>
        <div>
          <p className="movie-card-title">{props.movie.original_title}</p>
          <p className="movie-card-year">{moment(props.movie.release_date).format('yyyy')}</p>
        </div>
      </div>
      <div className="movie-card-hover">
          <p className="movie-card-title-hover">{props.movie.vote_average}</p>
          <p className="movie-card-genre-hover">{props.movie.genreList.join(', ')}</p>
        <div className="item-card-hover">
          <button className="view-button">VIEW</button>
          <button>ADD</button>
        </div>
      </div>
    </div>
    </>
    )
}

export default MovieCard;

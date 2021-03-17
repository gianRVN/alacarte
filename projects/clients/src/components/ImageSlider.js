import React from 'react'
import moment from 'moment'
import '../assets/styles/imageSlider.css'

function ImageSlider(props) {
  return (
    <>
    <div className="slider-container">
      <img className="image-slider" src={`https://image.tmdb.org/t/p/w500/${props.slider.backdrop_path}`} alt="moovie time"></img>
      <div className="box-slider">
        <p className="slider-rating">{props.slider.vote_average}</p>
        <p className="slider-title">{props.slider.original_title}</p>
        <p className="slider-date">{moment(props.slider.release_date).format('yyyy')}</p>
        <p className="slider-overview">{props.slider.overview}</p>
      </div>
    </div>
    </>
    )
}

export default ImageSlider;

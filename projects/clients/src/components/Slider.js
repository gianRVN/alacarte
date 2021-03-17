import '../assets/styles/slider.css'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sliderMovies } from '../store/actions/movieAction'
import ImageSlider from './ImageSlider'

function Slider() {
  const dispatch = useDispatch();
  const { slider, loading, error } = useSelector(state => state.movie) 
  const [current, setCurrent] = useState(0)
  const changeSlide = (num) => {
    setCurrent(num)
  }

  useEffect(() => {
    dispatch(sliderMovies(1));
    // eslint-disable-next-line
  }, []);

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
      <div className='slider'>
        {current === 0 ? <ImageSlider key={3} slider={slider[3]}/> : <ImageSlider key={+current-1} slider={slider[+current-1]}/>}
        <ImageSlider slider={slider[+current]}/> 
        {current === 3 ? <ImageSlider key={0} slider={slider[0]}/> : <ImageSlider key={+current+1} slider={slider[+current+1]}/>} 
      </div>
      <div className="slider-button">
        <div className={+current === 0 ? "slider-bullet-active" : "slider-bullet"} onClick={() => changeSlide(0)}></div>
        <div className={+current === 1 ? "slider-bullet-active" : "slider-bullet"} onClick={() => changeSlide(1)}></div>
        <div className={+current === 2 ? "slider-bullet-active" : "slider-bullet"} onClick={() => changeSlide(2)}></div>
        <div className={+current === 3 ? "slider-bullet-active" : "slider-bullet"} onClick={() => changeSlide(3)}></div>
      </div>
    </>
  )
}

export default Slider
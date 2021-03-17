import '../assets/styles/navbar.css'
import moovieTime from '../assets/img/moovietime-logo.svg'
import gridIcon from '../assets/img/grid-icon.svg'
import moovieIcon from '../assets/img/movie-icon.svg'
import searchIcon from '../assets/img/search-icon.svg'

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={moovieTime} alt ='moovieTime'/>
          </li>
          <li className="search-bar">
            <img src={moovieIcon} alt ='moovieIcon'/>
            <input placeholder="Find Movie" />
            <img src={searchIcon} alt ='searchIcon'/>
          </li>
          <li style={{display: 'flex'}}>
            <img src={gridIcon} alt ='moovieTime'/>
            CATEGORIES
          </li>
          <li>
            MOVIES
          </li>
          <li>
            TV SHOWS
          </li>
          <li>
            LOGIN
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
import "../assets/styles/footer.css"
import moovieTime from "../assets/img/movietime.png"

function Footer() {
  return (
    <div className="footer">
      <span className="footer-text"><span>&#169;</span> 2021 MoovieTime. All rights reserved</span>
      <img src={moovieTime} alt ='moovieTime'/>
      <span className="footer-text">Made with React.js</span>
    </div>
  )
}

export default Footer
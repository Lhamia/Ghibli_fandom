import { Link } from "react-router-dom"
import "./Navigator.css"

export default function Navigator(){
    return(<div>
        <header>
          
        <Link to="/">Home</Link>
        <Link to="/films">Films</Link>
        <Link to="/About">About</Link>
       
        
      </header>
      <div>
      <hr></hr>
      </div></div>
    )

}
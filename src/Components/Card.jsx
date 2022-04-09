
import {Link, generatePath} from "react-router-dom";


export default function Card({film}){
    return(
        <Link to={generatePath("/films/:id", { id: film.id})}>
            <div className="Galeria">
        <figure key={JSON.stringify}>
           <h3>{film.title}</h3>
            <img src={film.image} alt={film.image}/>

        </figure></div></Link>
    )
}
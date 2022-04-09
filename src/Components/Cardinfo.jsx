import"./Cardinfo.css"


export default function Cardinfo({film}){
    return(
        <div className="contenedorinfo">
    <figure key={JSON.stringify}>
        <h1 className="japo">{film.original_title}</h1>
        <img className="baner" src={film.movie_banner} alt={film.movie_banner}/>
        
        <h2 className="titulo">{film.title}</h2>
       
        <p className="pinfo">{film.description}</p>
        
        
       

    </figure></div>

    )}
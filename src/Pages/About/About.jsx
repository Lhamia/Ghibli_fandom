import axios from "axios";
import { useEffect, useState } from "react"
import "./About.css"

export default function About(){
   return(
       <div className="Gabaut">
           <img className="fanArt"src="https://www.akiracomics.com/imagenes/poridentidad?identidad=ae8c6ccd-472f-43d1-97cf-3f52994f1a71&ancho=850&alto="/>
       
    <article className="biografia">
        <h1>スタジオジブリ</h1>
        <h3>
        Studio Ghibli, acclaimed Japanese animation film studio that was founded in 1985 by animators and directors Miyazaki Hayao and Takahata Isao and producer Suzuki Toshio. Studio Ghibli is known for the high quality of its filmmaking and its artistry. Its feature films won both critical and popular praise and influenced other animation studios. The headquarters are in Tokyo.

In 1984 Miyazaki made his second feature film, Kaze no tani no Naushika (Nausicaä of the Valley of the Wind), which was based on his own popular manga strip, and the following year Miyazaki, Takahata, and Suzuki established Studio Ghibli. The first official Studio Ghibli release was Tenkū no shiro Rapyuta (1986; Castle in the Sky). Most of the films produced by Studio Ghibli were written and directed by Miyazaki and include, in addition to the aforementioned, Tonari no Totoro (1988; My Neighbor Totoro), Majo no takkyūbin (1989; Kiki’s Delivery Service), and Kurenai no buta (1992; Porco Rosso).
        </h3>

    </article>



       </div>

       

   )
   
   
   
   
   
   
   
   
   
   }
     /*
   const [films, setFilms]= useState([])

   useEffect(()=>{
       const getFilms = async ()=>{
           const res = await axios.get("https://ghibliapi.herokuapp.com/films")
           console.log(res.data)
           setFilms(res.data)
       }
       getFilms();
   }, []);
   
   
       return (
           <div className="Gabaut">
               {films.map((film)=>(
                   <article key={JSON.stringify}>
                       <h1>{film.title}</h1>
                       <img src={film.movie_banner} alt={film.movie_banner}/>
                       <h2>{film.description}</h2>
                      
                   </article>
               ))}
           </div>
           
       )


               }*/
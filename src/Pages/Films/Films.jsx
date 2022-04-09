import axios from "axios"
import { useEffect, useState } from "react"
import "./Films.css"
import Card from "../../Components/Card"


export default function Films(){

const [films, setFilms]= useState([])
const [filtered, setFiltered]= useState([])
const [search, setSearch]= useState("")

const handleSearch = (ev)=>{
    setSearch (ev.target.value)
    console.log (ev.target.value)
}
  

  const filtrar = ()=>{
      if (search !=""){
      
          const filtrados = films.filter((data)=> data.title.toLowerCase().includes(search.toLowerCase()))
          setFiltered(filtrados);
      
  }
}
  const getFilms = async ()=>{
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/`)

    console.log(res.data)
    setFilms(res.data)
    setFiltered(res.data)
}

useEffect(()=>{
    
    getFilms();
}, [])


useEffect(()=>{ 
        
    filtrar() 
},[search]) 


    return (
        <section> 
        <div className= "Buscador"> 
        <input placeholder={"search.."}className="input" type="text" onChange={handleSearch}/>  

        </div>

        <div className= "Galeriapelis">
            {filtered.map((film)=>(
                
            <Card film={film}/>
                   
               
            ))}
        </div></section>
    )
}


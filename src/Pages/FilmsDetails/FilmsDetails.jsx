
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cardinfo from "../../Components/Cardinfo";

export default function FilsmDetails(){
const urlGhibli = "https://ghibliapi.herokuapp.com/films"
const [film, setFilm] = useState("");
let {id} = useParams("id");

 useEffect(()=>{
     const getFilm = async()=>{

const res = await axios.get(`${urlGhibli}/${id}`)
console.log(res.data);
setFilm(res.data);
     }
     getFilm()
     console.log(FilsmDetails)
 }, []);
   return(
   <Cardinfo film={film}/>)

}
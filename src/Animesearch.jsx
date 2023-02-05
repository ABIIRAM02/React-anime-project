import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Animedata from "./Animedata"

function Animesearch()
{

    let {input} = useParams()
    let [ anime , setanime ] = useState( null )

useEffect(()=>{

    setTimeout(()=>{
    fetch("https://api.jikan.moe/v4/anime")
    .then((res)=>{return(res.json())})
    .then((obj)=>{console.log(obj.data); setanime(obj.data);})
    } ,1000 )

} , [] )



return(
        <section>
            
            { anime && anime.filter((data)=>{ return(data.title.toUpperCase().includes(input.toUpperCase()))}) &&  <h2>{anime.title_english}</h2>  }
        </section>
    )
}

export default Animesearch
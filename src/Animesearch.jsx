import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Animedata from "./Animedata"

function Animesearch()
{

    let {input} = useParams()
    let [ anime , setanime ] = useState( null )
    console.log("input " + input.toUpperCase().split(" ").join("") );

useEffect(()=>{

    setTimeout(()=>{
    fetch("https://api.jikan.moe/v4/anime")
    .then((res)=>{return(res.json())})
    .then((obj)=>{ setanime(obj.data.find(x => x.title.toUpperCase().split(" ").join("") === input.toUpperCase().split(" ").join("")));})
    } ,1000 )


} , [] )



return(
        <section>
            
            {anime &&  <section className="cardsinfo" >
                       <div className="cardsinfo-left" >  <img src={anime.images.webp.large_image_url} alt='/' /></div>
                       <div className="cardsinfo-right">
                       <h2>{anime.title}</h2>
                        <h2>{anime.title_japanese}</h2>
                        <p>{anime.synopsis}</p>
                        <h2>RATING : {anime.score}</h2></div>
                    </section>}
        </section>
    )
}

export default Animesearch
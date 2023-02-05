import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Animeinfo()
{
    let {identifier} = useParams()
    let [anime , setAnime] = useState(null)

    useEffect(()=>{

        // setTimeout(()=>{
        fetch("https://api.jikan.moe/v4/anime/" + identifier)
        .then((res)=>{return(res.json())})
        .then((obj)=>{return(obj.data)})
        .then((data)=>{ console.log(data);;setAnime(data);console.log(data);})
        // } ,2000 )
    
    } , [identifier] )

    return(
        <>
        {anime &&  <section className="cardsinfo" >
                       <div className="cardsinfo-left" >  <img src={anime.images.webp.large_image_url} alt='/' /></div>
                       <div className="cardsinfo-right">
                       <h2>{anime.title_english}</h2>
                        <h2>{anime.title_japanese}</h2>
                        <p>{anime.synopsis}</p>
                        <h2>RATING : {anime.score}</h2></div>
                    </section>}
        </>
    )


}

export default Animeinfo
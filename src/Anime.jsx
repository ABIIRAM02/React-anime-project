import { useEffect, useState } from "react"
import Animedata from "./Animedata"

function Anime()
{

    let [ anime , setanime ] = useState( null )
    let [ error , setError ] = useState( null )
    let [ loading , setLoading ] = useState( true )

useEffect(()=>{

    // setTimeout(()=>{
    fetch("https://api.jikan.moe/v4/anime")
    .then((res)=>{
        if(res.ok === false)
        {
            throw Error("ENTER THE CORRECT API-ENDPATH")
        }
        return(res.json())})
    .then((obj)=>{console.log(obj);return(obj.data)})
    .then((data)=>{console.log(data); setanime(data);setLoading(false);setError(false) })
    .catch((err)=>{setError(err.message);setLoading(false)})
    // } ,1000 )

} , [] )

    return(
        <section>
            {loading && <h2 className="error">LOADING.!</h2>}
            {anime && <Animedata datapass={anime} />}
            {error && <h1 className="error"> {error} </h1>}
        </section>
    )
}

export default Anime
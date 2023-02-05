import './nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Nav()
{

  let [input , setInput] = useState( "" )

    return(
    <section className="container">
      <h2>ANIME</h2> 
      <div className="right">
        <Link to='/'><h2>HOME</h2></Link>

        <form ><input type="search" placeholder='Wanna Search!' value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <Link to={`/Animesearch${input}`}> <button className='input-btn'>search</button></Link></form>
     
      </div>
    </section>
    )
}

export default Nav

import './Home.css'
import img from './IMAGES/img4.jpg'

function Home()
{
    return(
        <section className="home">
           < img src={img} alt="" className='home-left'/>
           <h2>TAB OR SEARCH AN ANIME TO SEE MORE INFO...</h2>
        </section>
    )
}

export default Home
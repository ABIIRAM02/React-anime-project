import Anime from './Anime';
import './App.css';
import Nav from './Nav';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Animeinfo from './Animeinfo';
import Home from './Home';
import Animesearch from './Animesearch';

function App(){
  return(

    <BrowserRouter>
    <div>
    <Nav/>

    <Switch>

    <Route exact path='/'>
     <Home/>
    </Route>

    <Route path='/animeinfo:identifier'>
     <Animeinfo/>
    </Route> 
   <Route path='/Animesearch:input'>
     <Animesearch/>
    </Route>

    </Switch>

    <Anime/>
    </div>
   </BrowserRouter>)
}

export default App

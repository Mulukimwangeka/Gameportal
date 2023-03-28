import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Action from './Action/action';
import Adventure from './Adventure/adventure';
import Home from './Home/home';
import Main from './Main/main';
import mygames from './Mygames/mygames';
import popular from './Popular/popular';
import puzzle from './Puzzle/puzzle';
import Race from './Race/Race';
import Strategy from './Strategy/strategy'



function App() {
  return (
    <div className="App">
    <Navbar/>
      <Route path="/Action" exact={true} component={Action} />
      <Route path="/Adventures" exact={true} component={Adventure} />
      <Route path="/Home" exact={true} component={Home} />
      <Route path="/Main" exact={true} component={Main} />
      <Route path="/mygames" exact={true} component={mygames} />
      <Route path="/Popular" exact={true} component={popular} />
      <Route path="/puzzle" exact={true} component={puzzle} />
      <Route path="/Race" exact={true} component={Race} />
      <Route path="/Strategy" exact={true} component={Strategy} />



      
    </div>
 
  );
}

export default App;

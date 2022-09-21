import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandinPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import PokeCreate from './components/PokeCreate';
import PokeDetails from './components/PokeDetails';





function App() {
  return (
    <Router>
      <div className="App">
       <Switch>
        <Route exact path='/' component={LandinPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/PokeCreate' component={PokeCreate} />
        <Route path='/pokeDetails/:id' component={PokeDetails}/>
       </Switch>
      </div>
    </Router>
  );
}

export default App;

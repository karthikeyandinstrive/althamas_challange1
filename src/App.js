import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import First from "./Components/First";
import Secound from './Components/Secound';
import Third from './Components/Third';
import Header from './Components/Navebar/header';
import Home from "./Components/Home"


function App() {
  return (
    <div className="App">
 
 <Router>
  
        
  <Header/>
 
    <Switch>

      {/* <Route path="/login">
        <Login/>
      </Route> */}
      <Route path="/">
        <Home />
      </Route>
      <Route path="/first">
        <First />
      </Route>
      <Route path="/secound">
        <Secound/>
      </Route>
      <Route path="/third">
        <Third/>
        </Route>
 
    </Switch>

  {/* <Footer/> */}


</Router>
      
    </div>
  );
}

export default App;

import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Details from './pages/details/Details';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path='/'>
           <Home/>
        </Route>
      
        <Route path='/about'>
           <About/>
        </Route>

        <Route path='/details'>
           <Details/>
        </Route>
      
        <Route path='/login'>
           <Login/>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
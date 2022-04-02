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

        <Route path='/' element={<Home />}/> 
      
        <Route path='/about' element ={<About/>}/>
       
        <Route path='/details' element ={<Details/>}/>

        <Route path='/login'element ={<Login/>}/>
       

      </Routes>

    </div>
  );
}

export default App;
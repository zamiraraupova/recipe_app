import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Details from './pages/details/Details';
import Github from './pages/Github';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


function App() {
  const [details, setDetails]=useState('')
  
  const updateDetails=(e)=>{
    // console.log(e, '<<<<<<<<')
    setDetails(e)
  }
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home updateDetails={updateDetails}/>}/> 
      
        <Route path='/about' element ={<About/>}/>
       
        <Route path='/details' element ={<Details details={details}/>}/>
        <Route path='/github' element ={<Github/>}/>

        <Route path='/login'element ={<Login/>}/>
       

      </Routes>

    </div>
  );
}

export default App;
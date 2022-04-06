import './style.css'
import { Link } from "react-router-dom";
import plate from '../../assets/plate.png'
// import { useState, useEffect } from "react";

const Login=()=>{
    
    // const [image, setImage] = useState("")

    

    // useEffect(() => {
    //     const url = "https://picsum.photos/1600/900"
    //     fetch(url)
    //     // .then(res => res.json())
    //     .then(res =>{ 
    //         console.log(res)
    //         setImage(res.url)})
        
    // }, [])
    
    return(
        <div className="login">
            
                
            <form id="form" className="login-form">
                <img src={plate} alt={plate} style={{width: '60px'}}/>
                 <h2 style={{color:'white'}}>Recipe </h2>
  
                 <input type="text" placeholder="username"/>
                 <input type="password" placeholder="password" />
              
                 <Link to="/">
                 <button style={{textDecoration: 'none'}}>Login</button>
                 </Link>
             </form>
        </div>
    )
        
    
}

export default Login;




// import {useHistory} from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login=()=>{
    // const history = useHistory();
    const [image, setImage] = useState("")
    
    const submit=(e)=>{
        console.log('click')
        e.preventDefault();
        // history.push('./home')
    }  
    

    useEffect(() => {
        const url = "https://picsum.photos/1600/900"
        fetch(url)
        .then(res => res.json())
        .then(res => setImage(res))
        // console.log(res)
    }, [])
    
    
    return(
        <div>
            <img src={image} alt={image}/>
            <form id="form" onSubmit={submit}>
                 <label htmlFor="username">Username: </label>
                 
                 <input type="text" placeholder="enter username"/>
                 <br />
                 <label htmlFor="password">Password: </label>
                 
                 <input type="password" placeholder="enter password" />
                 <br />
                 {/* <button onClick={submit}> Login </button> */}
                 <button style={{textDecoration: 'none'}}><Link to="/">Login</Link></button>
             </form>
        </div>
    )
        
    
}

export default Login;




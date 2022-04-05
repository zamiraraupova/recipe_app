
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login=()=>{
    
    const [image, setImage] = useState("")

    

    useEffect(() => {
        const url = "https://picsum.photos/1600/900"
        fetch(url)
        // .then(res => res.json())
        .then(res =>{ 
            console.log(res)
            setImage(res.url)})
        
    }, [])
    

    console.log(image)
    return(
        <div>
            <img src={image} alt={image}/>

            <form id="form" >
                 
                 <label htmlFor="username">Username: </label>
                 
                 <input type="text" placeholder="enter username"/>
                 <br />
                 <label htmlFor="password">Password: </label>
                 
                 <input type="password" placeholder="enter password" />
                 <br />

                 <Link to="/">
                 <button style={{textDecoration: 'none'}}>Login</button>
                 </Link>
             </form>
        </div>
    )
        
    
}

export default Login;




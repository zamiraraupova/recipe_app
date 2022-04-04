import './style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Details from '../details/Details'

const RecipeCard =(props)=>{

    // const [details, setDetails] = useState([])
    const [show, setShow] = useState(false)
    
    const handleSubmit=()=>{
        console.log('click',props.item.recipe)
        // setDetails(props.item.recipe)
    }

    const handleShow=()=>{
        setShow(!show)
    }

// console.log(props.item.recipe)
    return(
        <div className="cards">
            <h3>
                {props.item.recipe.label}
            </h3>
            <img src={props.item.recipe.image}/>

            <button className='view-button' onClick={handleSubmit} onShow={handleShow}>View More</button>
            
            
            <div className='details-container'>
             
                {show && <Details details={props.item.recipe}/>}
             
            </div>
           
        </div>
    )
}

export default RecipeCard;
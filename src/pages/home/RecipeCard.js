import './style.css'
import { Link } from 'react-router-dom'

const RecipeCard =(props)=>{
    
    const handleSubmit=(e)=>{
        console.log('click',props.item.recipe)
        props.updateDetails(e)
    }

// console.log(props.item.recipe)
    return(
        <div className="cards">
            <h3>
                {props.item.recipe.label}
            </h3>
            <img className='img-card' src={props.item.recipe.image}/>
            
            <Link to='/details'>
             <button className='view-button' onClick={()=>handleSubmit(props.item.recipe)} >View More</button>
            </Link>
 
        </div>
    )
}

export default RecipeCard;
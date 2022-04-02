import './style.css'
const RecipeCard =(props)=>{

    return(
        <div className="cards">
            <h3>
                {props.item.recipe.label}
            </h3>
            <img src={props.item.recipe.image}/>

            <button className='view-button'>View More</button>

        </div>
    )
}

export default RecipeCard;
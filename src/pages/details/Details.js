import './style.css'
import ingred from '../../assets/ingred.png'
const Details=(props)=>{
        //console.log(props)
        
        return (
            <div className="detail">
                
                <div className='detail-header'>
                      <h1>{props.details.label}</h1>
                     <img className='ingr-img' src={ingred} alt={ingred} style={{width: '250px'}}/>
                </div>
              

              <div className='detail-container'> 
               <div className="detail-nutrients">
                   <p>Nutrients</p>
                    <p>Calories: {Math.round(props.details.calories)}</p>
                    <span>{props.details.totalNutrients.CHOCDF.label}</span>:
                    <span> {Math.round(props.details.totalNutrients.CHOCDF.quantity)}</span>
                    <br/>
                    <span>{props.details.totalNutrients.CHOLE.label}</span>:
                    <span> {Math.round(props.details.totalNutrients.CHOLE.quantity)}</span>
                    <br/>
                    <span>{props.details.totalNutrients.FAT.label}</span>:
                    <span> {Math.round(props.details.totalNutrients.FAT.quantity)}</span>
                    <br/>
                    <span>{props.details.totalNutrients.ENERC_KCAL.label}</span>:
                    <span> {Math.round(props.details.totalNutrients.ENERC_KCAL.quantity)}</span>
                    <br/>
                    <span>{props.details.totalNutrients.FIBTG.label}</span>:
                    <span> {Math.round(props.details.totalNutrients.FIBTG.quantity)}</span>
                    <br/>
                    <span>{props.details.totalNutrients.PROCNT.label}</span>:
                    <span> {Math.round(props.details.totalNutrients.PROCNT.quantity)}</span>

               </div>
               
               
                <div className="detail-img">
                    <img className='detail-image' src={props.details.image}/>
                </div>
                
                <div className="detail-ingred">
                     <p>{props.details.ingredientLines}</p>
                </div>
                
                </div> 
            </div>
        )
    }

        
   


export default Details;
import {useState, useEffect} from 'react'
import './style.css'
import axios from 'axios';
import RecipeCard from './RecipeCard';

const Home=({updateDetails})=>{

    const [searchText, setSearchText] = useState("")
    const [dropDown, setDropDown] = useState('breakfast')
    const [data, setData] = useState([]);

    const apiID = "901e6b6a";
    const apiKey = "0c490cc125cd01592c30205615da2c02"
    const url = `https://api.edamam.com/search?q=${searchText}&app_id=${apiID}&app_key=${apiKey}&mealType=${dropDown}`

    const handleChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleSubmit=()=>{
        if(searchText !== ''){
            axios.get(url)
            .then(response => {
            setData(response.data.hits);
        });
        } else{
            alert('Please fill the input')
        }
        
    }

    const handleDropDown = (event) => {
        setDropDown(event.target.value)
    }

//  console.log(data)

    return(
        <div className='home'>
            <h1>Food App</h1>

            <div className='input-btn-select'>
                <input value={searchText} id="search" type="text" onChange={handleChange} placeholder='Search'/>
            
                 <button onClick={handleSubmit}>Submit</button>  
                <select value={dropDown} name="" id="" onChange={handleDropDown}>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snack">Snack</option>
                            <option value="teatime">Tea-Time</option>
             </select> 
                
            </div>
          
                        
            <div className="cards-container">       
                {data !== [] && data.map((item, index)=><RecipeCard item={item} key={index} updateDetails={updateDetails}/>)}
            </div>
        
        </div>
    )
}

export default Home;
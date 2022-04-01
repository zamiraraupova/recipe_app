import {useState, useEffect} from 'react'
const Home=()=>{
    const [searchText, setSearchText] = useState("")
    const [dropDown, setDropDown] = useState('')
    
    const handleChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleSubmit=()=>{
        console.log('click')
    }

    const handleDropDown = (event) => {
        setDropDown(event.target.value)
    }
    return(
        <div>
            <h1>Food App</h1>

            <form>
            {/* <label htmlFor="search">Search</label> */}
            <input value={searchText} id="search" type="text" onChange={handleChange} placeholder='Search'/>
             <button onClick={handleSubmit}>Submit</button>  
             <select value={dropDown} name="" id="" onChange={handleDropDown}>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snack">Snack</option>
                            <option value="teatime">Tea-Time</option>
                        </select>         
            </form>

            <img src='' alt=''/>
        </div>
    )
}

export default Home;
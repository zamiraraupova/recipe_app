import './style.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
        
            <ul className='ul-left'>
                <li><Link to="/"> Recipe</Link></li>
            </ul>  
            <ul className='ul-right'>  
                <li><Link to="/about"> About</Link></li>
                <li><Link to="/details"> Github </Link> </li>
                <li><Link to="/login"> Login </Link> </li>
               
            </ul>
        
        </nav>
    )
}

export default Navbar
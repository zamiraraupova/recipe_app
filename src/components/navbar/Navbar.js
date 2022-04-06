import './style.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
        
            <ul className='ul-left' >
                <li ><Link to="/" style={{textDecoration: 'none', color: 'rgb(0,173,181)'}}> Recipe</Link></li>
            </ul>  
            <ul className='ul-right'>  
                <li><Link to="/about" style={{textDecoration: 'none', color: 'rgb(0,173,181)'}}> About</Link></li>
                <li><Link to="/github" style={{textDecoration: 'none', color: 'rgb(0,173,181)'}}> Github </Link> </li>        
                <li><Link to="/login" style={{textDecoration: 'none', color: 'rgb(0,173,181)'}}> Login </Link> </li>
               
            </ul>
        
        </nav>
    )
}

export default Navbar
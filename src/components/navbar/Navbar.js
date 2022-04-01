
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
        
            <ul>
                <li><Link to="/home"> Recipe</Link></li>
                <li><Link to="/about"> About</Link></li>
                <li><Link to="/login"> login </Link> </li>
                <li><Link to="/details"> Github </Link> </li>
            </ul>
        
        </nav>
    )
}

export default Navbar
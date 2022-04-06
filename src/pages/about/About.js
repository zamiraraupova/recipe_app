import './style.css'
import dev from '../../assets/dev.png'
const About=()=>{

    return(
        <div className='about'>
            <div className='about-image'>
                <img src={dev} alt={dev} style={{width: '350px'}}/>
            </div>
            
            <div className='about-header'>
                <h1>About Software Developer <span style={{color:'white'}}>Zamira</span></h1>
            </div>
           
           <div className='text'>
               <p style={{fontSize: "larger"}}>Hi, I am Zamira</p>
                <p>I am currently learning Front-End Development Languages.</p>
                <p>I know JS, ReactJS</p>
                <p style={{fontSize: "larger"}}> <span style={{color:'white'}}>Send email</span> : zamiraraupova13@gmail.com</p>
           </div>
            
        </div>
    )
}

export default About;
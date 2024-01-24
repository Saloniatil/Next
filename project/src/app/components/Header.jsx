import Image from 'next/image'
// import  img1 from '../images/image.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import img from '../../app/images/monday.png'
function Header() {
  return (
  <section>
    <div className="grid grid-cols-1 lg:grid-cols-12"> 
    <div className="col-span-7 place-self-center"> 
    <p className="text-[#ADB7BE] text-lg lg:text-xl">
    <div className=''></div>
 
     <div  style={{backgroundColor:"#08090C", paddingLeft:'1000px'}}> Home   Services   About us   Contact us</div>  
       
    </p>
    
    </div>
    <div className="col-span-5">
      <div className="rounded-full bg-[#181818] w-[ 250px] h-[250px] lg:w-[400] relative"> 
     
      </div>
    </div>
    </div> 
    </section>
  )
}

export default Header
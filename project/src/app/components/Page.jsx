// import React from 'react'
import './style.css'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { IoCall } from "react-icons/io5";
import Card from 'react-bootstrap/Card';
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form';


function Page() {
  return (
   
      
      <div style={{backgroundColor:'#08090C', height:"3000px",width:"100%",}}>
       
       <div style={{display:"flex"}}>
       
      <div className='containt2'>
      <h3 style={{fontSize:"40px", paddingLeft:"60px", color:"white"}}><b>We provide the best web Services</b></h3>
      <br></br>
      <p style={{paddingLeft:"60px", color:"white"}}>loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printet..</p>
      <ul style={{color:"white", textAlign:"left", listStyleType:"none", fontSize:"20px", paddingLeft:"60px"}}>
        <li><RiCheckboxCircleLine style={{color:"green", height:"25px",width:"25px"}}/>Most easy premium web design process
        </li><br/>
        <li><RiCheckboxCircleLine style={{color:"green", height:"25px",width:"25px"}}/>Research & development before starting</li><br/>
        <li><RiCheckboxCircleLine style={{color:"green", height:"25px",width:"25px"}}/>Making a quality design ideas</li><br/>
        <li><RiCheckboxCircleLine style={{color:"green", height:"25px",width:"25px"}}/>Making a quality design ideas</li><br/>
        <li><RiCheckboxCircleLine style={{color:"green", height:"25px",width:"25px"}}/>Making a quality design ideas</li>
      </ul>
      </div>
      <div style={{paddingLeft:"80px",paddingTop:"70px", marginTop:"30px"}}>
      <Image src='/imag2.png' alt='' width='500' height='500' />
      </div>
      </div>
      <div style={{marginTop:"10px"}}>
    <h1 style={{fontSize:"70px",color:"white"}}><b>Services We're Offering</b></h1>
    <div style={{display:"flex", color:"white"}}>
      <div className='cards'>
      < div>
        < div style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>Web Design</b></ div>
        
        < div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </ div>
      </ div>
      </ div>
      <div className='cards'>
      <div>
        <div style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}>Web/Mobile Application</div>
      
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </div>
      </ div>
      </ div>
    </div>
    <div style={{display:"flex"}}>
      <div className='cards' >
      <div>
         <div style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>SEO</b></div>
        
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </div>
      </div>
      </div>
      <div className='cards'>
      <div>
        <div style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>Digital Marketing</b></div>
      
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </ div>
      </div>
      </div>
      
    </div>
    <div style={{display:"flex"}}>
      <div className='cards' style={{backgroundColor:"transparent",color:"white"}}>
      < div>
        < div style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>DevOps</b></div>
        
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </div>
      </ div>
      </div>
      < div className='cards' style={{backgroundColor:"transparent",color:"white"}}>
      < div>
        <div style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>Data Science</b></ div>
      
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </ div>
      </div>
      </div>
      </div>
    </div> 
    <div style={{paddingTop:"10%", marginLeft:" 60px"}}>
      <h1 style={{fontSize:"70px",color:"white"}}><b>Contect Us</b></h1>
      <div style={{display:"flex"}}>
        <div>
        <Image src='/image3.png' alt='' width='200' height='200' />
        </div>
      
        <div style={{marginLeft:"30%", marginTop:"20px"}}>
        <div className='forms'>
        <div className="mb-3" controlId="formBasicEmail">
        <Image src='/imag.png' alt='' width='500' height='500' />
         
        <div type="text" placeholder="Enter you full name" style={{backgroundColor:"transparent",borderColor:"white"}} />
        </div>
      <div className="mb-3" controlId="formBasicEmail">
        
       </div> 

       
      <div className="mb-3" controlId="formBasicCheckbox">
        <div type="checkbox" label="Check me out" style={{backgroundColor:"transparent",borderColor:"white"}}/>
      </div>
       
    </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Page
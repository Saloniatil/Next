// import  img2 from '../images/image.png'
import "./style.css"
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import { IoCall } from "react-icons/io5";
import Card from 'react-bootstrap/Card';
import "./style.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import img from '../../app/images/monday.png'
// import Image from "next/image";
function Section() {
  return (
     <>
       <div className='home'>
      <div style={{display:"flex"}}>
        <div className='containt'>
          <h1 style={{color:"white",fontSize:"70px",paddingTop:"140px", textAlign:"left", paddingLeft:"80px"}}><b>Transforming Ideas Into <span style={{color:"#FD7204"}}>Powerfull Solution </span></b></h1>
          <p style={{color:'white', paddingLeft:"80px",textAlign:"left"}}>loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
          <ButtonGroup  style={{paddingRight:"435px"}}>
          <Button style={{height:"50px", width:"50px", borderColor:"white",backgroundColor:"#FD7204"}} ><IoCall /></Button>
          <Button style={{height:"50px", width:"250px",  borderColor:"white",backgroundColor:"transparent"}}  >Get Free Consultation</Button>
          </ButtonGroup>
        </div>
        <div style={{paddingTop:"80px",paddingRight:"20px"}}>
          <Row>
        <Col xs={6} md={4}>  
        {/* <img src='/image.png' alt="" style={{height:'50px', width:'85px'}}/> */}
        <Image src='/image.png' alt='' width='500' height='500' />
        </Col>
        </Row>
        </div>
      </div>
      <hr className='br'></hr>
      </div>
  
       
     </>
  )
}

export default Section
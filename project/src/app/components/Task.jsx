import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { IoCall } from "react-icons/io5";
import Card from 'react-bootstrap/Card';
import "./style.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form';

function  Task(){
    return(
        <>
        
     <div>
            <Navbar data-bs-theme="dark" style={{backgroundColor:"#08090C", padding:'0px'}}>
        
          <img src='task2.png'></img>
          <Container>
          <Nav className="md" style={{ paddingLeft:"70%", color:"white", fontSize:"15px"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contect Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </div>
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
          <Image src="task1.png" rounded />
        </Col>
        </Row>
        </div>
      </div>
      <hr className='br'></hr>
      </div>
    
      
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
        <img src='task3.png'></img>
      </div>
      </div>
  <div style={{marginTop:"10px"}}>
    <h1 style={{fontSize:"70px",color:"white"}}><b>Services We're Offering</b></h1>
    <div style={{display:"flex", color:"white"}}>
      <Card className='cards'>
      <Card.Body>
        <Card.Title style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>Web Design</b></Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className='cards'>
      <Card.Body>
        <Card.Title style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}>Web/Mobile Application</Card.Title>
      
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
    <div style={{display:"flex"}}>
      <Card className='cards' >
      <Card.Body>
        <Card.Title style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>SEO</b></Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className='cards'>
      <Card.Body>
        <Card.Title style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>Digital Marketing</b></Card.Title>
      
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </Card.Text>
      </Card.Body>
      </Card>
      
    </div>
    <div style={{display:"flex"}}>
      <Card className='cards' style={{backgroundColor:"transparent",color:"white"}}>
      <Card.Body>
        <Card.Title style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>DevOps</b></Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className='cards' style={{backgroundColor:"transparent",color:"white"}}>
      <Card.Body>
        <Card.Title style={{fontSize:"25px", paddingRight:"60%",paddingTop:"100px"}}><b>Data Science</b></Card.Title>
      
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        </Card.Text>
      </Card.Body>
      </Card>
      </div>
    </div> 
    <div style={{paddingTop:"10%", marginLeft:" 60px"}}>
      <h1 style={{fontSize:"70px",color:"white"}}><b>Contect Us</b></h1>
      <div style={{display:"flex"}}>
        <div>
          <img src='task4.png'></img>
        </div>
        <div style={{marginLeft:"30%", marginTop:"20px"}}>
        <Form className='forms'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter you full name" style={{backgroundColor:"transparent",borderColor:"white"}} />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" style={{backgroundColor:"transparent",borderColor:"white"}}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Number" style={{backgroundColor:"transparent",borderColor:"white"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" style={{backgroundColor:"transparent",borderColor:"white"}}/>
      </Form.Group>
      <Button type="submit" style={{backgroundColor:"pink",width:"300px"}}>
        Contect
      </Button>
    </Form>
        </div>

      </div>

    </div>
    </div>   
        
        </>
    )
}
export default Task;
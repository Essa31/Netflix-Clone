import React from "react";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import { useState } from "react";
import movieModal from "../ModalMovie/modalMovie";
export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [choosenCard,setChoosenCard] = useState();
    const handleShow = (trend) =>{
        setShow(true)
        setChoosenCard(trend)
    } 
    const handleClose = (trend) => {setShow(false)}
   return( <>
   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.trend.poster_path} />
  <Card.Body>
    <Card.Title>{props.trend.title}</Card.Title>
    <Card.Text>{props.trend.overview}</Card.Text>
    <Button variant="primary" onClick={()=>{handleShow(props.trend)}}>Show Details </Button>
  </Card.Body>
</Card>
{choosenCard &&
       
       <movieModal
         show={show}
         handleClose={handleClose}
       choosenCard={choosenCard}
       
       />
     }
     
   </>
 );
}

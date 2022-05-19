import React from "react";
import useRef  from "react";

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// { movies, show, handleClose,addToFavList }
function movieModal(props) {
  let commentRef = useRef
  function handleComment(e){
    e.preventDefault();
    let userComment = commentRef.current.value;
    console.log(userComment);
    // let newRecipe = { ...props.choosenCard, comment: userComment }
    let newTrend = { ...props.choosenCard, userComment };
    
   props.updateTrend(newTrend,newTrend.id)
  }

return(
  <>
 <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.choosenCard.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.choosenCard.poster_path} alt="trind"/>
          <br/>
          <p>
            {props.choosenCard.comment
              ? props.choosenCard.comment
              : "No comment added"}
          </p>
          <p>{props.choosenCard.overview}</p>
          <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Add Comment</Form.Label>
    <Form.Control  ref={commentRef} type="text" placeholder="Enter Comment" />
    <Form.Text className="text-muted">
    add your own comment
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="submit" on  onClick={(e) => handleComment(e)}>
    Submit comment
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    
  </>
)





}

 
export default movieModal;
// function handelFormSubmit(e){
//   e.preventDefault();
//   let comment = e.target.comment.value;
//   // To send a POST request to save the recipe in our database as favorite recipe
//   addToFavList(movies, comment);
// }

// async function addToFavList(movies, comment){
//   const url = `${process.env.REACT_APP_SERVER}/addmovie`
//   // This should match the required data in the server
//   const data = {
//     title : movies.title,
//     poster_path : movies.poster_path,
//     overview : movies.overview,          
//     comment : comment
//   }
//   // Use Fetch to send POST request
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json',
//       "Access-Control-Allow-Origin":"*"
//     },
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   swal("Favorite movies", "You added a new movies", "success");
//   handleClose();
// }

// return (
// <Modal show={show} onHide={handleClose}>
// <Modal.Header closeButton>
//   <Modal.Title> titlee </Modal.Title>
// </Modal.Header>
// <Form onSubmit={handelFormSubmit} style={{margin: "0 10px"}}> 
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Comment</Form.Label>
//       <Form.Control name="comment" type="text" placeholder="Enter Comment" />
//     </Form.Group>
//     <Button variant="primary" type="submit">
//       Submit
//     </Button>
//   </Form>
// <Modal.Footer>
//   <Button variant="secondary">Close</Button>
//   <Button variant="primary">Save changes</Button>
// </Modal.Footer>
// </Modal>
// );
// }

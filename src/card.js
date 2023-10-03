import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function CardComp (props) {
  const [show, setShow] = useState(false);

  const handleShow =  () => {
    setShow(!show)
};

function saveToLocalStorage(){
  if (localStorage.getItem("products")){
    console.log("if")
    let arr = JSON.parse(localStorage.getItem("products"));
    arr.push(props)
    localStorage.setItem("products",JSON.stringify(arr))
  }

  else{
    console.log("else")
    let arr = []
    arr.push(props)
    localStorage.setItem("products",JSON.stringify(arr))
  }
}
  
    return(
      <>
        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>Show Details</Button>
          {props.showButton?<Button variant="primary" onClick={saveToLocalStorage}>Add to Favorites</Button>:<Button variant="primary" onClick={saveToLocalStorage} style={{display:"none"}}>Add to Favorites</Button>}
          <Button onClick={props.handleDelete}>Delete</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><a href={'https://www2.hm.com' + props.link }>Page Link</a> <br/> <b>Price: {props.price}$</b> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default CardComp;
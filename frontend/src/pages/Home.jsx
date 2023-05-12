import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"; // to show modal
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Home() {

const sendData = () =>{
    try {
        axios.post('http://localhost:5000/api/user/nodes')
    } catch (error) {
        
    }
}


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container>
        <h1 className="text-center py-5 my-5">
          {" "}
          Notes{" "}
          <i className="bi bi-plus-circle anchor1" onClick={handleShow}></i>
        </h1>

        <div>
          <Card style={{ width: "18rem" }} className="card1">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Card.Link href="#">
                  <i class="bi bi-pen"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i class="bi bi-archive"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* //Modal  */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Insert</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Form  */}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter text" />
          
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="text" />
              </Form.Group>
        
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>


            {/* Form ends   */}
          </Modal.Body>
      
        </Modal>
      </Container>
    </div>
  );
}

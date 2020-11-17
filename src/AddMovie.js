import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal"
import StarRatingComponent from 'react-star-rating-component';
import Form from 'react-bootstrap/Form';

function AddMovie(props) {
    const [newMovie, setNewMovie] = useState({
        image: null,
        title: "",
        description: "",
        rate: 0,
    });
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setNewMovie({
            image: null,
            title: "",
            description: "",
            rate: 0,
        })
    }
    const handleShow = () => setShow(true);
function handleChange (e){
    setNewMovie({...newMovie,[e.target.name]:e.target.value})

}


    return (
        
       
        <div className='bbb'>
             <br/>
            <Button variant="primary" onClick={handleShow}>
                Add a movie
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title </Form.Label>
                            <Form.Control onChange ={handleChange} name = "title"type="text" placeholder="title movie" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange ={handleChange} name="description" type="text" placeholder="description" />
                        </Form.Group>
                        <StarRatingComponent name='star' onStarClick={(nextValue, prevValue, name)=>setNewMovie({...newMovie,rate:nextValue})}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={()=>props.addFilm([...props.films,newMovie])}>
                        Save 
            </Button>
                </Modal.Footer>
            </Modal>
            </div>
    );
}

export default AddMovie
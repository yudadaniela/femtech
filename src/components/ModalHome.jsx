import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import '../styles/modal.css'
import { Link } from 'react-router-dom';

function ModalHome() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
   
  return (
    <>
      <Modal show={show} >
        <Modal.Body>
          {" "}
          <Carousel id="carousel">
            <Carousel.Item className="paquete">
               
            <img
                className="d-block w-100"
                src="/src/assets/backgood_Modal.png"
                alt="Second slide"
              />
                <img
                className="d-block w-100"
                src="/src/assets/card1.png"
                alt="First slide"
              />
               
             
              <Carousel.Caption>
                <h3 id="title">Conecta con mujeres de diferentes talentos</h3>
                <Link to={'/login'}>
                <Button className="button_modal" variant="secondary" onClick={handleClose}>
            Conoce más
          </Button>
          </Link>
          <Button  className="button_modal_tr"  variant="primary" onClick={handleClose}>
            Revisaré más tarde
          </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
             
            <img
                className="d-block w-100"
                src="/src/assets/backgood_Modal.png"
                alt="Second slide"
              />
                <img
                className="d-block w-100"
                src="/src/assets/card2.png"
                alt="Second slide"
              />
             
              <Carousel.Caption>
                <h3 id="title">Asiste a eventos virtuales y charlas informativas</h3>
               
                <Button  className="button_modal" variant="secondary" onClick={handleClose}>
            Conoce más
          </Button>
          <Button  className="button_modal_tr"  variant="primary" onClick={handleClose}>
          Revisaré más tarde
          </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

            <img
                className="d-block w-100"
                src="/src/assets/backgood_Modal.png"
                alt="Second slide"
              />
                <img
                className="d-block w-100"
                src="/src/assets/card3.png"
                alt="Third slide"
              />
               
             
              <Carousel.Caption>
                <h3 id="title">Adopta una mujer! Ayudemonos entre nosotras</h3>
             
                <Button className="button_modal" variant="secondary" onClick={handleClose}>
            Conoce más
          </Button>
          <Button className="button_modal_tr" variant="primary" onClick={handleClose}>
          Revisaré más tarde
          </Button>
              </Carousel.Caption>
            </Carousel.Item>
           
          </Carousel>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default ModalHome;
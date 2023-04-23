import React from 'react'
import  "../styles/home.css"
import Leonor from "../assets/leonor.jpg"
import Astronuta from "../assets/astronauta.webp"
import Beatriz from "../assets/Beatriz.jpg"
import ModalHome from './ModalHome'
import Footer from './Footer'

export const Home = () => {
    return (

    <>
    <ModalHome />
    <div className='contenedorprincipal'>
      <h1 className='titulo'>Noticias</h1>
<div className='contenedor'>
  
  <div className="row row-cols-3 row-cols-md-1 g-4 p-5">
   
  <div className="col ">
      <div class="card h-100">
        <img src={Astronuta} class="card-img-top" alt="..."></img>
        <div class="card-body card-gradient">
          <p class="card-text">Leonor Espinosa es 
  nombrada la mejor
  chef del mundo
  .</p>
  <button type="button" class="btn btn-gradient text-white mx-auto d-block">Conoce más</button>
        </div>
      </div>
    </div>
        
    <div class="col ">
      <div class="card h-100">
        <img src={Beatriz} class="card-img-top" alt="..."></img>
        <div class="card-body card-gradient">
          <p class="card-text">Leonor Espinosa es 
  nombrada la mejor
  chef del mundo
  .</p>
  <button type="button" class="btn btn-gradient text-white mx-auto d-block">Conoce más</button>
        </div>
      </div>
    </div>
  
    <div class="col ">
      <div class="card h-100">
        <img src={Leonor} class="card-img-top" alt="..."></img>
        <div class="card-body card-gradient">
          <p class="card-text">Leonor Espinosa es 
  nombrada la mejor
  chef del mundo
  .</p>
  <button type="button" class="btn btn-gradient text-white mx-auto d-block">Conoce más</button>
        </div>
      </div>
    </div>
  
      </div>
    
  
      </div>
      </div>
      </>

 
      );
    };
    export default Home;
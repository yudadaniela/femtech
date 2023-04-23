import React from 'react'
import  "../styles/home.css"
import Leonor from "../assets/leonor.jpg"
import Astronuta from "../assets/astronauta.webp"
import Beatriz from "../assets/Beatriz.jpg"

export const Home = () => {
    return (
    <div className='contenedorprncipal'>
      <h1 className='titulo'>Noticias</h1>
<div className='contenedor'>
  
  <div class="row row-cols-1 row-cols-md- g-4 p-5">
   
  <div class="col ">
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
      );
    };
    export default Home;
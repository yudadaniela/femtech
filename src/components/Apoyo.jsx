import React from 'react'
import Banner from '../assets/apoyoimage.png'
import '../styles/apoyo.css'
import Finanzas from "../assets/Finanzas.jpg"
import Abogada from "../assets/abogada.jpg"
import Psicologia from "../assets/abogada.jpg"


export const Apoyo = () => {
    return (
        <div className='contenedor'>

            <div className='banner'>
                <img className='bannerimg'
                    src={Banner}
                    alt=""/>
            </div>
            <h1 className='titulo'>Red de apoyo</h1>


            <div class="row p-4">
                <div class="col-md-3">
                    <p className='textprincipal'>Con nuestras voluntarios
                                                    puedes escoger una mentoría
                                                    en el tema que sea de tu 
                                                    interés.
                                                    ¡También puedes ser tú la voluntaria 
                                                    con la que otras mujeres puedan 
                                                    aprender de tu experiencia o en 
                                                    la destreza que tengas!</p>
                </div>


                <div class="col p-2">
                    <div class="card h-100">
                        <img src={Finanzas}
                            class="card-img-top"
                            alt="..."></img>
                        <div class="card-body card-gradient">
                            <h5>Apoyo en temas financieros</h5>
                            <button type="button" class="btn btn-gradient text-white mx-auto d-block">Elegir mentoría</button>
                            <p class="card-text">Duración 30 minutos.</p>
                        </div>
                    </div>
                </div>


                <div class="col p-2">
                    <div class="card h-100">
                        <img src={Abogada}
                            class="card-img-top"
                            alt="..."></img>
                        <div class="card-body card-gradient">
                            <h5>Asesoría legal personalizada</h5>
                            <button type="button" class="btn btn-gradient text-white mx-auto d-block">Elegir mentoría</button>
                            <p class="card-text">Duración 30 minutos.</p>
                        </div>
                    </div>
                </div>


                <div class="col p-2">
                    <div class="card h-100">
                        <img src={Psicologia}
                            class="card-img-top"
                            alt="..."></img>
                        <div class="card-body card-gradient">
                            <h5>Acompañamiento emocional y psicológico</h5>
                            <button type="button" class="btn btn-gradient text-white mx-auto d-block">Elegir mentoría</button>
                            <p class="card-text">Duración 30 minutos.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

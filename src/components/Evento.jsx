import bannerImg from '../assets/banner.png';
import chicasImg from '../assets/chicas.jpg';
import '../styles/index.css'

function Evento() {
  return (
    <div class="padre-contain">
    <div className="banner">

        <img src={bannerImg} alt="Imagen" className="img-fluid w-auto d-block mt-3 w-100" />
    </div>
    
    <div className='d-flex'>
    <div class="contain-title">
      
    <div class="children__title">
      <h1 id="tituloh2">Eventos Próximos</h1>
    </div>
    <div class="children__title2">
      <h1 id="tituloh1">Eventos Próximos</h1>
¿
    </div>
  </div>

  </div>
    
<div className="containercont">
    <div className="container">
<div className="row">
  <div className="col-md-3">
    <div className="container-filters">
      <div className="card-header">Filtrar por</div>
      <input type="text" id="buscar" placeholder="Buscar" />
<hr/>
      <div>
        <div>
          <input type="checkbox" name="filtro" value="Experto en" /> Experto en
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Accesibilidad" /> Accesibilidad/Inclusion(2)
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Ceremonias y comms(6)" /> Ceremonias y comms(6)
        </div>
        <div>
          <input type="checkbox" name="filtro" value="ContentOps(1)" /> ContentOps(1)
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Cultura de equipo(13)" /> Cultura de equipo(13) 
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Design System(8)" /> Design System(8)
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Difusión del valor del diseño(4)" /> Difusión del valor del diseño(4)
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Documentación de procesos(12)" /> Documentación de procesos(12) 
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Estandarización de procesos(14)" /> Estandarización de procesos(14)
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Facilitación de sesiones(3)" /> Facilitación de sesiones(3)
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Gestión de bases de datos(3)" /> Gestión de bases de datos(3) 
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Gestión de herramientas(6)" /> Gestión de herramientas(6) 
        </div>
        <div>
          <input type="checkbox" name="filtro" value="Gestión de presupuesto(2)" /> Gestión de presupuesto(2)
        </div>
      </div>
    </div>
  </div>







  <div className="col-md-9">
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src={chicasImg} alt="Imagen de la tarjeta" className="card-img-top" />
          <div className="card-body">
          <h5 className="card-title">Conferencia para 
emprendimientos digitales</h5>
            <p className="card-text">Lunes 27 de abril
2:00 pm</p>
            <a href="#" className="btn btn-primary"><i className="bi bi-linkedin"></i> Emprendimiento</a>
            <a href="#" className="btn btn-secondary"><i className="bi bi-envelope"></i> Dígital</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={chicasImg} alt="Imagen de la tarjeta" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Conferencia para 
emprendimientos digitales</h5>
            <p className="card-text">Lunes 27 de abril
2:00 pm</p>
<a href="#" className="btn btn-primary"><i className="bi bi-linkedin"></i> Emprendimiento</a>
            <a href="#" className="btn btn-secondary"><i className="bi bi-envelope"></i> Dígital</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={chicasImg} alt="Imagen de la tarjeta" className="card-img-top" />
          <div className="card-body">
          <h5 className="card-title">Conferencia para 
emprendimientos digitales</h5>
            <p className="card-text">Lunes 27 de abril
2:00 pm</p>
<a href="#" className="btn btn-primary"><i className="bi bi-linkedin"></i> Emprendimiento</a>
            <a href="#" className="btn btn-secondary"><i className="bi bi-envelope"></i> Dígital</a>
          </div>
      </div>
  </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <div className="card">
          <img src= {chicasImg} alt="Imagen de la tarjeta" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">Conferencia para 
emprendimientos digitale</p>
            <a href="#" className="btn btn-primary"><i className="bi bi-linkedin"></i> Emprendimiento</a>
            <a href="#" className="btn btn-secondary"><i className="bi bi-envelope"></i> Dígital</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>

    );
}

export default Evento;
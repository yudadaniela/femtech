import bannerImg from '../assets/banner.png';
import dianaImg from '../assets/diana.jpeg';
import '../styles/index.css'

function Talento() {
  return (
    <div class="padre-contain">
      <div className="banner">

          <img src={bannerImg} alt="Imagen" className="img-fluid w-auto d-block mt-3 w-100" />
      </div>
      
      <div className='d-flex'>
      <div class="contain-title">
        
      <div class="children__title">
        <h1 id="tituloh2">Mujeres Talento<span id="parrafo">¡Conecta con más mujeres según tus necesidades e intereses!</span></h1>
      </div>
      <div class="children__title2">
        <h1 id="tituloh1">Mujeres Talento</h1>
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
            <img src={dianaImg} alt="Imagen de la tarjeta" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">Catalina Méndez</h5>
              <p className="card-text">Ginecóloga</p>
              <a href="#" className="btn btn-primary"><i className="bi bi-linkedin"></i> LinkedIn</a>
              <a href="#" className="btn btn-secondary"><i className="bi bi-envelope"></i> Mensaje</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={dianaImg} alt="Imagen de la tarjeta" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Catalina Méndez</h5>
              <p className="card-text">Ginecóloga</p>
              <a href="#" className="btn btn-primary"><i className="bi bi-linkedin"></i> LinkedIn</a>
              <a href="#" className="btn btn-secondary"><i className="bi bi-envelope"></i> Mensaje</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={dianaImg} alt="Imagen de la tarjeta" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">Diana Díaz</h5>
              <p className="card-text">Psícologa</p>
              <a href="#" className="btn btn-primary"><i className="bi bi-linkedin"></i> LinkedIn</a>
              <a href="#" className="btn btn-secondary"><i className="bi bi-envelope"></i> Mensaje</a>
            </div>
        </div>
    </div>
            <div className="col-sm-6 col-md-4 mb-3">
              <div className="card">
            <img src= {dianaImg} alt="Imagen de la tarjeta" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Luciana González</h5>
              <p className="card-text">Medicina Géneral</p>
              <a href="#" className="btn btn-primary"><i className="bi bi-linkedin"></i> LinkedIn</a>
              <a href="#" className="btn btn-secondary"><i className="bi bi-envelope"></i> Mensaje</a>
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

export default Talento;
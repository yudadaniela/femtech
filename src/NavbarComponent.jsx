import { MdPersonOutline } from "react-icons/md";
import  "./styles/navbar.css"
import Logo from "./assets/logo.svg"
function NavbarComponent() {

return (

  <>
<nav class="navbar navbar-expand-lg personalized">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <img className="logo" src={Logo} alt="" />
  <a className="navbar-brand" href="#"></a>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
  
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      
    <li className="nav-item active">
       
      </li>

      <a className="personicon" href="/">
          <MdPersonOutline size={40} />
        </a>


      <li className="nav-item active">
        <a className="nav-link" href="#">Networking <span class="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Eventos</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Red de apoyo</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Buscar por nombre" aria-label="Search"></input>
  
    </form>
  </div>
</nav>
</>

)

}
export default NavbarComponent;
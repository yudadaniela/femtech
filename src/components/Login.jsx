import  "../styles/login.css"
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = () => {
    return (
    <div className='contenedorprncipal'>

      <div className="contenedorperfil">
      <img
                className="imgperfil" 
                src="/src/assets/mujer.png"
                alt="Second slide"
              />

              <div className="contenedor">
<Form className="form-1">

<Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Email" />
         </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="password" placeholder="Ingresa Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">

        <Form.Control type="password" placeholder="Confirma una contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Ya tienes una cuenta inicia sesión" />
      </Form.Group>

      <Button className="bottonLogin" variant="primary" type="submit">
        Crea tu cuenta
      </Button>
    </Form>
      </div>
       
    </div>
    </div>
    
      );
    };
    export default Login;
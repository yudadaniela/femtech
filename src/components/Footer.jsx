import { Navbar, Container } from 'react-bootstrap';

function Footer() {
  return (
  <Navbar style={{ background: '#321473' }} variant="dark">
      <Container>
        <Navbar.Text>
          <h5>© 2023 Mi Sitio Web, Inc.</h5> 
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
import React from 'react'
import  "../styles/home.css"
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Home = () => {
    return (
        <div className='principalhome f-screen'>
        <Container>
          <h1 className="fontpersonalized">Noticias</h1>
          <Row xs={1} md={2} lg={4} className="g-4">
            {[...Array(4)].map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Card {idx + 1}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        </div>
      );
    };
    export default Home;
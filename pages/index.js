
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
  <>
  
  const carros =[
    {marca:'', modelo:'', ano:'', cor:'', foto: ''}
    ]
  

  return(
    
     
    <Navbar titulo="Página 1">
        <Container >

          <Row md={4}>
              {carros.map(item=>(
                <Col className='mb-4'>
                    <Card>
                        <Card.Img variant="top" src={item.foto}/>
                        <Card.Body>
                          <Card.Title>{item.marca}-{item.modelo}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Detalhes</Button>
                        </Card.Body>
                      </Card>    
                  </Col>
                ))}
          </Row>
        </Container> 
        </Navbar>
        </>
  )
}
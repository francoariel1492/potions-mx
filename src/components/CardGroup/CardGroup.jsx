import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./CardGroup.css"
const cardFolder = ["/cards/pexels-cottonbro-studio-7190309.jpg","/cards/pexels-rodnae-productions-7978069.jpg","/cards/pexels-rodnae-productions-7978124.jpg","/cards/pexels-rodnae-productions-7978130.jpg"]

function CardGroup() {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 pt-2 d-flex flex-column justify-content-center align-items-center">
      {cardFolder.map((id,pos) => (
        <Col key={pos} className="py-5">
          <Card className="card">
            <Card.Img variant="top" src={id} />
            <Card.Body className='cardBody'>
              <Card.Title className='cardTitle'><span>Potion {pos}</span></Card.Title>
              <Card.Text className='lead'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardGroup;
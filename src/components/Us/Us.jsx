import { Accordion, Card, Col, Row } from "react-bootstrap";
import "./Us.css";
const cardFolder = [
  "/img/1.jpg",
  "/img/10.jpg",
  "/img/11.jpg",
  "/img/12.jpg",
  "/img/13.png",
  "/img/14.png",
];

const Us = () => {
  return (
    <Row xs={1} md={2} className="g-4 pt-2 text-center p-md-5 m-md-5">
      {cardFolder.map((id, pos) => (
        <Col key={pos}>
          <Card className="card">
            <Card.Img variant="top" src={id} />
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">
                <span>CRIS {pos}</span>
              </Card.Title>
              <Accordion defaultActiveKey="0" >
                <Accordion.Item>
                  <Accordion.Header className="bg-gradient">Cris Magic {pos}</Accordion.Header>
                  <Accordion.Body className="bg-gradient">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Us;

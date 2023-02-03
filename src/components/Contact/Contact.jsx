import { Button, Form } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="row text-center d-flex align-items-center justify-content-center form p-5">
      <h2 className="lead display-2"><span>Contactanos</span></h2>
      <Form className="col-sm-6 col-md-6 col-lg-3 formulario">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="formLabel"><span>Nombre</span></Form.Label>
          <Form.Control
            className="text-center"
            type="name"
            placeholder="Ingresa tu nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="formLabel"><span>Email</span></Form.Label>
          <Form.Control
            className="text-center"
            type="email"
            placeholder="Ingresa tu email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="formLabel"><span>Telefono</span></Form.Label>
          <Form.Control
            className="text-center"
            type="password"
            placeholder="Tu password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="formLabel"><span>Dejanos tu mensaje!</span></Form.Label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </Form.Group>
        <Button variant="primary" className="btn"type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { Button } from "react-bootstrap";
import CardGroup from "../CardGroup/CardGroup";
import "./ProductsInfo.css";

const ProductsInfo = () => {
  const [bool, setBool] = useState(false);
  return (
    <section className="text-center m-0 p-5 p-sm-4">
      <div>
        <h2 className="display-1">
          <span>NUESTROS KITS</span>
        </h2>
        {bool === false ? (
          <p className="lead fs-5 p-2 fw-bold p-md-5 m-md-5 d-flex flex-column justify-content-center align-items-center">
            Nuestros kits te brindarán la oportunidad de recordar tu verdadera
            naturaleza, tu relación física y energética con el territorio, te
            ayudarán a conectarte con tu Ser más profundo desde un lugar lleno
            de amor y sabiduría. Déjate guiar por los espíritus vegetales… A
            través de los rituales que canalizamos en cada experiencia,
            compartimos los aprendizajes que hemos recibido, nuestra estrecha
            relación con las fuerzas sutiles de la naturaleza, un vínculo que se
            fortalece en la convivencia, en el reír mirándonos a los ojos, y la
            revelación de nuestro ser interior.
            <Button className="m-5 btn btn-lg" onClick={setBool}>
              <span>Descubrilos</span>
            </Button>
          </p>
        ) : (
          <>
            <p className="lead fs-5 p-2 fw-bold p-md-5 m-md-5">
              Para dar inicio a esta aventura hemos creado el kit AMARE, un
              recorrido que te deleita por diversos matices del Amor y la
              búsqueda de los placeres. El elixir botánico creado para esta
              experiencia cuenta con notas florales, intensos tonos especiados y
              un ligero toque frutal que le dan una personalidad misteriosa,
              atrayente e ingenua.
            </p>
            <CardGroup />
          </>
        )}
      </div>
    </section>
  );
};

export default ProductsInfo;

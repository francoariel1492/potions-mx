import React from "react";
import CardGroup from "../CardGroup/CardGroup";

const ProductsInfo = () => {
  return (
    <section className="text-center products p-5">
      <h2 className="display-2">Nuestros Kits</h2>
      <p className="lead fs-5 p-1">
        Nuestros kits te brindarán la oportunidad de recordar tu verdadera
        naturaleza, tu relación física y energética con el territorio, te
        ayudarán a conectarte con tu Ser más profundo desde un lugar lleno de
        amor y sabiduría. Déjate guiar por los espíritus vegetales…
      </p>
      <CardGroup/>
    </section>
  );
};

export default ProductsInfo;

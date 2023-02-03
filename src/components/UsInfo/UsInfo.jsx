import Parallax from '../Parallax/Parallax';
import "./UsInfo.css";

const UsInfo = () => {
  return (
    <section className="text-center">
      <h2 className="display-1 p-5"><span>NOSOTRAS</span></h2>
      
      <p className="lead fs-5 p-2 fw-bold p-md-5 m-md-5">
        Somos tejedoras de vivencias que permanecen en las memorias colectivas.
        Trío de mujeres llenas de sabiduría, magia y alegría por la vida,
        dedicadas a la investigación alquímica, astrológica, brujería y las
        fuerzas universales que llenan de energía cada una de nuestras
        creaciones. Gracias a la sinergia revelada ante los conocimientos que
        aporta cada una, hemos logrado formular esta propuesta de experiencias
        sensoriales que fusiona la Mixología Botánica y la magia, develando así
        los misterios de nuestra propia naturaleza.
      </p>
      <Parallax/>
    </section>
  );
};

export default UsInfo;

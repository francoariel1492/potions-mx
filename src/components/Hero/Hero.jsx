import Slider from "../Slider/Slider";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <main className="text-center m-0 p-5 p-sm-4  hero">
        <div className="heroInfo p-md-5 m-md-5">
          <h1 className="display-1">
            <span>ESPIRITU BOTÁNIKA</span>
          </h1>
          <p className="lead p-md-3 m-md-3">
            Coctelería mágica de tradición ancestral que estimula los sentidos,
            nutre el ser y eleva el espíritu. Una experiencia que nos hace
            testigos de los misterios de la natura, su interacción con las
            fuerzas sutiles que nos sostienen, expresando escenarios para el
            autodescubrimiento, la celebración, el júbilo, la invención y la
            gratitud. Creamos vivencias que permanecen en las memorias
            colectivas, sensoriales, genéticas, astrales, que permiten el
            descubrimiento, el crecimiento y la sanación.
          </p>
        </div>
      </main>
      <Slider />
    </>
  );
};

export default Hero;

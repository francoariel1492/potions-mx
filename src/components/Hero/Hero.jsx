import Social from "../Footer/Footer";
import Slider from "../Slider/Slider";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <main className="text-center m-4 p-sm-4 hero">
        <div className="heroInfo p-md-5 m-md-5">
          <h1 className="display-1">
            <span>ALKHIMAQUIA</span>
          </h1>
          <p className="lead">
              Mixología mágica de tradición ancestral que estimula los sentidos,
              nutre el ser y eleva el espíritu
          </p>
      <Social />
        </div>
      </main>
      <Slider className="parallax bg"/>
    </>
  );
};

export default Hero;

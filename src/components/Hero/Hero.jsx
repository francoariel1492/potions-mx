import Slider from "../Slider/Slider";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <main className="text-center m-0 p-5 p-sm-4 hero">
        <div className="heroInfo p-md-5 m-md-5">
          <h1 className="display-1">
            <span>ESPIRITU BOTÁNIKA</span>
          </h1>
        </div>
      </main>
      <Slider />
    </>
  );
};

export default Hero;

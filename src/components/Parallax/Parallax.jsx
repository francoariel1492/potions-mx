import "./Parallax.css";
import { Parallax } from "react-parallax";
import Profesional from "../../../public/parallax/6.jpg"

const ParallaxImg = () => {
  return (
    <div>
      <Parallax strength={600} bgImage={Profesional}>
      <div className="content">
          <div className="text-content"><h2 className="display-1"><span>CONOCENOS</span></h2></div>
        </div>
      </Parallax>
      {/* <Parallax strength={300} blur={{min:-1, max:15}} bgImage={Profesional2}>
        <div className="content">
          <div className="text-content">Blur Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={-600} bgImage={Profesional3}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax> */}
      {/* <div className="content"></div> */}
    </div>
  );
};

export default ParallaxImg;

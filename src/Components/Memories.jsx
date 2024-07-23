import React from "react";
import Celeb1 from "../assets/people/1.png";
import Celeb2 from "../assets/people/2.png";
import Celeb3 from "../assets/people/3.png";
import "./Style/memories.css";
class Memories extends React.Component {
  render() {
    return (
      <>
        <div className="Container_Memories">
          <img src={Celeb1} className="celeb_pic" alt="celeb_pic" />
          <img src={Celeb2} className="celeb_pic" alt="celeb_pic" />

          <img src={Celeb3} className="celeb_pic" alt="celeb_pic" />

          <img src={Celeb1} className="celeb_pic" alt="celeb_pic" />

          <img src={Celeb2} className="celeb_pic" alt="celeb_pic" />

          <img src={Celeb3} className="celeb_pic" alt="celeb_pic" />
        </div>
      </>
    );
  }
}

export default Memories;

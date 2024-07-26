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
          <div className="celeb_pic">
            <img src={Celeb1} className=" item1" alt="celeb_pic" />
            <img src={Celeb2} className=" item2" alt="celeb_pic" />

            <img src={Celeb3} className=" item3" alt="celeb_pic" />

            <img src={Celeb1} className=" item4" alt="celeb_pic" />

            <img src={Celeb2} className=" item5" alt="celeb_pic" />

            <img src={Celeb3} className=" item6" alt="celeb_pic" />
          </div>
        </div>
      </>
    );
  }
}

export default Memories;

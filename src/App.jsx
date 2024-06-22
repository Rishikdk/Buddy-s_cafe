import React from "react";
import Header from "./Components/header.jsx";
import Desk_pic from "./assets/img/front.jpeg";
import Popular from "./Components/Popular_Dishes.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="Containers_App">
          <div className="Container_header">
            <img src={Desk_pic} className="Desk_pic" alt="Desk_pic" />
          </div>
          <div className="Popular">
            <Popular />
            <label>Rishi khadka</label>
          </div>
        </div>
      </>
    );
  }
}

export default App;

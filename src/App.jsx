import React from "react";
import Header from "./Components/header.jsx";
import Desk_pic from "./assets/img/front.jpeg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="Containers_App">
          <div className="Container_header">
            <img src={Desk_pic} className="Desk_pic" alt="Desk_pic" />
          </div>
        </div>
      </>
    );
  }
}

export default App;

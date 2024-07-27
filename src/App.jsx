import React from "react";
import Header from "./Components/header.jsx";
import Desk_pic from "./assets/img/front.jpeg";
import Dish1 from "./assets/img/1.jpg";
import Dish2 from "./assets/img/2.jpg";
import Dish3 from "./assets/img/3.png";
import Popular from "./Components/Popular_Dishes.jsx";
import Memories from "./Components/Memories.jsx";
import About_us from "./Components/About_Us.jsx";
import Menu from "./Components/Menu.jsx";
import "./App.css";
import CustomerReview from "./Components/Customer_reviews.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="Containers_App">
          <header>
            <Header />
          </header>
          <div className="Container_header">
            <img src={Desk_pic} className="Desk_pic" alt="Desk_pic" />
          </div>
          <h1 className="popular_name">Popular Dishes</h1>
          <div className="Popular">
            <Popular img={Dish1} name="Meat Balls" />
            <Popular img={Dish2} name="Chicken Drum" />
            <Popular img={Dish3} name="Mix Food" />
            <Popular img={Dish1} name="Meat Balls" />
            <Popular img={Dish2} name="Chicken Drum" />
            <Popular img={Dish3} name="Mix Food" />
            <Popular img={Dish1} name="Chicken Drum" />
            <Popular img={Dish2} name="Mix Foodizza" />
          </div>

          <div className="memories">
            <h1>Memories</h1>
            <Memories />
          </div>
          <div className="About_us">
            <About_us />
          </div>
          <div className="Menu">
            <Menu />
          </div>
          <div className="Customer_review">
            <CustomerReview />
          </div>
          <div className="footer"></div>
        </div>
      </>
    );
  }
}

export default App;

import React from "react";
import "./Style/about.css";

class About_us extends React.Component {
  render() {
    return (
      <>
        <div className="Containers_about">
          <div className="owner_profile">
            <div className="owner_img">
              <div className="half_circle"></div>
              <div className="profile_img"></div>
            </div>
            <div className="owner_name">
              <h1>Samyog Katwal</h1>
              <p>founder</p>
            </div>
          </div>
          <div className="Container_details">
            <h1>About Us</h1>
            <p>
              Welcome to Buddy's Cafe, where every visit feels like catching up
              with an old friend. Established three years ago in the bustling
              heart of downtown, our cafe has quickly become the go-to spot for
              the perfect blend of comfort and quality. At Buddy's Cafe, we take
              pride in our carefully sourced coffee beans, roasted to perfection
              to deliver a rich, flavorful experience in every cup. Our menu
              features an array of delightful treats, from freshly baked
              pastries to hearty sandwiches, all made with love and the finest
              local ingredients. Our friendly baristas are passionate about
              crafting your favorite beverages, whether it's a classic espresso
              or a unique seasonal creation.
            </p>
            <p>
              The cozy, welcoming atmosphere at Buddy's makes it the ideal place
              to relax, work, or catch up with friends. We believe in community
              and regularly host events that bring people together, from live
              music to book readings. Thank you for choosing Buddy's Cafe – we
              look forward to serving you and becoming your favorite
              neighborhood spot. Come join us and make every day a little
              brighter with a visit to Buddy's!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About_us;

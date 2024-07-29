import React from "react";
import Background from "../assets/img/customer.png";
import "./Style/customer.css";
import Star from "../assets/img/Star 3.png";

function CustomerReview() {
  return (
    <>
      <div className="Container_review">
        <div className="background">
          <div className="titles">
            <h1>Customer Review</h1>
          </div>
          <div className="Containers_box">
            <div className="container_user">
              <div className="user_name">
                <h1>Rishi Khadka</h1>
              </div>
              <div className="review_star">
                <p>Review star here:</p>
                <p>
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </p>
              </div>
              <div className="comment">
                <p>Comment:</p>
                <p>Best quality food in low price it tooo good ❤️❤️❤️</p>
              </div>
            </div>

            <div className="container_user">
              <div className="user_name">
                <h1>Sajak Shrestha</h1>
              </div>
              <div className="review_star">
                <p>Review star here:</p>
                <p>
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </p>
              </div>
              <div className="comment">
                <p>Comment:</p>
                <p>
                  Best for chilling with buddies with chill beer and wine and
                  reasonable price ❤️ and friendly staff..💐💐💐🖤🖤
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerReview;

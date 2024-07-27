import React from "react";
import Background from "../assets/img/customer.png";
import "./Style/customer.css";

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
              <div className="user_profile"></div>
              <div className="review_star">
                <p>Review star here</p>
              </div>
              <div className="comment"></div>
            </div>

            <div className="container_user">
              <div className="user_profile"></div>
              <div className="review_star">
                <p>Review star here</p>
              </div>
              <div className="comment"></div>
            </div>
            <div className="container_user">
              <div className="user_profile"></div>
              <div className="review_star">
                <p>Review star here</p>
              </div>
              <div className="comment"></div>
            </div>
            <div className="container_user">
              <div className="user_profile"></div>
              <div className="review_star">
                <p>Review star here</p>
              </div>
              <div className="comment"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerReview;

import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Contact() {
  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <img
            height="600px"
            width="100%"
            src="https://wdc.bih.nic.in/images/contact-us.jpg"
            alt=""
          ></img>
        </div>
        <div className="contactDetails">
          <h1>Reach us at</h1>
          <div className="icon">
            <i class="fa-solid fa-phone"></i> <span>+91 987654345</span>
          </div>
          <div className="icon">
            <i class="fa-solid fa-copyright"></i>
            <span>sadhna.khairia@gmail.com</span>
          </div>
          <div className="icon">
            <i class="fa-solid fa-location-dot"></i>
            <span>Mumbai</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

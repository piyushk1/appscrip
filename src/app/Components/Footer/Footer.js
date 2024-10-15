import React from "react";
import "./Footer.css";
import Image from "next/image";
import GPAY from "../../../public/assets/GPAY.png";
import AmericanExpress from "../../../public/assets/AmericanExpress.png";
import MasterCard from "../../../public/assets/Mastercard.png";
import Paypal from "../../../public/assets/paypal.png";
import Opay from "../../../public/assets/opay.png";
import Apay from "../../../public/assets/Apay.png";
import linkedin from "../../../public/assets/linkedin.png";
import instagram from "../../../public/assets/instagram.png";
import usa from "../../../public/assets/usa.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerRow">
          <div className="footerQuadrant">
            <h2 className="footerHeading">BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettā muse.</p>
            <div className="subscribeSection">
              <input
                className="emailInput"
                type="email"
                placeholder="Enter your e-mail..."
              />
              <button type="button" className="subscribeButton">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="footerQuadrant">
            <h2 className="footerSubHeading">CONTACT US</h2>
            <div>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div>
              <h2 className="footerSubHeading">Currency</h2>
              <div className="currencySection">
                <Image src={usa} alt="USA Flag" width={24} height={16} />{" "}
                <p className="currencyText">USD</p> 
              </div>

              <p className="transaction">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footerLine"></div>

      <div className="footerContent">
        <div className="footerRow">
          <div className="footerQuadrant">
            <h3 className="footerSubHeading">mettā muse</h3>
            <div className="footerLinks">
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliance Docs</p>
            </div>
          </div>

          <div className="footerQuadrant">
            <h3 className="footerSubHeading">Quick Links</h3>
            <div className="footerLinks">
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className="footerQuadrant">
            <h2 className="footerSubHeading">Follow Us</h2>

            <div className="socialIcons">
              <div className="socialIcon">
                <Image
                  src={instagram}
                  alt="Follow us on Instagram"
                  width={32}
                  height={32}
                  className="nextImage"
                />
              </div>
              <div className="socialIcon">
                <Image
                  src={linkedin}
                  alt="Follow us on LinkedIn"
                  width={32}
                  height={32}
                  className="nextImage"
                />
              </div>
            </div>

            <h3 className="footerSubHeading">mettā muse Accepts</h3>
            <div className="paymentIcons">
              <Image className="paymentIcon" src={GPAY} alt="GPay" />
              <Image
                className="paymentIcon"
                src={MasterCard}
                alt="MasterCard"
              />
              <Image className="paymentIcon" src={Paypal} alt="Paypal" />
              <Image
                className="paymentIcon"
                src={AmericanExpress}
                alt="American Express"
              />
              <Image className="paymentIcon" src={Apay} alt="Apple Pay" />
              <Image className="paymentIcon" src={Opay} alt="Opay" />
            </div>
          </div>
        </div>
      </div>

      <div className="footerCopyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

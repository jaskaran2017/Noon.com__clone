import React from "react";
import "./footer.css";
// import Icon from "../icon/Icon";
import { AiOutlineInfoCircle, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__header">
        <div className="footer__header-left">
          <div className="footer__header-left-content">
            <p>We're Always Here To Help</p>
            <p>Reach out to us through any of these support channels</p>
          </div>
        </div>
        <div className="footer__header-right">
          <div className="footer__header-right-1">
            <div className="footer__header-right-1-icon">
              <AiOutlineInfoCircle />
            </div>
            <div className="footer__header-right-1-text">
              <p>HELP CENTER</p>
              <p>help.noon.com</p>
            </div>
          </div>
          <div className="footer__header-right-2">
            <div className="footer__header-right-1-icon">
              <AiOutlineMail />
            </div>
            <div className="footer__header-right-1-text">
              <p>EMAIL SUPPORT</p>
              <p>care@noon.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__body">
         <div className="footer__body-list">
             <div>
                 <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
             </div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
         </div>   
      </div>
      <div></div>
    </div>
  );
}

export default Footer;

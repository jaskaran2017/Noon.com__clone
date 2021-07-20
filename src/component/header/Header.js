import React from "react";
import "./Header.css";
import {
  ArrowDropDown,
  PersonOutline,
  ShoppingCartOutlined,
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__up">
        <div className="header__up-left">
          <a href="#">
            <img
              src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
              alt="noon"
            />
          </a>
        </div>
        <div className="header__up-right">
          <div className="header__up-right1">
            <div className="header__input">
              <input type="text" placeholder="What sre you looking for?" />
            </div>
          </div>
          <div className="header__up-right2">
            <div className="header__up-right2_1">
              <div role="button" className="header__up-right_language">
                مترجم لغة
              </div>
              <div className="header__up-right2_2">
                <button className="header__btn">
                  <img
                    src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
                    alt="contry-ae"
                  />
                  <div className="header__up-stack">
                    <span>Ship to</span>
                    <span>UAE</span>
                  </div>
                  <div className="header__up-arrowdwon">
                    <ArrowDropDown />
                  </div>
                </button>
              </div>
            </div>
            <div className="header__up-right2_3">
              <div className="header__signIn">
                <button className="header__signInbtn">
                  <span>Sign In</span>
                  <PersonOutline />
                </button>
              </div>
            </div>
            <div className="header__up-right2_4">
              <a href="#" className="cartLinks">
                <div className="header__cartTitle">Cart</div>
                <div className="header__cartIcon">
                  <ShoppingCartOutlined />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header__down">
        <div className="header__content">
          <div className="header__content-trigger">
            <a href="#">All Categories</a>

            <ArrowDropDown style={{ color: "rgb(56, 102, 223)" }} />
          </div>
        </div>
        <div className="header__down-classes">
          <ul>
            <li>ELECTRONICS</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>HOME</li>
            <li>BEAUTY & FREAGRANCE</li>
            <li>BABY & TOYS</li>
            <li>GROCERY</li>
            <li>SPORTS</li>
            <li>THE DUBAI MALL STORE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

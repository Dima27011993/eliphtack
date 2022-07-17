import React from "react";
import mod from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div>
      <div className={mod.wraperNav}>
        <div className={mod.linkShops}>
      <a className={mod.shops} href="/Shops">
        Shops:
      </a>
      </div>

      <div className={mod.InnerShops}>
        <a className={mod.shops} href="/McDonny">
          McDonny
        </a>
      </div>

      <div className={mod.InnerShops}>
        <a className={mod.shops} href="/CFK">
          CFK
        </a>
      </div>

      <div className={mod.InnerShops}>
        <a className={mod.shops} href="/etc1">
          etc1
        </a>
      </div>

      <div className={mod.InnerShops}>
        <a className={mod.shops} href="/etc2">
          etc2
        </a>
      </div>

      <div className={mod.InnerShops}>
        <a className={mod.shops} href="/etc3">
          etc3
        </a>
      </div>
      
      <div className={mod.InnerShops}>
        <a className={mod.shops} href="/etc">
          etc
        </a>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;

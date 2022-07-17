import "./App.css";
import ShopLink from "./Title/ShopMainLink";
import ShopingCardLink from "./Title/ShopingCardLink/ShopingCardLink";
import MainNavigation from "./MainNavigation/MainNavigation";
import ContentNavigationShop from "./ContentNavigation/ContentNavigationShop";
import ContentNavigationShoppingCard from "./ContentNavigationShoppingCard/ContentNavigationShopingCard";
import React from "react";
import {Route} from "react-router-dom";

const App = (props) => {
  return (
    <div className='container'>
      <div className="wrapLink">
        <ShopLink />
        <ShopingCardLink />
      </div>

      <div className="wrapLink_nav_and_content">
        <Route path="/shop" render={()=><MainNavigation/>}/>
        <Route path="/shop" render={()=><ContentNavigationShop/>}/>
        <Route path="/shopingCard" render={()=><ContentNavigationShoppingCard/>}/>
      </div>
    </div>
  );
};

export default App;

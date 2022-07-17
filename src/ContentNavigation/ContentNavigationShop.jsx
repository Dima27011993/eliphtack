import React from "react";
import { NavLink } from "react-router-dom";
import mod from "./ContentNavigationShop.module.css";

let boxContentData = {
  info:'info',
  navlink:'add to card',
}

let boxContent = ()=>{
  return(
    <div className={mod.boxContent}>
    <div className={mod.contentTop}>
      <img className={mod.photoInner} src="" alt="" />
    </div>
    <div className={mod.contentBottom}>
      <p className={mod.InnerContentBox}>{boxContentData.info}</p>
      <button className={mod.ButtonInnerContentBox}>
        <NavLink className={mod.NavLinkContentBox} to='#'>{boxContentData.navlink}</NavLink>
      </button>
    </div>
  </div>
  )
}

const ContentNavigationShop = () => {
  return (
    <div>
      <div className={mod.wrapperContent}>

        <div className={mod.boxContent}>
          <div className={mod.contentTop}>
            <img className={mod.photoInner} src="" alt="" />
          </div>
          <div className={mod.contentBottom}>
            <p className={mod.InnerContentBox}>info</p>
            <button className={mod.ButtonInnerContentBox}>
              <NavLink className={mod.NavLinkContentBox} to='#'>add to card</NavLink>
            </button>
          </div>
        </div>
        {boxContent()}
        {boxContent()}
        {boxContent()}
        {boxContent()}
        {boxContent()}
      </div>
    </div>
  );
};


export default ContentNavigationShop;

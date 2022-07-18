import React from "react";
import { NavLink } from "react-router-dom";
import mod from "./ContentNavigationShop.module.css";

let boxContentData = [
  {info:'info',navlink:'add to card'},
  {info:'info',navlink:'add to card'},
  {info:'info',navlink:'add to card'},
  {info:'info',navlink:'add to card'},
  {info:'info',navlink:'add to card'},
  {info:'info',navlink:'add to card'}
]


let NewElementBoxContent = boxContentData.map(m =><div className={mod.boxContent}>
  <div className={mod.contentTop}>
    <img className={mod.photoInner} src="" alt="" />
  </div>
  <div className={mod.contentBottom}>
    <p className={mod.InnerContentBox}>{m.info}</p>
    <button className={mod.ButtonInnerContentBox}><NavLink className={mod.NavLinkContentBox} to='#'>{m.navlink}</NavLink>
    </button>
  </div>
</div>)



const ContentNavigationShop = () => {
  return (
    <div>
      <div className={mod.wrapperContent}>

      {NewElementBoxContent}
      </div>
    </div>
  );
};


export default ContentNavigationShop;

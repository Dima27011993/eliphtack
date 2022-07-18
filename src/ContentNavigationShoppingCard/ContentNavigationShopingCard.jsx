import React from "react";
import mod from "./ContentNavigationShoppingCard.module.css";


let wrapFormContentData = [
  {label:'Name:',input:'text'},
  {label:'Email:',input:'email'},
  {label:'Phone:',input:'number'},
  {label:'Adress:',input:'text'}
]

let wrapFormContentDataElement = wrapFormContentData.map(d=><div className={mod.wrapFormContent}>
  <label>{d.label}</label>
  <input type={d.input} placeholder="Input" />
  </div>)

  let formBoxContent = [
    {name:'Name:',price:'Price:'},
    {name:'Name:',price:'Price:'},
    {name:'Name:',price:'Price:'},
    {name:'Name:',price:'Price:'},
    {name:'Name:',price:'Price:'},
  ]
  let formBoxContentElement = formBoxContent.map(d=><div className={mod.boxContent}>
    <div className={mod.contentTop}>
      <img className={mod.photoInner} src="" alt="" />
    </div>
    <div className={mod.contentBottom}>
      <p className={mod.InnerContentBox}>{d.name}</p>
      <p className={mod.InnerContentBox}>{d.price}</p>
      <input type="number" />
    </div>
  </div>)
  
const ContentNavigationShoppingCard = () => {
  return (
    <div>
      <div className={mod.formShoppingCard}>
        <div className={mod.ContentLeftForm}>
          <form className={mod.formContentNavigationShoppingCard} action="">

            {wrapFormContentDataElement}

          </form>
        </div>
        <div className={mod.ContentRightForm}>
<div className={mod.ContentShopingCard}>

<div className={mod.wrapperContent}>
{formBoxContentElement}

      </div>

</div>
<div className={mod.totalPriceAndSubmit}>
    <p className={mod.pPriceandSubmit}>
        Total Price: 999 
    </p>
    <button className={mod.buttonPriceandSubmit}>Submit</button>
</div>
</div>
      </div>
    </div>
  );
};

export default ContentNavigationShoppingCard;

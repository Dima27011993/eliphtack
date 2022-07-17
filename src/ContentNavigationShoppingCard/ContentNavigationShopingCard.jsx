import React from "react";
import mod from "./ContentNavigationShoppingCard.module.css";
const ContentNavigationShoppingCard = () => {
  return (
    <div>
      <div className={mod.formShoppingCard}>
        <div className={mod.ContentLeftForm}>
          <form className={mod.formContentNavigationShoppingCard} action="">
            <div className={mod.wrapFormContent}>
            <label>Name:</label>
            <input type="text" placeholder="Input" />
            </div>

            <div className={mod.wrapFormContent}>
            <label>Email:</label>
            <input type="email" placeholder="Input"/>
            </div>

            <div className={mod.wrapFormContent}>
            <label>Phone:</label>
            <input type="number" placeholder="Input" />
            </div>

            <div className={mod.wrapFormContent}>
            <label>Adress:</label>
            <input type="text" placeholder="Input"/>
            </div>
          </form>
        </div>
        <div className={mod.ContentRightForm}>
<div className={mod.ContentShopingCard}>

<div className={mod.wrapperContent}>
        <div className={mod.boxContent}>
          <div className={mod.contentTop}>
            <img className={mod.photoInner} src="" alt="" />
          </div>
          <div className={mod.contentBottom}>
            <p className={mod.InnerContentBox}>Name:</p>
            <p className={mod.InnerContentBox}>Price:</p>
            <input type="number" />
          </div>
        </div>
        <div className={mod.boxContent}>
          <div className={mod.contentTop}>
            <img className={mod.photoInner} src="" alt="" />
          </div>
          <div className={mod.contentBottom}>
            <p className={mod.InnerContentBox}>Name:</p>
            <p className={mod.InnerContentBox}>Price:</p>
            <input type="number" />

          </div>
        </div>
        <div className={mod.boxContent}>
          <div className={mod.contentTop}>
            <img className={mod.photoInner} src="" alt="" />
          </div>
          <div className={mod.contentBottom}>
            <p className={mod.InnerContentBox}>Name:</p>
            <p className={mod.InnerContentBox}>Price:</p>
            <input type="number" />

          </div>
        </div>

        <div className={mod.boxContent}>
          <div className={mod.contentTop}>
            <img className={mod.photoInner} src="" alt="" />
          </div>
          <div className={mod.contentBottom}>
            <p className={mod.InnerContentBox}>Name:</p>
            <p className={mod.InnerContentBox}>Price:</p>
            <input type="number" />
          </div>
        </div>

        <div className={mod.boxContent}>
          <div className={mod.contentTop}>
            <img className={mod.photoInner} src="" alt="" />
          </div>
          <div className={mod.contentBottom}>
            <p className={mod.InnerContentBox}>Name:</p>
            <p className={mod.InnerContentBox}>Price:</p>
            <input type="number" />
          </div>
        </div>

        <div className={mod.boxContent}>
          <div className={mod.contentTop}>
            <img className={mod.photoInner} src="" alt="" />
          </div>
          <div className={mod.contentBottom}>
          <p className={mod.InnerContentBox}>Name:</p>
            <p className={mod.InnerContentBox}>Price:</p>
            <input type="number" />
          </div>
        </div>
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

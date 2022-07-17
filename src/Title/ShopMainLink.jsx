import React from "react"
import mod from './ShopMainLink.module.css'
const ShopLink = ()=>{
return(
    <div>
        <div className={mod.linkShop}>
<a className={mod.shop} href="/shop">shop</a>
</div>
</div>
)
}



export default ShopLink
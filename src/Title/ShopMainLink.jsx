import React from "react"
import mod from './ShopMainLink.module.css'
import {NavLink} from 'react-router-dom'
const ShopLink = ()=>{
return(
    <div>
        <div className={mod.linkShop}>
<NavLink to="/shop" className={mod.shop}>shop</NavLink> 
</div>
</div>
)
}



export default ShopLink
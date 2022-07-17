import React from "react"
import {NavLink} from 'react-router-dom'
import mod from './ShopingCardLink.module.css'


const ShopingCardLink = ()=>{
    return(
        <div>
            <NavLink to="/shopingCard" className={mod.shopingCard}>shopingCard</NavLink>
        </div>
    )
}

export default ShopingCardLink
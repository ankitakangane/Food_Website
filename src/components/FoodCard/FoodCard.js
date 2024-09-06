import React from 'react';
import "./FoodCard.css";
import veg from "./veg (2).png";
import non_veg from "./non veg.png";
import {THEME} from "./../../config/data"

function FoodCard({imgUrl,title,discription,isVeg,price}) {
  return (
    <div className="food_card">
        <img src={imgUrl} className='food_img'/>
      <h1 className="food_title" style={{color:THEME.highlight}}>{title}</h1>
      <p>{discription}</p>
      <img src={isVeg ? veg : non_veg} className="food_icons"/>
      {
      price ? <p className='food_price'>Rs {price} </p>
      : "Not Available"
      }
      <button type="button" className='food_butn' style={{backgroundColor:THEME.highlight}}>
        Add to Card
      </button>
    </div>
  )
}

export default FoodCard

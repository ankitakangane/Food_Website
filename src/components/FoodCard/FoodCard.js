import React from 'react';
import "./FoodCard.css";
import veg from "./veg (2).png";
import non_veg from "./non veg.png"

function FoodCard({imgUrl,title,discription,isVeg}) {
  return (
    <div className="food_card">
        <img src={imgUrl} className='food_img'/>
      <h1 className="food_title">{title}</h1>
      <p>{discription}</p>
      <img src={isVeg ? veg : non_veg} className="food_icons"/>
    </div>
  )
}

export default FoodCard

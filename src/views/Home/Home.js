import React from 'react';
import "./Home.css";
import FoodCard from '../../components/FoodCard/FoodCard';
import {TITLE,TAGLINE,PRODUCTS,THEME} from "./../../config/data";
 
function Home() {
  return (
    <div>
      <h2 className='food_name' style={{
        color:THEME.highlight,margin:0}}>{TITLE}</h2>
      <p className="food_tagline">{TAGLINE}</p>
      <div className='cards_container'>

      {PRODUCTS.map((food)=>{
        
        return <FoodCard
        imgUrl={food.imgUrl}
        title={food.title}
        discription={food.discription}
        isVeg={food.isVeg}
        price={food.price}
      />


    })}

        

      </div>
    </div>
  )
}

export default Home

import React from 'react';
import "./Home.css";
import FoodCard from '../../components/FoodCard/FoodCard';

const foods = [
  {
    imgUrl:"https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4=",
    title:"Chiken Biryani",
    discription:" 'Chicken Biryani' is a highly aromatic, mouth-watering staple dish that needs no introduction",
    isVeg:false,
    price:200
  },
  {
    imgUrl:"https://img.freepik.com/premium-photo/photography-tasty-indian-masala-dosa_1288657-45837.jpg?w=740",
    title:"Dosa",
    discription:" 'Dosa' is a highly aromatic, mouth-watering staple dish that needs no introduction",
    isVeg:true,
    price:100
  },
  {
    imgUrl:"https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?t=st=1723903755~exp=1723907355~hmac=9443fc09e98eb04850c5778ea61474974dd220826b1eb0f7adfdd0d38fa8bedc&w=740",
    title:"Sandwich",
    discription:" 'Sandwich' is a highly aromatic, mouth-watering staple dish that needs no introduction",
    isVeg:true,
    price:80
  },
  {
    imgUrl:"https://img.freepik.com/premium-photo/ulta-vada-pav-is-made-with-spicy-potato-stuffed-bun-called-pav-inside-vada-inside-out-wada-pao_466689-86255.jpg?w=900",
    title:"Wada Pav",
    discription:" 'Wada Pav' is a highly aromatic, mouth-watering staple dish that needs no introduction",
    isVeg:true,
    price:50
  },
  {
    imgUrl:"https://as1.ftcdn.net/v2/jpg/04/94/92/18/1000_F_494921881_UCVG7kgihpMUbbDC5VxuufeI7B5TQBr0.jpg",
    title:"Pani-Puri",
    discription:" 'Pani-Puri' is a highly aromatic, mouth-watering staple dish that needs no introduction",
    isVeg:true,
    price:50
  },
  {
    imgUrl:"https://img.freepik.com/premium-photo/3d-rendered-photo-chicken-qorma-with-simple-background_1149190-12572.jpg?w=740",
    title:"Chicken",
    discription:" 'Chicken' is a highly aromatic, mouth-watering staple dish that needs no introduction",
    isVeg:true,
    price:50
  }
]

 
function Home() {
  return (
    <div>
      <h2 className='food_name'>Ankita Dhaba</h2>
      <div className='cards_container'>

      {foods.map((food)=>{
        
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

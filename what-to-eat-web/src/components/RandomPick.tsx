//import { useState } from "react"
import { useEffect, useState } from "react";
import axios from 'axios'

const RandomPick = () => {
  const [randomFood, setRandomFood] = useState(null);
  const [dataLoaded, setdataLoaded] = useState(false);

  let foodType: string;
  // I don't wanna lose my github commit streak

  const random = Math.floor(Math.random() * 20);
  const foodRandom = Math.floor(Math.random() * 3);

  switch (foodRandom) {
    case 0:
      foodType = "snack";
      break;
    case 1:
      foodType = "breakfast"
      break;
    case 2:
      foodType = "lunch";
      break;
    case 3:
      foodType = "teatime"
      break;
  }

  const apiCall =
    `https://api.edamam.com/api/recipes/v2?app_id=d733ef7d&app_key=5ebdbaff6b4f0409e0deb109f379ef91&type=public&from=0&to=20&mealType=${foodType}`;



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiCall);
        const foodData = res.data.hits[random]?.recipe; // Safely access the recipe
        setRandomFood(foodData);
        setdataLoaded(true)
      } catch (error) {
        console.error("Error fetching random food:", error);
      }
    };

    fetchData();
  }, []);

  console.log(randomFood)

  const transferToRecipe = () => {
    window.open(randomFood?.url, '_blank')
  }

  return (
    <div className="flex justify-center h-full my-3 cursor-pointer hover:scale-[1.01] duration-200  mx-5" onClick={() => transferToRecipe()}>
      {/* Card Container */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden">
        {/* Image */}
        <img src={randomFood?.image} alt="Random Food" className="w-full h-full object-cover" />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white">
          <h2 className="text-lg title-text">Random pick: <span className="font-bold">{randomFood?.label}</span></h2>
          <p className="text-sm title-text">Source: {randomFood?.source}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomPick;
//import { useState } from "react"

const RandomPick = () => {
    const randomFood = 'https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg';

  return (
    <div className="flex justify-center h-full my-6 cursor-pointer hover:scale-[1.01] duration-200  mx-5">
        {/* Card Container */}
        <div className="relative w-full max-w-md bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden">
            {/* Image */}
            <img src={randomFood} alt="Random Food" className="w-full h-full object-cover" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white">
            <h2 className="text-lg font-bold">Random pick</h2>
            <p className="text-sm">These pancakes look fucking amazing, holy shit.</p>
            </div>
        </div>
    </div>
  );
};

export default RandomPick;
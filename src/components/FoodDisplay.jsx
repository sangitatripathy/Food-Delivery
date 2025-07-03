import React from "react";
import { useContext } from "react";
import { storeContext } from "../contexts/storeContext";
import Fooditem from "./Fooditem";

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(storeContext);
  return (
    <div className="flex flex-col items-center  justify-center w-[90vw] mx-auto mb-20">
      <h2 className="font-bold text-2xl">Top dishes near you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {food_list.map((item, index) => {
          if(category ==="all"||item.category === category){
            return (
            <Fooditem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
            />
          );
          }          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

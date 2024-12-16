import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryWrapper from "../category/CategoryWrapper";
import Card from "../../components/Card";

const Recipes = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getLatesItems = async () => {
      const response = await axios.get("http://localhost:5000/api/all-items");
      setItems(response.data);
    };
    getLatesItems();
  }, []);

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed text-center">
        All Recipes
      </h1>
      <div className="mt-5">
        <CategoryWrapper></CategoryWrapper>
      </div>

      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {
            items.map((item)=>(
                <Card key={item._id} item={item}></Card>
            ))
        }
      </ul>
    </div>
  );
};

export default Recipes;

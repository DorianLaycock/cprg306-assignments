"use client";

import Link from "next/link";
import {useState, useEffect} from "react";
import Itemlist from "./itemlist.js";
import Itemform from "./itemform.js";
import Item from "./item.js";

const itemsData = [
  {name:"Wine", quantity:4, category:"produce"},
  {name:"Spaghetti", quantity:7, category:"produce"},
  {name:"Mozarella", quantity:3, category:"produce"},
];

async function fetchRecipe(){
  try {
    response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipe}");
    const data = await response.json();
    return data.message;
  } catch (error){
    console.error(error);
  }
}

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [recipe, setRecipe] = useState([]);

  async function loadRecipes(){
    const recipes = await fetchRecipe();
    setRecipe(recipes);
  }

  useEffect(() => {
    loadRecipes();
  }, []);

  function handleSubmit(item){
    setItems([...items, item]);
  }

  function handleDelete(name){
    setItems(items.filter((item) => item.name !== name));
  } 

  function handleSearch(name){
    //What to put here? 
  }

  return (
  <main>
    <div className="flex flex-col justify-center items-center w-screen">
      <h1 className="text-4xl">Week 7</h1>
      <Link class = "block text-red-600 pb-2" href="/">• Homepage</Link>
    </div>
    <div className="flex flex-row border border-white">
      <div className="flex basis-1/3 w-150">
        <Itemform onSubmit ={(item) => handleSubmit(item)} />
      </div>
      <div className="flex basis-1/3 justify-center border border-white"> 
      <p>
        Placeholder for recipe
      </p>
        {/* <select name = "recipes">
          {Object.keys(recipes).map((recipe) => (
            <option key={recipe}>{recipe}</option>
            ))}
        </select> */}
      </div>
    </div>
    <div>
      <Itemlist items ={items} onDelete = {handleDelete} />
    </div>
  </main>
  );
}

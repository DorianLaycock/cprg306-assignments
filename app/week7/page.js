"use client";

import {useState, useEffect} from "react";
import Itemlist from "./itemlist.js";
import Itemform from "./itemform.js";
import Item from "./item.js";

const itemsData = [
  {name:"Wine", quantity:4, category:"produce"},
  {name:"Spaghetti", quantity:7, category:"produce"},
  {name:"Mozarella", quantity:3, category:"produce"},
];

export default function Page() {

  const [items, setItems] = useState(itemsData);

  function handleSubmit(item){
    setItems([...items, item]);
  }

  function handleDelete(name){
    setItems(items.filter((item) => item.name !== name));
  }

  return (
  <main>
    <div className="flex flex-row border border-white">
      <div className="flex basis-1/3 w-150">
        <Itemform onSubmit ={(item) => handleSubmit(item)} />
      </div>
      <div className="flex basis-1/3 justify-center border border-white">
        Meal Ideas
      </div>
    </div>
    <div>
      <Itemlist items ={items} onDelete = {handleDelete} />
    </div>
  </main>
  );
}

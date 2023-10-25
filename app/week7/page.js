"use client";

import {useState} from "react";
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

  function handleSubmit(item) {
    setItems([...items, item]);
  }

  function handleDelete(name){
    setItems(items.filter((item) => item.name !== name));
  }

  return (
  <main class="flex justify-center items-center w-screen">
    <div class="text-left">
      <Itemform onSubmit ={(item) => handleSubmit(item)} />
      <Itemlist items ={items} onDelete = {handleDelete} />
    </div>
  </main>
  );
}

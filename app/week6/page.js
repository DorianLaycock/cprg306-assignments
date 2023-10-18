"use client";

import {useState} from "react";
import Doglist from "./doglist.js";
import Dogform from "./dogform.js";
import Dog from "./dog.js";

const dogsData = [
  {name:"Riley", age: 8},
  {name:"Zoe", age: 6},
  {name:"Piper", age: 1},
];

export default function Page() {

  const [dogs, setDogs] = useState(dogsData);

  function handleSubmit(dog) {
    alert(`Adding ${dog.name} who is ${dog.age} years old`);
    setDogs([...dogs, dog]);
  }

  function handleDelete(name){
    alert(`Deleting ${name}`);
    setDogs(dogs.filter((dog) => dog.name !== name));
  }

  return (
  <main>
    <DogForm onSubmit ={(dog) => handleSubmit(dog)} />
    <DogList dogs ={dogs} onDelete = {handleDelete} />
  </main>
  );
}

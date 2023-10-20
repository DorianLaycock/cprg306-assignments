"use client";

import {useState, useEffect} from "react"; //research this more.

async function fetchRandomDog(){
    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error(error);
    }
}

async function fetchDogBreeds(){
    try{
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        return data.message;
    } catch (error){
        console.error(error);
    }
}

export default function Page() {
    const [dog, setDog] = useState("");
    const [breeds, setBreeds] = useState([]);

    async function loadRandomDog() {
        const randomDog = await fetchRandomDog();
        setDog(randomDog);
    }

    async function loadDogBreeds(){
        const breeds = await fetchDogBreeds();
        setBreeds(breeds);
    }

    useEffect(() => {
        loadRandomDog()
        loadDogBreeds();
    }, []);

    return (
        <main>
            <h1>Dogs!</h1>
            <div>
                <select name = "breeds">
                    {Object.keys(breeds).map((breed) => (
                        <option key={breed}>{breed}</option>
                    ))}
                </select>
            </div>
            <div>
                <img src={dog}/>
            </div>
        </main>
    )
}

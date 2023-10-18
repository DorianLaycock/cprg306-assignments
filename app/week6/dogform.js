"use client";

import {useState} from "react";

export default function Dogorm({onSubmit}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();

        const dog = {name, age};
        onSubmit(dog);

        setName("");
        setAge(0);
    }

    return (
        <div>
            <h1>Add a Doggo</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        className="textBlack"
                        value={name}
                        type="text"
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor = "age">Age</label>
                    <input
                        className="text-black"
                        value={age}
                        type="number"
                        id="age"
                        onChange={(event) => setAge(parseInt(event.target.value))}
                        />
                        <button>Add Doggo</button>
                </form>
        </div>
    );

}

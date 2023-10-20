"use client";

import {useState} from "react";

export default function Itemform({onSubmit}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("Produce");

    function handleSubmit(event) {
        event.preventDefault();

        const item = {name, quantity};
        onSubmit(item);

        setName("");
        setQuantity(0);
        setCategory("");
    }

    return (
        <div>
            <h1>Add an item</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        className="text-black"
                        value={name}
                        type="text"
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor = "quantity">quantity</label>
                    <input
                        className="text-black"
                        value={quantity}
                        type="number"
                        id="quantity"
                        onChange={(event) => setQuantity(parseInt(event.target.value))}
                        />
                    <input
                        className="text-black"
                        value={category}
                        type="text"
                        id="category"
                        onChange={(event) => setCategory(event.target.value)} //This may not work, we'll see.
                    />
                        <button class="text-green-600">Add Item</button>
                </form>
        </div>
    );

}

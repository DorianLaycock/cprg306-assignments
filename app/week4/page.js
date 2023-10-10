"use client";

import useState  from "react";
import Link from "next/link";
import NewItem from "./new-item";

const submitFunction = (event) => {
  event.preventDefault();
  // Handle form data
};

export default function Page() {
    return (
    <main>
        <h1 className="text-4xl">Welcome to week 4.</h1>
        <p>This is week 4. Behold.</p>
        <Link href="/">Homepage</Link>

        <form onSubmit="submitFunction(event)">
          <input type="text" name="name" placeholder="Name of the product" />
          <input type="text" name="quantity" placeholder="Quantity" />
          <input type="text" name="category" placeholder="Produce" />
          <button type="submit">Submit</button>
        </form>

        
    </main>
    );
}
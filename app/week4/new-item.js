import useState  from "react";

export default function NewItem ({name, quantity, category}){
    return (
        <ul className= "border border-red-700">
            <li className="font-bold">Item: {name}</li>
            <li>Quantity:{quantity}</li>
            <li>Category:{category}</li>
        </ul>
    )
}
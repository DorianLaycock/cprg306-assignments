import Item from "./item.js";

export default function Itemlist({items, onDelete}){
    function handleDelete(name) {
        onDelete(name);
    }

    return (
        <div>
            <h2>Groceries</h2>
                {items.map((item, index) => (
                    <div key={index}>
                        <Item name={item.name} quantity={item.quantity} category={item.category} onDelete={handleDelete} />
                    </div>
                ))}
        </div>
    )
}
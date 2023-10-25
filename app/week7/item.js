export default function Item({name, quantity, category, onDelete}) {
    return (
        <div class="border border-white">
            <h3>{name}.</h3>
            <p>Quantity: {quantity}.</p>
            <p>Category: {category}.</p>
            <p>
                <button class="text-red-600" onClick={() => onDelete(name)}>Delete</button>
            </p>
        </div>
    );
}
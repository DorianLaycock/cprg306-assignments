import Dog from "./dog.js";

export default function Doglist({dogs, onDelete}){
    function handleDelete(name) {
        onDelete(name);
    }

    return (
        <div>
            <h2>Dogs</h2>
                {dogs.map((dog, index) => (
                    <div key={index}>
                        <Dog name={dog.name} age={dog.age} onDelete={handleDelete} />
                    </div>
                ))}
        </div>
    )
}
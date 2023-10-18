export default function Dog({name, age}) {
    return (
        <div>
            <h3>{name}.</h3>
            <p>Age: {age}.</p>
            <p>
                <button onClick={() => onDelete(name)}>Delete</button>
            </p>
        </div>
    );
}
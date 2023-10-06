"use client";

export default function Page(){
    let dogList = [
        {
            id: 1,
            name: "Piper",
            description: "Ghost Heeler",
            imageURL: 
                "https://www.rocketdogrescue.org/wp-content/uploads/2022/10/Facetune_16-10-2022-10-50-44-e1665954207847.jpg"
        },
        {
            id: 2,
            name: "Riley",
            description: "Black Lab",
            imageURL:
                "https://www.rachaelkoppendrayer.com/wp-content/uploads/2022/04/Ace-Black-Lab-Puppy.jpg"
        },
        {
            id: 3,
            name: "Zoe",
            description: "Border Collie",
            imageURL: 
                "https://i.pinimg.com/736x/fc/a8/6b/fca86bab27b6ca17ceb4f1e9846a59f1.jpg"
        }
    ];

    let name = dogList[0].name; // Piper

    dogList.sort((a, b) => a.name.localeCompare(b.name)); // sort by name alphabetically

    //dogList = dogList.filter((dog) => dog.name !== "Piper");  remove Piper (we would never do this of course).

    console.log("here");

    function handleClick(id) {
        alert(`Dog id: ${id}`);
    }

    return (
        <main>
            <ul className="flex m-2 p-2 border">
                {dogList.map((dog) => (
                    <li key={dog.id} onClick={() => handleClick(dog.id)}>
                        <h2>{dog.name}</h2>
                        <p>{dog.description}</p>
                        <img src={dog.imageURL}></img>
                    </li>
                ))}
            </ul>
    </main>);
}
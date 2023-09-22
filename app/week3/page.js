import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
    <main>
        <h1>Welcome to week 3.</h1>
        <p>This is week 3. Behold.</p>
        <Link href="/">Homepage</Link>
        <ItemList />
    </main>
    );
}
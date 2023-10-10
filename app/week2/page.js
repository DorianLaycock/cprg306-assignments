import Link from "next/link";

export default function Page() {
    return (
    <main class="flex justify-center items-center w-screen">
        <div class ="text-center">
            <h1 className="text-4xl">Welcome to week 2.</h1>
            <p>This is week 2. Behold.</p>
            <div class="pt-5">
                <Link class = "block text-red-600" href="/">• Homepage</Link>
            </div>
        </div>
    </main>
    );
}
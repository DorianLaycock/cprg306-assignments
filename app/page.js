import Link from "next/link";

export default function Page() {
  return (
  <main>
    <h1 className="text-4xl">CPRG 306 - Web Development 2 - Assignments</h1>
    <p>Name: Dorian Laycock</p>
    <p>Course Section: CPRG 306 A</p>
    <Link href ="/week2">Week 2{"\n"}</Link>
    <Link href ="/week3">Week 3</Link>
  </main>
  );
}
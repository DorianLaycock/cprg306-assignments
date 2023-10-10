import Link from "next/link";

export default function Page() {
  return (
  <main class="flex justify-center items-center w-screen">
    <div class ="text-center">
      <h1 className="text-4xl">CPRG 306 - Web Development 2 - Assignments</h1>
      <p>Name: Dorian Laycock</p>
      <p>Course Section: CPRG 306 A</p>
      <div class="pt-5">
        <Link class = "block text-red-600" href ="/week2" >• Week 2</Link>
        <Link class = "block text-red-600" href ="/week3" >• Week 3</Link>
        <Link class = "block text-red-600" href ="/week4" >• Week 4</Link>
        <Link class = "block text-red-600" href ="/week5" >• Week 5</Link>
      </div>
    </div>
  </main>
  );
}
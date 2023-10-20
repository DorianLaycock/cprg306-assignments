import Link from "next/link";

export default function Page() {
  return (
  <main class="flex justify-center items-center w-screen">
    <div class ="text-center">
      <h1 className="text-4xl">CPRG 306 - Web Development 2 - Assignments</h1>
      <p>Name: Dorian Laycock</p>
      <p>Course Section: CPRG 306 A</p>
      <div class="pt-5">
        <Link class = "block" href ="/week2" >• Week 2</Link>
        <Link class = "block text-green-50" href ="/week3" >• Week 3</Link>
        <Link class = "block text-green-100" href ="/week4" >• Week 4</Link>
        <Link class = "block text-green-200" href ="/week5" >• Week 5</Link>
        <Link class = "block text-green-300" href ="/week6" >• Week 6</Link>
        <Link class = "block text-green-400" href ="/week7" >• Week 7</Link>
      </div>
    </div>
  </main>
  );
}


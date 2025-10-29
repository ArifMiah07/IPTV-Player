import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="border border-red-500  ">
      {/* header */}
      <header className="border-2 border-green-500">
        <nav>This is global nav bar</nav>
      </header>
      {/* main content */}
      <main className=" grid grid-cols-12 border-4 border-blue-500">
        {/* sidebar */}
        <section className="col-span-1 border border-purple-500 ">
          <div>side</div>
        </section>
        <section className="col-span-11">
          <p>this is main content</p>
          <Outlet />
        </section>
      </main>
    </section>
  );
}

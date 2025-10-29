import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="relative w-full h-full box-border  ">
      {/* header */}
      {/* glowing layer only positioned under header */}
      <div className="absolute top-0 left-0 w-full h-[60px] bg-[#00B3FF] blur-[300px] opacity-100 -z-10"></div>

      <header className="relative z-10 w-full  h-[60px]  lg:px-4 py-4">
        <nav className="fixed">This is global nav bar</nav>
      </header>
      {/* main content */}
      <main className=" relative w-full h-full min-h-[calc(200vh-60px)] grid grid-cols-12 ">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ff00ff_0%,#ff00ff_50%,#ffffff_100%)] blur-[300px] opacity-10 -z-10"></div>
        {/* sidebar */}
        <section className="col-span-1  ">
          <div>side</div>
        </section>
        {/* content */}
        <section className="col-span-11">
          <p>
            this is main content Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur est nulla quos doloribus ea?
            Doloremque magnam molestiae, officiis quis praesentium possimus
            debitis asperiores accusantium at sit deleniti provident quisquam,
            itaque velit pariatur neque nulla, perferendis fuga necessitatibus
            magni? Sunt animi facere possimus suscipit quia officiis quis
            temporibus voluptas consequatur vero?
          </p>
          <p>this is main content</p>
        </section>
      </main>
    </section>
  );
}

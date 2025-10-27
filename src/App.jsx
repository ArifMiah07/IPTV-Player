import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/Main";

function App() {
  return (
    <main className="">
      <MainLayout>
        <Outlet />
      </MainLayout>
    </main>
  );
}

export default App;

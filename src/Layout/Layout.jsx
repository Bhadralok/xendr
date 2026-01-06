import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function Layout() {
  return (
    <div className="px-10 pt-8 pb-17.5 flex flex-col w-full">
      <Header />

      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

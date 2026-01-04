import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="px-10 pt-8 pb-17.5">
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

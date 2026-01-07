import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout() {
  return (
    <div className="w-full pt-8 flex flex-col">
      <div className="px-10">
        <Header />
      </div>

      <main className="">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

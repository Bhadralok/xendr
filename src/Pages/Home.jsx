import Blob from "../assets/blob";
import doodle from "../assets/doodle.svg";
import Download from "../Components/Download.jsx";
import Footer from "../Components/Footer.jsx";
import PageNotFound from "./PageNotFound.jsx";

export default function Home() {
  return (
    <div
      className="h-screen"
      // style={{ backgroundImage: `url(${doodle})` }}
    >
      <Download />
    </div>
  );
}

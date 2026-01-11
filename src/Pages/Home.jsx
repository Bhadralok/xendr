import Blob from "../assets/blob";
import doodle from "../assets/doodle.svg";
import Rider from "./BecomeARider.jsx";
import HowItWorks from ".//HowItWorks.jsx";
import Start from "../Components/Start.jsx";
import Download from "../Components/Download.jsx";
import Footer from "../Components/Footer.jsx";
import PageNotFound from "./PageNotFound.jsx";


export default function Home() {
  return (

    <>


    <div
      className="h-fit"
      // style={{ backgroundImage: `url(${doodle})` }}
    >
      <Start/>
      <HowItWorks/>
      <Rider/>
      <Download />
    </div>
    </>
  );
}

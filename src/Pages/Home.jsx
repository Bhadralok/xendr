import Rider from "./BecomeARider.jsx";
import HowItWorks from ".//HowItWorks.jsx";
import Start from "../Components/Start.jsx";
import Download from "../Components/Download.jsx";

export default function Home() {
  return (
    <>
      <div className="h-fit">
        <Start />
        <div id="how-it-works">
          <HowItWorks />
        </div>

        <div id="rider">
          <Rider />
        </div>

        <div id="download">
          <Download />
        </div>
      </div>
    </>
  );
}

import Blob from "../assets/blob";
import doodle from "../assets/doodle.svg";
import Button from "../UI/Buttons";
import NavLinks from "../UI/NavLinks";
export default function Home() {
  return (
    <div className="h-screen">
      <div
        className="w-32 "
        // style={{ backgroundImage: `url(${doodle})` }}
      >
        <NavLinks isActive={false} />
      </div>
    </div>
  );
}

import homeActive from "../assets/home-orange.svg";
import homeInactive from "../assets/home.svg";
import logo from "../assets/favicon.svg";
import NavLinks from "../UI/NavLinks";
import thunderActive from "../assets/thunder-orange.svg";
import thunderInactive from "../assets/thunder.svg";
import helmetActive from "../assets/helmet-orange.svg";
import helmetInactive from "../assets/helmet.svg";
import download from "../assets/download.svg";

import Button from "../UI/Buttons";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="w-screen flex items-center gap-6">
        <div>
          <div className="border-r w-14 border-text-dark h-8 flex items-center">
            <img src={logo} alt="" className="w-6" />
          </div>
        </div>
        <div className="flex gap-8">
          <NavLink to="/" end>
            {({ isActive }) => (
              <NavLinks
                isActive={isActive}
                imageActive={homeActive}
                imageNotActive={homeInactive}
              >
                Home
              </NavLinks>
            )}
          </NavLink>

          <NavLink to="/how-it-works">
            {({ isActive }) => (
              <NavLinks
                isActive={isActive}
                imageActive={thunderActive}
                imageNotActive={thunderInactive}
              >
                How it works
              </NavLinks>
            )}
          </NavLink>

          <NavLink to="/become-a-rider">
            {({ isActive }) => (
              <NavLinks
                isActive={isActive}
                imageActive={helmetActive}
                imageNotActive={helmetInactive}
              >
                Become a Rider
              </NavLinks>
            )}
          </NavLink>
        </div>
      </div>
      <div className="w-55">
        <Button icon2={<img src={download} />} variant="download">
          Download the App
        </Button>
      </div>
    </div>
  );
}

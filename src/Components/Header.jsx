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
import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 80 && id !== "top") {
        setSearchParams({ id: "top" });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [id, setSearchParams]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSearchParams({ id: id });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="w-screen flex items-center gap-6">
        <div>
          <div className="border-r w-14 border-text-dark h-8 flex items-center">
            <img src={logo} alt="" className="w-6" />
          </div>
        </div>
        <div className="flex gap-8">
          <NavLinks
            isActive={searchParams.get("id") === "top"}
            imageActive={homeActive}
            imageNotActive={homeInactive}
            onClick={() => scrollTo("top")}
          >
            Home
          </NavLinks>

          <NavLinks
            isActive={searchParams.get("id") === "how-it-works"}
            imageActive={thunderActive}
            imageNotActive={thunderInactive}
            onClick={() => scrollTo("how-it-works")}
          >
            How it works
          </NavLinks>

          <NavLinks
            isActive={searchParams.get("id") === "rider"}
            imageActive={helmetActive}
            imageNotActive={helmetInactive}
            onClick={() => scrollTo("rider")}
          >
            Become a Rider
          </NavLinks>
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

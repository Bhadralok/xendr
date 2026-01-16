import Phones from "../assets/Phones.svg";
import Arrow from "../assets/arrow_circle_down.svg";

import DownloadButton from "../UI/DownloadButton";

export default function Download() {
  return (
    <div className="bg-[#FFF2DF] py-15.5 px-10 space-x-0 flex justify-between">
      <img src={Phones} alt="phones" />

      <div className="py-49 flex flex-col gap-9">
        <div className="flex  items-center gap-2.5">
          <img src={Arrow} alt="arrow" />
          <p className="text-text-light font-black ">Download the App</p>
        </div>

        <p className="text-[#190F00] text-[3.75rem] font-bold leading-[120%]">
          Start your <span className="text-[#E28400] font-black">Xend</span>{" "}
          <br /> experience now
        </p>

        <p className=" text-[#565656] font-medium">
          Get the app from the Appstore or Google Playstore to send packages
          easily <br /> and seamlessly
        </p>

        <div className="">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

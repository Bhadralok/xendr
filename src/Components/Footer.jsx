import Swift from "../assets/swiftxend.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import arrowOutward from "../assets/arrow_outward.svg";

export default function Footer() {
  return (
    <div className="bg-[#190F00] w-full text-white py-17.5 px-10 flex justify-between">
      <div className="flex flex-col gap-4">
        <img src={Swift} alt="swift logo" className="w-30" />
        <p className="text-[0.75rem] font-black">
          &copy;2025, All Rights Reserved.{" "}
        </p>
        <p className="font-medium text-[0.75rem] text-[#ABABAB]">
          Designed and Developed by SwiftXend, for You!
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[0.75rem] font-black">Our Social Media Platforms</p>
        <div className="flex justify-around gap-0">
          <img src={telegram} alt="telegram" />
          <img src={whatsapp} alt="whatsapp" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>

      <div>
        <div className="flex gap-3">
          <p className = "text-[0.75rem] font-black">Terms & Conditions</p>
          <img src={arrowOutward} alt="" />
        </div>

        <div className="flex justify-end gap-3">
          <p className = "text-[0.75rem] font-black">Privacy Policy</p>
          <img src={arrowOutward} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

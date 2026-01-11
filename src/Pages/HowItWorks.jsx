import flag from "../assets/flag.svg";
import flash from "../assets/Flash.svg";
import helmet from "../assets/helmet-orange.svg";
import location from "../assets/marker.svg";
import direction from "../assets/direction.svg";
import Start from "../Components/Start.jsx";

export default function HowItWorks() {
  return (
    <>


    <div className="h-231 pl-10  flex flex-col justify-center  gap-18 ">

      <div>
        <div className = "flex gap-2">
            <img src={flash} alt="flash"/>
            <p className = "font-black text-base pt-1 pb-2 text-text-light">How it works</p>
        </div>
        

        <h1 className = "font-black text-[3.75rem]">Swiftend in <span className = "text-primary-orange">4 superfast</span> steps...</h1>
        </div>

        <div className = "grid grid-cols-2 grid-rows-2 space-y-16 space-x-20">
            <div className = "flex flex-col gap-2 ">
              <img src={location} alt="" className = "w-8"/>
              <p className = "font-bold text-[1.5rem] text-primary-black">Enter Delivery & Package Details</p>
              <p className = "font-medium text-base text-text-light">You will need to enter you pickup location, delivery location and package details and then confirm your delivery request.</p>
            </div>

            <div className = "flex flex-col gap-1.75 ">
              <img src={helmet} alt="" className = "w-8"/>
              <p className = "font-bold text-[1.5rem] text-primary-black">Wait for a Rider</p>
              <p className = "font-medium text-base text-text-light">We will quickly search for your best match for the delivery request.</p>
            </div>

            <div className = "flex flex-col gap-2 ">
              <img src={direction} alt="" className = "w-8"/>
              <p className = "font-bold text-[1.5rem] text-primary-black">Start Xend Process</p>
              <p className = "font-medium text-base text-text-light">The rider comes to the pickup location, collects the package, starts the delivery and moves the delivery location.</p>
            </div>

            <div className = "flex flex-col gap-2.5 ">
              <img src={flag} alt="" className = "w-8"/>
              <p className = "font-bold text-[1.5rem] text-primary-black">Rider arrives at delivery location</p>
              <p className = "font-medium text-base text-text-light">The recipient gets a code to share with the rider to authenticate the delivery and <br/> complete the Xend process</p>
            </div>


        </div>

    </div>
    </>
  );
}

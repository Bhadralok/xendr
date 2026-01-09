import grayHelmet from "../assets/helmet.svg";
import orangeHelmet from "../assets/big-helmet.svg";
import arrowBack from "../assets/arrow_back.svg";

export default function BecomeARider() {
  return (
    <div className=" h-231 bg-primary-black text-white flex justify-around items-center">
        <div className="flex flex-col gap-9">
          <div className="flex gap-2">
            <img src={grayHelmet} alt="helmet" />
            <p className="text-text-dark font-black text-[1.125rem]">Become a Rider</p>
          </div>
 
          <p className="text-[3.75rem] font-bold">Our users have<br />deliveries<br />waiting...Let's <span className="font-black text-primary-orange">Xend</span> it!</p>

          <p className = "font-medium text-base text-text-dark">Earn on your own schedule while making deliveries simple and reliable for our users</p>

          <button className="p-6 w-fit bg-primary-orange rounded-lg font-black text-[0.875rem] flex gap-4">
            <p>Register with us</p>
            <img src={arrowBack} alt="" />
          </button>
        </div>

        <div className = "pt-30" >
          <img src={orangeHelmet} alt="" />
        </div>
    </div>
  );
}

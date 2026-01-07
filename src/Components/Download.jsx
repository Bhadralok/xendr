import Phones from "../assets/Phones.svg";
import Arrow from "../assets/arrow_circle_down.svg";
import Apple from "../assets/Applelogo.png";
import Google from "../assets/google.svg";

export default function Download(){
    return(
        <div className = "bg-[#FFF2DF] py-15.5 px-10 flex gap-27.25 " >
            <img src={Phones} alt="phones" />

            <div className = "py-49 flex flex-col gap-9">
                <div className="flex gap-[0.65rem]">
                    <img src={Arrow} alt="arrow" />
                    <p className="text-text-light font-black ">Download the App</p>
                </div>

                <p className="text-[#190F00] text-[3.75rem] font-bold leading-[120%]">Start your <span className = "text-[#E28400] font-black">Xend</span> <br /> experience now</p>

                <p className=" text-[#565656] text-[1rem] font-medium">Get the app from the Appstore or Google Playstore to send packages easily <br /> and seamlessly</p>

                <div className="flex gap-5">
                    <button className = "w-50.75 h-15 bg-black text-white rounded-lg">
                        <div className="flex gap-0 ">
                            <img src= {Apple} alt="Apple" className = "h-13.5 rounded-lg" />
                            <p  className="leading[100%]">Download on the <span className="text-[1.6rem] font-semibold">App Store</span></p>
                        </div>
                    </button>

                    <button className="w-50.75 h-15 pl-1 bg-black text-white rounded-lg flex gap-0">
                        <div> 
                            <img src={Google} alt="Google Play" className="pt-1"/>
                        </div>

                        <div className="flex flex-col space-y-0">
                             <p className = "text-left text-[0.75rem]">GET IT ON</p>
                             <p className="text-[1.6rem] font-semi">Google Play</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
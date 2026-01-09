import DownloadButton from "../UI/DownloadButton";
import doodle from "../assets/doodle.svg";
import icon from "../assets/favicon.svg";

export default function Start(){
    return(
        <div className = "grid grid-cols-2 justify-center items-center space-x-6 px-10 gap-0 h-231" style ={{backgroundImage: `url(${doodle})`}}>

            <div className = "flex flex-col gap-17.5">
                <div className = "flex flex-col gap-12.5">
                    <p className = "text-[3.75rem] font-bold">Have something to deliver...Just <span className ="font-black text-primary-orange">Xend</span> it!</p>
                    <p>From small packages to heavier ones, Swiftend makes sending and tracking deliveries<br /> simple, reliable, and stress free.</p>
                </div>

                <div className = "flex flex-col gap-6">
                    <p>Get the app from the Appstore or the Google Playstore</p>
                    <DownloadButton />
                </div>
            </div>

            <div>
                <img src={icon} alt="favicon" className = "w-157 h-150"/>
            </div>

        </div>
    );
}
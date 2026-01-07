import Apple from "../assets/Applelogo.png";
import Google from "../assets/google.svg";
export default function DownloadButton() {
  return (
    <div className="flex gap-5">
      <button className="w-fit flex px-2 pr-5 justify-center h-fit py-2 bg-black text-white rounded-lg">
        <img src={Apple} alt="Apple" className="h-12.5" />
        <div className="flex items-center justify-center">
          <p className="leading-2 text-xs pt-2">
            Download on the <br />
            <span className="font-semibold text-xl">App Store</span>
          </p>
        </div>
      </button>

      <button className="w-fit flex px-2 pr-5 justify-center h-fit py-2 bg-black text-white rounded-lg">
        <div>
          <img src={Google} alt="Google Play" className="h-12.5" />
        </div>

        <div className="flex items-center justify-center">
          <p className="leading-2 text-left text-xs pt-2">
            GET IT ON <br />
            <span className="font-semibold text-xl">Google Play</span>
          </p>
        </div>
      </button>
    </div>
  );
}

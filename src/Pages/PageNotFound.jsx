import Blob from "../assets/blob";
import logo from "../assets/favicon.svg";
export default function PageNotFound() {
  return (
    <div className="h-screen  flex flex-col items-center justify-center">
      <div className="flex flex-col  h-69 items-center gap-1">
        <div className="relative ">
          <Blob />
          <div className="absolute top-[40%] left-[35%]">
            <img src={logo} alt="" className="h-20" />
          </div>
        </div>
      </div>
      <h1 className="font-bold text-4xl text-primary-black">
        <span className="text-primary-orange">Oops... </span>Page Not Found
      </h1>
      <div>The page you are looking for does not exist or has been moved.</div>
    </div>
  );
}

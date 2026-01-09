// import { HashLoader } from "react-spinners";
export default function Button({
  icon1,
  icon2,
  children,
  active = true,
  type = "button",
  variant = "login",
  isLoading,
  isLoadingText = "Logging in...",
  onClick,
  ...props
}) {
  const styleChange = () => {
    if (isLoading) {
      return "bg-placeholder-gray text-white cursor-not-allowed";
    } else {
      return " bg-primary-black font-black cursor-pointer text-sm text-white rounded-2xl hover:bg-primary-black/93 ";
    }
  };
  const styles = {
    download: styleChange(),
    register:
      "bg-primary-orange text-white rounded-2xl text-sm font-black hover:bg-primary-orange/93 cursor-pointer",
    outlined:
      "border-2 border-primary-red cursor-pointer text-primary-red hover:bg-primary-red hover:text-white",
  };

  const baseClasses =
    "flex items-center justify-center gap-3 py-4 w-full font-bold";

  const activeClasses = styles[variant] || styles.login;
  const inactiveClasses = "bg-placeholder-gray text-white cursor-not-allowed";

  return (
    <button
      type={type}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      disabled={!active}
      {...props}
      onClick={onClick}
    >
      {isLoading && <HashLoader />}
      {icon2 && <span>{icon2}</span>}
      {isLoading ? `${isLoadingText}` : children}
      {icon1 && <span>{icon1}</span>}
    </button>
  );
}

// export default function Buttons({ children, isDesktop = true, icon1, icon2 }) {
//   return (
//     <button className={isDesktop ? "text-sm" : "text-xs"}>
//       {icon1 && (
//         <span>
//           <img src={icon1} alt="" />
//         </span>
//       )}
//       {children}
//       {icon2 && (
//         <span>
//           <img src={icon2} alt="" />
//         </span>
//       )}
//     </button>
//   );
// }

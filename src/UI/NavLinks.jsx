export default function NavLinks({
  isActive,
  imageNotActive,
  imageActive,
  onClick,
  children,
}) {
  return (
    <div
      className="flex items-center gap-2 text-sm uppercase font-black"
      onClick={onClick}
    >
      <img
        src={`${isActive ? imageActive : imageNotActive}`}
        alt=""
        className=""
      />
      <p
        className={`${
          isActive ? "text-primary-orange" : "text-text-dark font-medium"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

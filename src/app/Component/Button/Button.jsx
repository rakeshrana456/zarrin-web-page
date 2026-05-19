export default function Button({
  children,
  className = "",
  variant = "primary",
}) {
  const baseStyles =
    "px-6 py-3 rounded-lg  transition-all duration-600 ease-in-out w-fit cursor-pointer";

  const variants = {
    primary: "bg-white text-black text-[16px] hover:bg-purple-500",
    secondary: "bg-[#7C4EE4] text-white hover:bg-purple-500",
    outline: "border border-white text-white hover:bg-white hover:text-[#7C4EE4]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
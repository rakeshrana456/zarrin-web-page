import { Raleway, Roboto } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Typography({
  children,
  variant = "paragraph",
  className = "",
}) {
  if (variant === "heading") {
    return (
      <h1
        className={`${raleway.className}  ${className}`}
      >
        {children}
      </h1>
    );
  }

  return (
    <p className={`${roboto.className} text-base text-[#150E06] ${className}`}>
      {children}
    </p>
  );
}
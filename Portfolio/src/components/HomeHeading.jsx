import { useState } from "react";
import { useSelector } from "react-redux";
import { useTypewriter } from "react-simple-typewriter";
import { getTheme } from "../redux/themeSlice";

// This component renders the main heading and a subheading with typewriter effects. The main heading displays a series of phrases using the useTypewriter hook, creating a typing animation effect. The subheading displays the phrase "Web developer"
// with a similar typing effect. The appearance of the heading depends on the theme selected by the user.
function HomeHeading() {
  const [typing, setTyping] = useState(false);
  const theme = useSelector(getTheme);

  // Typewriter effect for the main heading
  const [text] = useTypewriter({
    words: [
      "Hello world!",
      "I'm Lucas",
      "Based in Norway",
      "Passionate about coding and creativity!",
      "Turning ideas into digital reality.",
      "Bringing innovation to life, one line of code at a time.",
      "Crafting digital experiences that leave an impression.",
      "Building bridges between technology and imagination.",
      "Transforming pixels into purposeful solutions.",
    ],
    loop: 1,
    typeSpeed: 90,
    delaySpeed: 1500,
    onType: () => setTyping(true),
    onDelete: () => setTyping(false),
    onLoopDone: () => setTyping(false),
  });

  // Typewriter effect for the subheading
  const [h1] = useTypewriter({
    words: ["Web developer"],
    loop: 1,
    typeSpeed: 80,
    delaySpeed: 1000,
  });
  return (
    <article className="w-[500px] flex flex-col items-center justify-around gap-4">
      {theme === "dark" && <h1 className="name">{h1}</h1>}
      {theme === "light" && <h1 className="name_light">{h1}</h1>}

      <div className="min-h-[70px] flex flex-col items-center justify-center gap-2">
        <h2 className="capitalize subpixel-antialiased tracking-wide   txt__shadow ">
          {text}
        </h2>
        {typing && (
          <div className="container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}
      </div>
    </article>
  );
}

export default HomeHeading;

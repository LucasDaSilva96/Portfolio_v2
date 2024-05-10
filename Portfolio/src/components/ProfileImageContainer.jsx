import { useSpring, animated } from "@react-spring/web";

// This component uses the useSpring hook from @react-spring/web to animate the profile image and background image. The profileSpring and backgroundSpring
// variables define the animation properties for each image. The profile image moves from an initial position to a final position, while the background image
// moves from an initial position to another. The animated.img components render the images with the animated styles applied.
function ProfileImageContainer() {
  // Animation spring for the profile image
  const profileSpring = useSpring({
    from: { y: -1000 },
    to: { y: -52 },
  });

  // Animation spring for the background image
  const backgroundSpring = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
  });

  return (
    <article className="relative w-[375px] h-[375px] overflow-hidden">
      <animated.img
        alt="background"
        src="img/Vector.png"
        className="absolute "
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transformOrigin: "top bottom",
          opacity: "0.7",
          ...backgroundSpring,
        }}
      />
      <animated.img
        alt="profile"
        src="img/Profile.png"
        className="absolute z-10 shadow-sm"
        style={{
          scale: 0.6,
          transition: "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          ...profileSpring,
        }}
      />
    </article>
  );
}

export default ProfileImageContainer;

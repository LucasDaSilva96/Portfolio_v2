import { Container, Link } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSpring, animated } from "@react-spring/web";
import { easings } from "@react-spring/web";

function Contact() {
  // Animation spring configuration
  const animation = useSpring({
    from: { x: 1000 },
    to: { x: 0 },
    reset: true,
    config: {
      tension: 280,
      friction: 60,
      easing: easings.steps(10),
    },
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 0",
      }}
    >
      {/* Animated contact section */}
      <animated.div
        style={animation}
        className="flex flex-col gap-8 items-center justify-center"
      >
        <h1 className="text-3xl pb-8 font-semibold">Contact</h1>
        <article className="flex items-center gap-2">
          <ContactMailIcon />
          <p>dasilvajunior881@gmail.com</p>
          <Link href="mailto:dasilvajunior881@gmail.com" color="inherit">
            <span className="text-xl font-semibold italic text-[#2196f3]">
              Say Hi
            </span>
          </Link>
        </article>
        <article className="flex items-center gap-1">
          <LinkedInIcon />
          <Link
            href="https://www.linkedin.com/in/lucas-da-silva-9955911a0/"
            target="_blank"
            color="inherit"
            rel="noopener"
          >
            Lucas Da Silva
          </Link>
        </article>

        <article className="flex items-center gap-1">
          <GitHubIcon className=" hover:scale-110" />
          <Link
            href="https://github.com/LucasDaSilva96"
            target="_blank"
            color="inherit"
            rel="noopener"
          >
            LucasDaSilva96
          </Link>
        </article>
      </animated.div>
    </Container>
  );
}

export default Contact;

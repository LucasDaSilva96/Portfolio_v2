import { Container } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
import ProjectBox from "../components/ProjectBox";
import { projects } from "../data/projectsData";
import { useSpring, animated } from "@react-spring/web";
import { easings } from "@react-spring/web";

function Portfolio() {
  const animation = useSpring({
    from: { x: "200dvw" },
    to: { x: "0dvw" },
    reset: true,
    config: {
      tension: 280,
      friction: 60,
      easing: easings.steps(20),
    },
  });
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        maxHeight: "100dvh",
        position: "relative",
      }}
    >
      <animated.div
        style={animation}
        className="flex flex-col gap-4 items-center pb-16 overflow-y-auto shadow-xl rounded-md"
      >
        <ProjectBox projectObj={projects.game_hub} />
        <ProjectBox projectObj={projects.just_react} />
      </animated.div>
    </Container>
  );
}

export default Portfolio;

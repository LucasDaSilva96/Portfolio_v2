import { Container } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
import ProjectBox from "../components/ProjectBox";
import { useQueryClient } from "react-query";
import { easings, useSpring, animated } from "@react-spring/web";
function Portfolio() {
  const queryClient = useQueryClient();

  const projects = queryClient.getQueryData("projects");

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

  if (!projects)
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
        <h1 className="text-center text-2xl">
          Failed to fetch projects from the server. Please try again
        </h1>
      </Container>
    );

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
        {projects?.map((project, i) => (
          <ProjectBox projectObj={project} key={i} />
        ))}
      </animated.div>
    </Container>
  );
}

export default Portfolio;

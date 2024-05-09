import { Container } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
import ProjectBox from "../components/ProjectBox";
// import { projects } from "../data/projectsData";
import { useSpring, animated } from "@react-spring/web";
import { easings } from "@react-spring/web";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import { useState } from "react";

function Portfolio() {
  const { isLoading, data: projects } = useQuery(["projects"]);

  const [customLoader, setCustomLoader] = useState(true);

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

  setTimeout(() => {
    setCustomLoader(false);
  }, 2000);

  if (customLoader) return <Loader />;

  if (projects && !isLoading && !customLoader) {
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
          {projects.map((project, i) => (
            <ProjectBox projectObj={project} key={i} />
          ))}
        </animated.div>
      </Container>
    );
  }
}

export default Portfolio;

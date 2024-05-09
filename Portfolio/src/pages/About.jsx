import { Button, Container, Stack } from "@mui/material";
import SkillsBox from "../components/SkillsBox";
import { codingSkills, softSkills } from "../data/skillsData.js";
import { useSpring, animated } from "@react-spring/web";
import { easings } from "@react-spring/web";
import CurrentStack from "../components/CurrentStack";
import Certifications from "../components/Certifications.jsx";
import Summary from "../components/Summary.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getAboutTrackerIndex,
  setAboutTrackerIndex,
} from "../redux/aboutTrackerSlice.js";

function About() {
  const dispatch = useDispatch();
  const selectedIndexCategory = useSelector(getAboutTrackerIndex);

  const animation_forward = useSpring({
    from: { x: 1000 },
    to: { x: 0 },
    reset: true,
    config: {
      tension: 280,
      friction: 60,
      easing: easings.steps(10),
    },
  });

  const handleTracker = (node_index) => {
    dispatch(setAboutTrackerIndex(node_index));
  };

  return (
    <Container
      maxWidth="lg"
      style={{
        width: "100%",
        height: "100dvh",
        overflowY: "auto",
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        useFlexGap={true}
        sx={{
          flexWrap: "wrap",
        }}
      >
        <Button
          className=" shadow-xl backdrop-blur-md"
          variant={selectedIndexCategory === 0 ? "contained" : "outlined"}
          onClick={() => handleTracker(0)}
        >
          Summary
        </Button>
        <Button
          className=" shadow-xl backdrop-blur-md"
          variant={selectedIndexCategory === 1 ? "contained" : "outlined"}
          onClick={() => handleTracker(1)}
        >
          Current tech-stack
        </Button>

        <Button
          className=" shadow-xl backdrop-blur-md"
          variant={selectedIndexCategory === 2 ? "contained" : "outlined"}
          onClick={() => handleTracker(2)}
        >
          Coding skills
        </Button>
        <Button
          className=" shadow-xl backdrop-blur-md"
          variant={selectedIndexCategory === 3 ? "contained" : "outlined"}
          onClick={() => handleTracker(3)}
        >
          Soft skills
        </Button>
        <Button
          className=" shadow-xl backdrop-blur-md"
          variant={selectedIndexCategory === 4 ? "contained" : "outlined"}
          onClick={() => handleTracker(4)}
        >
          Certifications
        </Button>
      </Stack>

      {selectedIndexCategory === 0 && (
        <animated.div
          style={animation_forward}
          className="max-w-full h-full overflow-y-auto flex items-center justify-center gap-4 flex-wrap pt-2 pb-[90px]  rounded-lg"
        >
          <Summary />
        </animated.div>
      )}

      {selectedIndexCategory === 1 && (
        <animated.div
          style={animation_forward}
          className="max-w-full h-full overflow-y-auto flex items-center justify-center gap-4 flex-wrap pt-2 pb-[90px]  rounded-lg"
        >
          <CurrentStack />
        </animated.div>
      )}

      {selectedIndexCategory === 2 && (
        <animated.div
          style={animation_forward}
          className="max-w-full h-full overflow-y-auto flex items-center justify-center gap-4 flex-wrap pt-2 pb-[90px]  rounded-lg"
        >
          {codingSkills.map((codingSkill, i) => (
            <SkillsBox key={i} obj={codingSkill} type={"coding"} />
          ))}
        </animated.div>
      )}

      {selectedIndexCategory === 3 && (
        <animated.div
          style={animation_forward}
          className="max-w-full h-full overflow-y-auto flex items-center justify-center gap-4 flex-wrap pt-2 pb-[90px]  rounded-lg"
        >
          {softSkills.map((softSkill, i) => (
            <SkillsBox key={i} obj={softSkill} type={"soft"} />
          ))}
        </animated.div>
      )}

      {selectedIndexCategory === 4 && (
        <animated.div
          style={animation_forward}
          className="max-w-full h-full overflow-y-auto  pt-2 pb-[90px]  rounded-lg"
        >
          <Certifications />
        </animated.div>
      )}
    </Container>
  );
}

export default About;

import { Box } from "@mui/material";
import LazyImage from "./LazyImage";
// In this component, Summary, I adjusted the width and height of the article element to ensure consistency in sizing.
// The width and height are specified using [225px] and [700px] respectively.
function Summary() {
  return (
    <Box
      sx={{
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
        borderRadius: "10px",
        backdropFilter: "blur(24px)",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div className="w-[225px]">
        <LazyImage image={"/img/Profile.png"} />
      </div>

      <div className="max-w-[700px]  max-h-[355px] overflow-y-auto px-1">
        <p className="text-lg antialiased  tracking-wide leading-relaxed">
          As a dedicated web developer with over two years of hands-on
          experience, I'm passionate about crafting immersive digital
          experiences that seamlessly blend creativity and functionality. My
          journey began three years ago, and since then, I've been relentlessly
          pursuing excellence in the ever-evolving landscape of web development.
          I thrive on the challenge of transforming ideas into tangible
          solutions that not only meet but exceed user expectations. By
          leveraging my expertise in frontend and backend technologies, I play a
          key role in driving innovation and delivering impactful solutions that
          resonate with our audience. I believe that in today's digital age, the
          role of a web developer is more critical than ever, shaping the online
          presence of businesses and organizations, and I'm committed to making
          a meaningful contribution every step of the way.
        </p>
      </div>
    </Box>
  );
}

export default Summary;

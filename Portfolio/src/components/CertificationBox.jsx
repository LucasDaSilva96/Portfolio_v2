import LazyImage from "./LazyImage";
import { Box } from "@mui/material";

function CertificationBox({ certificationObj }) {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
      className="relative flex gap-4 flex-col rounded-md overflow-hidden shadow-lg h-[600px]"
    >
      {/* Render the certification photo */}
      <div className="w-[375px] h-[375px] ">
        <LazyImage image={certificationObj.photo} />
      </div>

      {/* Render certification details */}
      <div className="py-2 px-4 text-pretty flex flex-col gap-2 w-[375px] max-h-[290px]">
        <h1 className="text-center text-xl italic">{certificationObj.title}</h1>
        <p className="text-center text-lg underline">
          <span className="">Instructor: </span>
          {certificationObj.instructor}
        </p>
        <span className=" text-center text-lg underline">
          Organization: {certificationObj.organization}{" "}
        </span>

        {/* Render covered topics */}
        <ul className=" leading-loose max-h-[240px] overflow-y-auto">
          {certificationObj.covered.map((el, i) => (
            <li key={i}>{"• " + el.text}</li>
          ))}
        </ul>
      </div>
    </Box>
  );
}

export default CertificationBox;

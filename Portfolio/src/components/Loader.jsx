import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <div className="z-[55] fixed top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-md">
      <CircularProgress />
    </div>
  );
}

export default Loader;

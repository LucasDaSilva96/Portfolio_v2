import HomeHeading from "../components/HomeHeading";
import ProfileImageContainer from "../components/ProfileImageContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

function Home() {
  return (
    <section className="w-full h-[100dvh] flex items-center justify-center flex-wrap pb-6 ">
      {/* Home heading and profile image container */}
      <div className="flex items-center w-full  justify-center gap-10 flex-wrap">
        <HomeHeading />
        <ProfileImageContainer />
      </div>

      {/* GitHub and LinkedIn icons */}
      <div className="flex items-center gap-3">
        <Link
          href="https://github.com/LucasDaSilva96"
          target="_blank"
          color="inherit"
          rel="noopener"
        >
          <GitHubIcon fontSize="large" className=" hover:scale-110" />
        </Link>

        {/* LinkedIn icon */}
        <Link
          href="https://www.linkedin.com/in/lucas-da-silva-9955911a0/"
          target="_blank"
          color="inherit"
          rel="noopener"
        >
          <LinkedInIcon fontSize="large" className=" hover:scale-110" />
        </Link>
      </div>
    </section>
  );
}

export default Home;

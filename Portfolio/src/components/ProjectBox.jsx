import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button, Link, Stack } from "@mui/material";
import CurrentProjectLabel from "./CurrentProjectLabel";

// This component renders a project box with an image gallery, project information, and buttons for demo and code links. If the project is current,
// it displays a CurrentProjectLabel. The ReactImageGallery component renders the image gallery with the provided images. Project information, including title and
// description, is displayed in a separate aside element.
// Buttons for demo and code links are rendered using MUI Button components, wrapped in Link components to open links in new tabs.
function ProjectBox({ projectObj }) {
  return (
    <article className="py-2 flex gap-4 flex-wrap  px-2 rounded-md justify-center backdrop-blur-sm antialiased relative">
      {projectObj.current && <CurrentProjectLabel />}
      <div className=" min-w-[400px] max-w-[580px]">
        <ReactImageGallery
          loading="lazy"
          items={projectObj.images}
          lazyLoad={true}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          showBullets={true}
          showNav={false}
        />
      </div>
      <aside className="max-w-[400px] relative pb-8 overflow-y-auto text-center leading-relaxed">
        <h1 className="text-xl font-semibold line-clamp-3">
          {projectObj.title}
        </h1>
        <div className="max-h-[200px] pb-8 overflow-y-auto">
          <p className="tracking-wide ">{projectObj.description}</p>
        </div>
        <Stack
          direction="row"
          spacing={2}
          useFlexGap={true}
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {projectObj.demo && (
            <Link
              href={projectObj.demo}
              target="_blank"
              color="inherit"
              rel="noopener"
            >
              <Button variant="contained">Demo</Button>
            </Link>
          )}

          <Link
            href={projectObj.code}
            target="_blank"
            color="inherit"
            rel="noopener"
          >
            <Button variant="contained">Code</Button>
          </Link>
        </Stack>
      </aside>
    </article>
  );
}

export default ProjectBox;

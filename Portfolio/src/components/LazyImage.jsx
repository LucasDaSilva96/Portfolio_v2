import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LazyImage({ image }) {
  return (
    <LazyLoadImage
      alt="background"
      height="100%"
      src={image} // use normal <img> attributes as props
      width="100%"
      effect="blur"
    />
  );
}

export default LazyImage;

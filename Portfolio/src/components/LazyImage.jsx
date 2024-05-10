import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// This component utilizes the LazyLoadImage component from the react-lazy-load-image-component library to lazily load images with a blur effect. It accepts the image prop,
// which specifies the source URL of the image to be loaded. The image is displayed with a blur effect while it is being loaded.
function LazyImage({ image }) {
  return (
    // LazyLoadImage component for lazy loading images with blur effect
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

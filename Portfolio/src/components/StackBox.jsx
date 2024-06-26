import LazyImage from "./LazyImage";

// In this component, StackBox, I adjusted the width and height of the article element to ensure consistency in sizing. The width and height are specified using [250px].
function StackBox({ stackObj }) {
  return (
    <article className=" w-[250] h-[250] flex flex-col items-center justify-between flex-wrap rounded-md">
      <div className="relative max-w-[50px] backdrop-blur-md rounded-lg">
        <LazyImage image={stackObj.photo} />
      </div>
      <h2 className="text-sm subpixel-antialiased">{stackObj.title}</h2>
    </article>
  );
}

export default StackBox;

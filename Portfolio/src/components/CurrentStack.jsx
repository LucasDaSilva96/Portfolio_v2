import { currentStack } from "../data/skillsData";
import StackBox from "./StackBox";

// This component renders different categories of current technology stacks, such as FrontEnd, React, UX/UI, DevOps, and BackEnd.
// It maps through the respective arrays of stacks for each category from the currentStack data and renders a StackBox component for each stack within the category.
function CurrentStack() {
  return (
    <div className="w-full max-h-[100%] overflow-y-auto grid grid-flow-row auto-rows-max gap-4 justify-items-start">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl antialiased font-medium tracking-wide line-clamp-2">
          FrontEnd
        </h1>
        <div className="flex items-center gap-6 flex-wrap">
          {currentStack.frontEnd.map((stack, i) => (
            <StackBox stackObj={stack} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl antialiased font-medium tracking-wide line-clamp-2">
          React
        </h1>
        <div className="flex items-center gap-6 flex-wrap">
          {currentStack.react.map((stack, i) => (
            <StackBox stackObj={stack} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl antialiased font-medium tracking-wide line-clamp-2">
          UX / UI
        </h1>
        <div className="flex items-center gap-6 flex-wrap">
          {currentStack.styling.map((stack, i) => (
            <StackBox stackObj={stack} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl antialiased font-medium tracking-wide line-clamp-2">
          DevOps
        </h1>
        <div className="flex items-center gap-6 flex-wrap">
          {currentStack.devOps.map((stack, i) => (
            <StackBox stackObj={stack} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl antialiased font-medium tracking-wide line-clamp-2">
          BackEnd
        </h1>
        <div className="flex items-center gap-6 flex-wrap">
          {currentStack.backEnd.map((stack, i) => (
            <StackBox stackObj={stack} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentStack;

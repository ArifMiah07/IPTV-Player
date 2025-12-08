import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import BasicControls from "./BasicControls";
import BasicFilters from "./BasicFilters";
import { useState } from "react";

const Sidebar = ({
  currentPage,
  numbersOfPages,
  inputRange,
  setInputRange,
  onNext,
  onPrev,
  onGoto,
  channelsPerPage,
  channelsInput,
  setChannelsInput,
  handleChannelsPerPage,
}) => {
  // react states
  const [expandBasicControls, setExpandBasicControls] = useState(false);
  // use hooks

  // handler function
  const toggleBasicControlsExpand = () => {
    //
    setExpandBasicControls(!expandBasicControls);
  };
  return (
    <div className="lg:col-span-1 ">
      <div className="w-full border-b-2 border-red-50 ">
        <div className="  w-full h-full flex flex-row items-center justify-start gap-2 mb-4 ">
          <h3 className="text-lg font-bold ">Basic Controls</h3>
          <span onClick={toggleBasicControlsExpand} className="">
            {expandBasicControls ? (
              <MdOutlineExpandLess />
            ) : (
              <MdOutlineExpandMore />
            )}
          </span>
        </div>
        <div className={`mb-4  ${expandBasicControls ? "hidden" : "visible"}`}>
          <BasicControls
            currentPage={currentPage}
            numbersOfPages={numbersOfPages}
            inputRange={inputRange}
            setInputRange={setInputRange}
            onNext={onNext}
            onPrev={onPrev}
            onGoto={onGoto}
            channelsPerPage={channelsPerPage}
            channelsInput={channelsInput}
            setChannelsInput={setChannelsInput}
            handleChannelsPerPage={handleChannelsPerPage}
          />
        </div>
      </div>
      <div className="w-full mt-4">
        <BasicFilters />
      </div>
    </div>
  );
};

export default Sidebar;

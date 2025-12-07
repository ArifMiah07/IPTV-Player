import { useState } from "react";

const BasicControls = ({
  currentPage,
  numbersOfPages,
  inputRange,
  setInputRange,
  onNext,
  onPrev,
  onGoto,
}) => {
  // react states
  const [channelsPerPage, SetChannelsPerPage] = useState();
// handler function
  return (
    <div className="flex flex-col gap-4">
      {/* show current page */}
      <p className={`w-full text-center border border-red-400 `}>
        Current Page: {currentPage}
      </p>
      {/* next page btn */}
      <button
        onClick={onNext}
        disabled={currentPage >= numbersOfPages}
        className={` w-full border border-red-400 ${
          currentPage >= numbersOfPages ? "text-gray-400" : "text-green-400"
        } `}>
        Next Page
      </button>
      {/* previous page btn */}
      <button
        onClick={onPrev}
        disabled={currentPage <= 1}
        className={` w-full border border-red-400  ${
          currentPage <= 1 ? "text-gray-400 " : "text-green-400 "
        } `}>
        Previous Page
      </button>
      {/* handle go to a specific page with user input */}
      <div className="w-full border border-red-400 ">
        {/* form */}
        <form
          onSubmit={onGoto}
          className=" w-full flex flex-col gap-4 border border-red-400 ">
          {/* handle numbers of cnl's per page */}
          <div className="w-full flex flex-row border border-red-400 ">
            {/* take input */}
            <input
              className="outline-0 w-full text-center border border-red-400 "
              value={channelsPerPage}
              onChange={(e) => SetChannelsPerPage(e.target.value)}
              placeholder="Channels per page"
              type="text"
              min={1}
            />
            {/* go to btn */}
            <button
              type="submit"
              className="w-fit px-2 border border-red-400 bg-green-300  ">
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
    // <div className=" border border-pink-500 flex flex-row gap-3 p-2 w-full">
    //   {/* basic information and action */}
    // </div>
  );
};

export default BasicControls;

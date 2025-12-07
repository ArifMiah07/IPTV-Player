import { useState } from "react";
import { toast } from "sonner";

const BasicControls = ({
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

  // handler functions

  return (
    <div className="flex flex-col gap-4">
      {/* total pages */}
      <p className={`w-full text-center border border-red-400 `}>
        Total Pages: {numbersOfPages}
      </p>
      {/* show current page */}
      <p className={`w-full text-center border border-red-400 `}>
        Current Page: {currentPage}
      </p>
      {/* channels per page */}
      <p className={`w-full text-center border border-red-400 `}>
        Channels/page: {channelsPerPage}
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
          className=" w-full flex flex-col border border-red-400 ">
          <label htmlFor="goto_page">Go to a page</label>
          <div className="w-full flex flex-row border border-red-400 ">
            {/* take input */}
            <input
              className="outline-0 w-full text-center border border-red-400 "
              value={inputRange}
              onChange={(e) => setInputRange(e.target.value)}
              placeholder="Go to a page"
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
      {/* handle a specific numbers of channels per page with user input */}
      <div className="w-full border border-red-400 ">
        {/* form */}
        <form
          onSubmit={handleChannelsPerPage}
          className=" w-full flex flex-col border border-red-400 ">
          {/* handle numbers of cnl's per page */}
          <label htmlFor="goto_page">Channels per page</label>
          <div className="w-full flex flex-row border border-red-400 ">
            {/* take input */}
            <input
              className="outline-0 w-full text-center border border-red-400 "
              value={channelsInput}
              onChange={(e) => setChannelsInput(e.target.value)}
              placeholder="Chanls per page"
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

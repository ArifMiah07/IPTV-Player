import useFetchStreams from "../../hooks/useFetchStreams";
import { usePagination } from "../../hooks/usePagination";
import BasicControls from "./BasicControls";

const Sidebar = ({
  currentPage,
  numbersOfPages,
  inputRange,
  setInputRange,
  onNext,
  onPrev,
  onGoto,
}) => {
  // use hooks
  return (
    <div className="lg:col-span-1 border-2 border-green-400 p-4">
      <h3 className="text-lg font-bold mb-4">Basic Controls</h3>
      <div>
        <BasicControls
          currentPage={currentPage}
          numbersOfPages={numbersOfPages}
          inputRange={inputRange}
          setInputRange={setInputRange}
          onNext={onNext}
          onPrev={onPrev}
          onGoto={onGoto}
        />
      </div>
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      {/* Add your sidebar content here */}
      <p>side bar content</p>
    </div>
  );
};

export default Sidebar;

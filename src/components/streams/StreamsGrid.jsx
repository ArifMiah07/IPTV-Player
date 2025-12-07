import ReactPlayer from "react-player";

const StreamsGrid = ({ streams }) => {
  return (
    <div className=" w-full h-full col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center justify-items-center gap-4 p-4 border-4 border-teal-500">
      {streams?.map((stream_item, stream_index) => (
        <div
          className=" w-full h-full flex flex-col items-center justify-center border border-red-500"
          key={stream_index}>
          <div className="flex flex-col items-center justify-center border border-green-500  w-full h-full">
            <ReactPlayer
              // pip={true}
              controls={true}
              src={stream_item.url}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StreamsGrid;

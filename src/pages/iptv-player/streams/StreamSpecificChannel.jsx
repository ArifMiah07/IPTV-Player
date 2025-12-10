//

import { useLocation, useParams } from "react-router-dom";
import StreamSpecificChannelsDetails from "../../../components/streams/StreamSpecificChannelsDetails";

const StreamSpecificChannel = () => {
  // hooks
  const { channelIndex, channel } = useParams();
  const location = useLocation();
  const streamData = location.state?.streamData;
  // console.log(streamData);

  console.log(channelIndex, channel);
  return (
    <div>
      {/* <h1>stream a specific channel</h1> */}
      <h1 className="font-medium mb-4">
        streaming : {channelIndex}. {channel}
      </h1>
      <StreamSpecificChannelsDetails streamData={streamData} />
    </div>
  );
};

export default StreamSpecificChannel;

import { NavMenuButton } from "../buttons/CustomButtons";

export default function WatchLiveStreams(){
    return(
        <section className="flex flex-col w-full h-full ">
            {/* heading */}
            <h1  className="text-[#000000b3] text-[24px] font-bold  " >Watch Live Streams</h1>
            {/* content */}
            <div>
                {/*  */}
                <div>
                    <NavMenuButton label={"Lunch IPTV Now"} ></NavMenuButton>
                </div>
                {/*  */}
                <div>

                </div>
            </div>
        </section>
    )
}
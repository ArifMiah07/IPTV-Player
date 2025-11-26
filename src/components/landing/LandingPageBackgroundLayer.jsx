import LandingPageShapesLayer from "./LandingPageShapesLayer";

export default function LandingPageBackgroundLayer(){
    return(
        <section className="w-full h-full  overflow-hidden ">
            <div className="w-full  h-full overflow-visible ">
                <LandingPageShapesLayer />
            </div>
        </section>
    )
}
import LandingPageBackgroundLayer from "./LandingPageBackgroundLayer";

export default function LandingPageBase() {
  return (
    <section className="w-full h-full relative z-0">
      {/* radial gradient effect */}
      <div className="absolute filter blur-[300px] inset-0 z-1 bg-[radial-gradient(circle_at_center,#0400FF_0%,#EAEAFF_45%,#ffffff_100%)] opacity-10 pointer-events-none"></div>
      {/* layers */}
      <LandingPageBackgroundLayer />
    </section>
  );
}

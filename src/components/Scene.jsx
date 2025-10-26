import Spline from "@splinetool/react-spline";

export default function Scene({ sceneUrl = "https://prod.spline.design/6YVQn1mBP99ZTSdK/scene.splinecode" }) {
  return (
    <div className="w-full h-[420px] sm:h-[560px] rounded-2xl overflow-hidden border border-black/5 shadow bg-white">
      <Spline scene={sceneUrl} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

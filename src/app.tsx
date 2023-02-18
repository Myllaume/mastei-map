import { useState } from "preact/hooks";
import { Canvas } from "./canvas";
import { ViewBox } from "./types";
import { Camera } from "./camera";

export function App() {
  const [viewBox, setViewBox] = useState<ViewBox>();

  return (
    <Camera setViewBox={setViewBox} >
      <Canvas viewBox={viewBox} />
    </Camera>
  )
}

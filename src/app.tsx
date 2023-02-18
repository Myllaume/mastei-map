import { useState } from "preact/hooks";
import { Canvas } from "./canvas";
import { ViewBox } from "./types";
import { Zoom } from "./zoom";

export function App() {
  const [viewBox, setViewBox] = useState<ViewBox>();

  return (
    <Zoom setViewBox={setViewBox} >
      <Canvas viewBox={viewBox} />
    </Zoom>
  )
}

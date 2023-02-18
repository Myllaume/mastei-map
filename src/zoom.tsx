import { ComponentChild } from "preact";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import { zoom } from "d3-zoom";
import { select } from "d3-selection";
import { ViewBox } from "./types";
import styles from "./canvas.module.css";

interface ZoomProps {
    children: ComponentChild;
    setViewBox: (v: ViewBox) => void;
}

export function Zoom(props: ZoomProps) {
    const { children, setViewBox } = props;

    const zoomMax = 10, zoomMin = 1;

    const ref = useRef<SVGSVGElement>(null);

    useEffect(function computeViewBox() {
        if (!ref.current) return;
        const { width, height } = ref.current?.getBoundingClientRect();

        const zoomTarget = select(ref.current);

        if (!zoomTarget) return;

        const zoomEngine = zoom()
            .extent([[0, 0], [width, height]])
            .scaleExtent([zoomMin, zoomMax])
            .on('zoom', (e) => {
                const { x, y, k } = e.transform;
                setViewBox([-x, -y, width / k, height / k]);
            });

        zoomTarget.call(zoomEngine as any)
    }, [ref]);

    return (
        <svg ref={ref} class={styles.canvas}>
            {children}
        </svg>
    )
}
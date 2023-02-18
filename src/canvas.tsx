import styles from "./canvas.module.css";
import { Hexagone } from "./hexagone";
import { ViewBox } from "./types";

interface CanvasProps {
    viewBox?: ViewBox;
}

export function Canvas(props: CanvasProps) {
    const { viewBox } = props;

    const linesNb = 25;
    const hexagonePerLine = 30;

    const hexagones = [];

    let iLine = 0;
    while (iLine < linesNb) {
        let iHexagone = 0;
        while (iHexagone < hexagonePerLine) {
            if (iLine % 2 === 0) {
                hexagones.push(<Hexagone x={iHexagone * 100 + 50} y={iLine * 70} />);
            } else {
                hexagones.push(<Hexagone x={iHexagone * 100} y={iLine * 70} />);
            }
            iHexagone++;
        }
        iLine++;
        iHexagone = 0;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class={styles.canvas}
            viewBox={viewBox?.join(' ')}
        >
            {hexagones}
        </svg>
    )
}

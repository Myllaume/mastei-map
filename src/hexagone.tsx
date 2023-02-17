interface HexagoneProps {
    x: number;
    y: number;
}

export function Hexagone(props: HexagoneProps) {
    const {x, y} = props;

    const width = 100;
    const height = 100;
    const gap = 30;

    return (
        <g
            transform={`translate(${x}, ${y})`}
        >
            <path
                d={`M ${width/2} 0
                    L ${width} ${gap}
                    L ${width} ${height - gap}
                    L ${width/2} ${height}
                    L 0 ${height - gap}
                    L 0 ${gap}
                    z
                `}
                stroke='red'
                stroke-width={2}
            />
        </g>
    )
}

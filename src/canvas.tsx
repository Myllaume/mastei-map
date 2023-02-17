import { Hexagone } from "./hexagone";

export function Canvas() {
    let lineOne = [];
    let lineTwo = [];
    let lineThree = [];

    let i = 0;
    while (i < 5) {
        lineOne.push(<Hexagone x={i * 100} y={0} />)
        lineTwo.push(<Hexagone x={i * 100 + 50} y={70} />)
        lineThree.push(<Hexagone x={i * 100} y={140} />)
        i++;
    }

    return (
        <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
            {lineOne}
            {lineTwo}
            {lineThree}
        </svg>
    )
}

import { useDrop } from "react-dnd";
import HeartSvg from '../../../public/heart.svg';
import KeySvg from '../../../public/key.svg';
import CircleSvg from '../../../public/circle.svg';
import ItemContainer from "./ItemContainer";
import ItemManager from "./ItemManager";
import DraggableComp2 from "./DraggableComp2";
import styles from './HeartSvg.module.css'

interface MyProps {
    itemContainer: ItemContainer,
    itemManager: ItemManager, //TODO remove worse one - can do this or handleDrop props approach!
    // handleDrop: (id:number, itemContainer: ItemContainer) => void;
}

export default function ItemContainerComp({ itemContainer, itemManager }: MyProps) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "BaseItem",
        drop: (item: { id: number }, monitor: any) => {
            console.log("ya dropped onto me, hello!", item, monitor);
            // alert("ya dropped onto me, hello!");
            itemManager.placeItem(item.id, itemContainer);
            // handleDrop(item.id, itemContainer); //or could do this approach
        }
    }));
    return <svg ref={drop} style={{ width: "100px", height: "100px", border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
        <CircleSvg width="96" height="96" />
        {itemContainer.hearts.map(
            (item, idx) => <g transform={"translate(" + idx * 20 + ",5.0) rotate(10)"} key={item.id}>
                <HeartSvg width="48" height="48" fill="blue" stroke="purple" strokeWidth="5"
                    className={styles.heart} />
            </g>
        )}

        {itemContainer.keys.map((item, idx) => <g transform={"translate(" + idx * 20 + ",50.0) rotate(-10)"} key={item.id}>
            <DraggableComp2 item={item}>
                <KeySvg width="48" height="48" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="48" height="48">
                <circle r="5" fill="red">
                    <animateMotion
                        dur="10s"
                        repeatCount="indefinite"
                        path="M 181.803 136.764 C 174.776 115.684 146.411 97.086 126.019 114.341 C 111.758 126.409 103.516 153.536 101.955 171.219 C 99.162 202.881 107.231 233.645 125.472 259.817 C 133.495 271.328 144.065 279.065 151.176 290.444 C 152.839 293.103 156.645 294.964 156.645 298.1 C 152.952 297.553 155.07 316.431 154.458 318.882 C 153.201 323.911 150.623 328.2 148.989 333.102 C 146.717 339.917 152.693 341.482 154.458 346.774 C 156.394 352.582 152.817 362.435 152.817 368.651 C 152.817 373.482 152.109 387.085 155.552 390.527 C 157.959 392.933 171.714 392.01 174.693 392.167 C 190.954 393.023 217.745 391.722 231.023 382.87 C 239.977 376.901 222.832 358.202 217.898 353.884 C 215.24 351.558 210.791 349.519 209.694 345.681 C 204.814 328.599 215.374 308.199 213.523 291.537 C 212.627 283.472 205.946 277.261 205.319 269.114 C 203.841 249.894 209.663 235.672 218.992 219.346 C 222.781 212.714 232.572 201.569 237.039 214.971 C 243.12 233.214 228.637 254.198 221.179 269.114 C 219.388 272.697 209.037 287.598 213.523 292.084 C 214.689 293.251 226.049 292.084 227.195 292.084 C 244.571 292.084 272.074 286.013 281.885 269.661 C 292.645 251.728 276.079 226.307 284.073 206.768 C 288.529 195.873 303.637 181.113 300.48 168.484 C 298.195 159.344 282.432 150.228 282.432 141.686 C 282.432 135.992 292.842 133.835 296.651 131.295 C 298.807 129.858 304.499 128.205 302.667 126.373 C 291.018 114.724 261.392 114.438 246.337 109.419 C 244.234 108.718 230.98 104.366 229.93 101.216 C 228.535 97.033 237.06 95.345 241.415 94.653 C 258.058 92.005 275.093 91.521 291.729 87.543 C 294.43 86.897 296.786 85.237 299.386 84.262 C 301.605 83.429 308.068 82.587 305.948 81.527 C 300.665 78.885 285.032 78.62 281.338 78.246 C 255.017 75.575 217.985 77.742 193.834 65.667 C 191.746 64.623 197.032 61.832 199.303 61.292 C 203.508 60.291 240.169 55.124 231.023 45.978 C 224.791 39.746 213.611 38.758 205.319 38.322 C 198.515 37.964 179.88 35.322 174.693 40.509 C 170.354 44.848 175.243 66.046 176.334 71.136 C 181.049 93.14 181.801 114.303 181.803 136.764 Z" />
                </circle>
                </svg>
            </DraggableComp2>
        </g>
        )}
    </svg>
}
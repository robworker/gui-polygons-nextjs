import { useDrop } from "react-dnd";
import HeartSvg from '../../../public/heart.svg';
import KeySvg from '../../../public/key.svg';
import ItemContainer from "./ItemContainer";
import ItemManager from "./ItemManager";

interface MyProps {
    itemContainer: ItemContainer,
    itemManager: ItemManager, //TODO remove worse one - can do this or handleDrop props approach!
    // handleDrop: (id:number, itemContainer: ItemContainer) => void;
}

export default function ItemContainerComp({ itemContainer, itemManager/* , handleDrop */ } : MyProps) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "BaseItem",
        drop: (item : { id: number }, monitor: any) => {
            console.log("ya dropped onto me, hello!", item, monitor);
            // alert("ya dropped onto me, hello!");
            itemManager.placeItem(item.id, itemContainer);
            // handleDrop(item.id, itemContainer); //or could do this approach
        }
    }));
    return <div ref={drop} style={{width: "100px", height: "100px", border: "1px solid red", display: "flex", flexWrap: "wrap"}}>
        Container
        {itemContainer.hearts.map(
            item => <HeartSvg width="48" height="48" fill="blue" stroke="purple" strokeWidth="5" key={item.id}/>
        )}

        {itemContainer.keys.map(item => <KeySvg width="48" height="48" key={item.id}/>)}
    </div>
}
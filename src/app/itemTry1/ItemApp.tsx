import { useEffect, useMemo, useState } from "react";
import ItemManager from "./ItemManager";
import KeySvg from '../../../public/key.svg'
import HeartSvg from '../../../public/heart.svg'
import ItemContainerComp from "./ItemContainerComp";
import ItemContainerComp2 from "./ItemContainerComp2";
import DraggableComp from "./DraggableComp";
import ItemContainer from "./ItemContainer";

export default function ItemApp() {
    // const itemManager = useMemo(() => {
    //     const itemManager = new ItemManager();
    //     //testing
    //     itemManager.placeItem(1, itemManager.itemContainers[0]);
    //     return itemManager;
    // }, []);

    const [itemManager, setItemManager] = useState(new ItemManager());

    function debugSetItemManager(param: ItemManager) {
        setItemManager(param);
    }

    // Will call this state change method upon change emitted, internally
    useEffect(() => {
        console.log("set observe on item manager");
        itemManager.observe(debugSetItemManager);

        return () => {
            itemManager.unobserve(debugSetItemManager);
        };

    }, []);

    // function handleDrop(id: number, itemContainer: ItemContainer): void {
    //     itemManager.placeItem(id, itemContainer);
    // }

    return (
        <div style={{ display: "flex" }}>

            {itemManager.itemContainers.map((e, idx) =>
                <div className="itemContainer" data-key={"dc-" + idx} key={"dc-" + idx}>
                    <ItemContainerComp2 itemContainer={e} itemManager={itemManager} /* handleDrop={handleDrop} */ />
                </div>
            )}

            {itemManager.itemContainers.map((e, idx) =>
                <div className="itemContainer" data-key={"dc-" + idx} key={"dc-" + idx}>
                    <ItemContainerComp itemContainer={e} itemManager={itemManager} /* handleDrop={handleDrop} */ />
                </div>
            )}

            {itemManager.items.map(item => {
                return (
                    <DraggableComp item={item} key={item.id}>
                        {item.constructor.name === "Heart" ?
                            <HeartSvg width="48" height="48" fill="blue" stroke="purple" strokeWidth="5" /> :
                            <KeySvg width="48" height="48" />}
                    </DraggableComp>
                )
            })}

        </div>
    )
}
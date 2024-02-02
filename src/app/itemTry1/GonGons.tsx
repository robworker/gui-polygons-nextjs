import DraggableComponent from "./PocDraggableComponent";
import DraggableGon from "./DraggableGon";
import GonManager from "./GonManager";
import MyDropTarget from "./MyDropTarget";

// export interface GonGonsProps {
//   gonManager: GonManager
// }

export default function GonGons({gonManager} : {gonManager: GonManager}) {
  return (
    <div>
      {gonManager.unboundGons.map(e => <DraggableGon gon={e}/>)}
      {/* <DraggableComponent/> */}
      
      <MyDropTarget/>
    </div>
  )
} 
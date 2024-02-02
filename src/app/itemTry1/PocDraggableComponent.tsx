//@ts-nocheck
import Heart from '../../../public/heart.svg'

import { useDrag } from 'react-dnd';

export default function DraggableComponent(props) {
  const type = "heart";
  const id = "1";

    const [collected, drag, dragPreview] = useDrag(() => ({
      type,
      item: { id }
    }))
    return collected.isDragging ? (
      <div ref={dragPreview} />
    ) : (
      <div ref={drag} {...collected}>
        <Heart width="48" height="48" fill="blue" stroke="purple" strokeWidth="5"/>
      </div>
    )
  }

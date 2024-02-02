//@ts-nocheck
import Heart from '../../../public/heart.svg'

import { useDrag } from 'react-dnd';

export interface MyProps {
  children?: ReactNode
  item: BaseItem
}

export default function DraggableComp({children, item}: MyProps) {
  // const type = item.constructor.name;
  const type = "BaseItem";
  const id = item.id;

    const [collected, drag, dragPreview] = useDrag(() => ({
      type,
      item: { id }
    }))
    return collected.isDragging ? (
      <g ref={dragPreview} />
    ) : (
      <g ref={drag} {...collected}>
        {children}
      </g>
    )
  }

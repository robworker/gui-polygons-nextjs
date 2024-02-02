//@ts-nocheck
import Heart from '../../../public/heart.svg'
import Key from '../../../public/key.svg'

import { useDrag } from 'react-dnd';
import { Gon } from './GonManager';

export default function DraggableGon({gon}: {gon: Gon}) {
  const type = gon.type;
  const id = gon.id;

    const [collected, drag, dragPreview] = useDrag(() => ({
      type,
      item: { id }
    }))

    let displayElement;
    if(gon.type === "heart") {
      displayElement = <Heart width="48" height="48" fill="blue" stroke="purple" strokeWidth="5"/>
    } else if (gon.type === "key") {
      displayElement = <Key width="48" height="48"/>
    }

    return collected.isDragging ? (
      <div ref={dragPreview} />
    ) : (
      <div ref={drag} {...collected}>
        {displayElement}
      </div>
    )
  }

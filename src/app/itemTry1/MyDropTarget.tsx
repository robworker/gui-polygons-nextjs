//@ts-nocheck
import { useState } from 'react';
import { useDrop } from 'react-dnd';

export default function MyDropTarget(/* props */) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "heart",
        drop: (item, monitor) => {
            console.log("ya dropped onto me, hello!", item, monitor);
            alert("ya dropped onto me, hello!", item, monitor);
        }
    }));

    return <div ref={drop}>
        Drop Target caught:
        </div>
}
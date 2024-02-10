
// !!!!!!!!!! LEFT OFF https://react-svgr.com/docs/next/

"use client";

import { useMemo } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MouseBackEnd from 'react-dnd-mouse-backend';
import GonManager from './GonManager';
import ItemApp from './ItemApp';

export default function PolyTry1() {
  const gonManager = useMemo(() => new GonManager(), [])
  return (
    <div>
      {/* <DndProvider backend={HTML5Backend}> */}
      <DndProvider backend={MouseBackEnd}>
        <ItemApp/>
      </DndProvider>
    </div>
  )
} 
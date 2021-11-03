import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../resources/dot.svg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import usePan, { Point } from '../hooks/pan';

function GridCanvas() {
  const [position, startPan, isPanDisabled] = usePan();

  return (
    <S.CanvasWrapper>
      <TransformWrapper
        initialScale={2}
        panning={{ disabled: isPanDisabled }}
        minScale={1.5}
        centerZoomedOut={true}
        centerOnInit={true}
      >
        <TransformComponent>
          <S.Canvas>
            <S.Test position={position} onMouseDown={startPan}>
              {JSON.stringify(position)}
            </S.Test>
          </S.Canvas>
          ;
        </TransformComponent>
      </TransformWrapper>
    </S.CanvasWrapper>
  );
}
const S = {
  Canvas: styled.div`
    background-color: #f0f3fb;
    background-image: url(${background});
    background-repeat: repeat;
    background-size: auto;
    height: 1800px;
    width: 3200px;
    /* background-position: center; */
  `,
  CanvasWrapper: styled.div`
    /* overflow-x: hidden;
    overflow-y: hidden; */
  `,
  Test: styled.div<{ position: Point }>`
    height: 100px;
    width: 100px;
    color: white;
    background-color: black;
    transform: translate(
      ${(props) => props.position.x}px,
      ${(props) => props.position.y}px
    );
  `,
};
export default GridCanvas;

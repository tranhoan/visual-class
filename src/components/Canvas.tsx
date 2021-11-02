import React, { useRef } from 'react';
import styled from 'styled-components';
import usePan from '../hooks/pan';
import useZoom from '../hooks/zoom';
import background from '../resources/dot.svg';

const Canvas: React.FC = () => {
  const [position, startPan] = usePan();
  const zoomRef = useRef(null);
  const zoom = useZoom(zoomRef);
  return (
    <CanvasWrapper
      onMouseDown={(e) => startPan(e)}
      ref={zoomRef}
      zoom={zoom}
      position={position}
    >
      <span>{JSON.stringify(position)}</span>
      <span>{zoom}</span>
    </CanvasWrapper>
  );
};
export default Canvas;

const CanvasWrapper = styled.div<{
  zoom: number;
  position: { x: number; y: number };
}>`
  background-color: #f0f3fb;
  height: 100%;
  background-image: url(${background});
  background-repeat: repeat;
  background-size: auto;
  transform: scale(${(props) => props.zoom});
  background-position: ${(props) => props.position.x}px
    ${(props) => props.position.y}px;
`;

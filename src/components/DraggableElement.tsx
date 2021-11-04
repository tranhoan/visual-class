import React from 'react';
import styled from 'styled-components';
import usePan from '../hooks/pan';

const DraggableElement: React.FC = (props) => {
  const [position, startPan] = usePan();
  return (
    <S.DraggableWrapper
      onMouseDown={(e) => startPan(e)}
      style={{
        transform: `translate(${position.x}px,${position.y}px)`,
      }}
    >
      {props.children}
    </S.DraggableWrapper>
  );
};
const S = {
  DraggableWrapper: styled.div`
    height: 100px;
    width: 100px;
    color: white;
    background-color: black;
  `,
};
export default DraggableElement;

import React, { ReactElement } from 'react';
import styled from 'styled-components';
import usePan from '../hooks/pan';

type Props = {
  renderDraggable: () => ReactElement;
  id: number;
};
const DraggableElement: React.FC<Props> = ({ renderDraggable, id }) => {
  const [position, startPan, isPointerEventDisabled] = usePan(id);
  return (
    <S.DraggableWrapper
      draggable={true}
      onMouseDown={(e) => startPan(e)}
      style={{
        transform: `translate(${position.x}px,${position.y}px)`,
        pointerEvents: `${isPointerEventDisabled ? 'none' : 'auto'}`,
      }}
    >
      {renderDraggable()}
      {id}
    </S.DraggableWrapper>
  );
};
const S = {
  DraggableWrapper: styled.div`
    position: relative;
    width: min-content;
    z-index: 2;
    &:hover {
      cursor: pointer;
    }
  `,
};
export default DraggableElement;

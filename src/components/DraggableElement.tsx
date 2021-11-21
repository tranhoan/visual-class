import React, { ReactElement } from 'react';
import styled from 'styled-components';
import usePan from '../hooks/pan';

type Props = {
  renderDraggable: () => ReactElement;
  id?: number;
  className?: string;
  isResized?: boolean;
};
const DraggableElement: React.FC<Props> = ({ renderDraggable, id }) => {
  const [position, startPan, isPointerEventDisabled, isDragged] = usePan(id);
  return (
    <S.DraggableWrapper
      onMouseDown={(e) => startPan(e)}
      style={{
        transform: `translate(${position.x}px,${position.y}px)`,
        pointerEvents: `${isPointerEventDisabled ? 'none' : 'auto'}`,
        transition: `${isDragged ? 'none' : '500ms transform ease-in-out'}`,
      }}
    >
      {renderDraggable()}
    </S.DraggableWrapper>
  );
};
const S = {
  DraggableWrapper: styled.div`
    position: absolute;
    width: auto;
    z-index: 2;
    &:hover {
      cursor: pointer;
    }
  `,
};
export default DraggableElement;

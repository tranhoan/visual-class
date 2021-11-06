import React, { ReactElement } from 'react';
import styled from 'styled-components';
import usePan from '../hooks/pan';

type Props = {
  renderDraggable: () => ReactElement;
};
const DraggableElement: React.FC<Props> = ({ renderDraggable }) => {
  const [position, startPan] = usePan();
  return (
    <S.DraggableWrapper
      onMouseDown={(e) => startPan(e)}
      style={{
        transform: `translate(${position.x}px,${position.y}px)`,
      }}
    >
      {renderDraggable()}
    </S.DraggableWrapper>
  );
};
const S = {
  DraggableWrapper: styled.div`
    &:hover {
      cursor: pointer;
    }
  `,
};
export default DraggableElement;

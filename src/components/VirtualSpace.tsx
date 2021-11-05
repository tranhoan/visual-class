import styled from 'styled-components';
import { usePanStore } from '../hooks/pan';
import { TransformWrapper } from 'react-zoom-pan-pinch';
import PanWrapper from './PanWrapper';
import DraggableElement from './DraggableElement';
import Toolbar from './Toolbar';

const VirtualSpace: React.FC = () => {
  const isPanDisabled = usePanStore((state) => state.isPanDisabled);
  return (
    <S.SpaceWrapper>
      <TransformWrapper
        initialScale={2}
        panning={{ disabled: isPanDisabled }}
        minScale={1.5}
        centerZoomedOut={true}
        centerOnInit={true}
      >
        {({ state }) => (
          <PanWrapper zoomLevel={state.scale}>
            <DraggableElement />
          </PanWrapper>
        )}
      </TransformWrapper>
      <Toolbar></Toolbar>
    </S.SpaceWrapper>
  );
};
const S = {
  Test: styled.div`
    height: 100px;
    width: 100px;
    color: white;
    background-color: black;
  `,
  SpaceWrapper: styled.div``,
};
export default VirtualSpace;

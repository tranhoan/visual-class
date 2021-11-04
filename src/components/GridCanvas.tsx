import styled from 'styled-components';
import background from '../resources/dot.svg';
import { usePanStore } from '../hooks/pan';
import { TransformWrapper } from 'react-zoom-pan-pinch';
import PanWrapper from './PanWrapper';
import DraggableElement from './DraggableElement';

const GridCanvas: React.FC = () => {
  const panStore = usePanStore();
  return (
    <TransformWrapper
      initialScale={2}
      panning={{ disabled: panStore.isPanDisabled }}
      minScale={1.5}
      centerZoomedOut={true}
      centerOnInit={true}
    >
      {({ state }) => (
        <PanWrapper zoomLevel={state.scale}>
          <S.Canvas>
            <DraggableElement />
          </S.Canvas>
        </PanWrapper>
      )}
    </TransformWrapper>
  );
};
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
  Test: styled.div`
    height: 100px;
    width: 100px;
    color: white;
    background-color: black;
  `,
};
export default GridCanvas;

import styled from 'styled-components';
import { usePanStore } from '../hooks/pan';
import { TransformWrapper } from 'react-zoom-pan-pinch';
import PanWrapper from './PanWrapper';

const VirtualSpace: React.FC = ({ children }) => {
  const isPanDisabled = usePanStore((state) => state.isPanDisabled);
  return (
    <S.SpaceWrapper>
      <TransformWrapper
        initialScale={1}
        panning={{ disabled: isPanDisabled }}
        minScale={1}
        centerZoomedOut={true}
        centerOnInit={true}
      >
        {({ state }) => (
          <PanWrapper zoomLevel={state.scale}>{children}</PanWrapper>
        )}
      </TransformWrapper>
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

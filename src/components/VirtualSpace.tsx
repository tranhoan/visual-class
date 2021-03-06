import styled from 'styled-components';
import { usePanStore } from '../hooks/pan';
import { TransformWrapper } from 'react-zoom-pan-pinch';
import PanWrapper from './PanWrapper';

const VirtualSpace: React.FC = ({ children }) => {
  const isPanDisabled = usePanStore((state) => state.isPanDisabled);
  return (
    <S.SpaceWrapper>
      <TransformWrapper
        panning={{ disabled: isPanDisabled }}
        minScale={0.5}
        initialPositionX={-1100}
        initialPositionY={-300}
        wheel={{ step: 0.1 }}
      >
        {({ state }) => (
          <PanWrapper zoomLevel={state.scale}>{children}</PanWrapper>
        )}
      </TransformWrapper>
    </S.SpaceWrapper>
  );
};
const S = {
  SpaceWrapper: styled.div``,
};
export default VirtualSpace;

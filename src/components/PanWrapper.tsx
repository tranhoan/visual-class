import React, { useEffect } from 'react';
import { TransformComponent } from 'react-zoom-pan-pinch';
import { useZoomStore } from '../hooks/pan';
import background from '../resources/dot.svg';
import styled from 'styled-components';
import colors from '../style/colors';

type Props = {
  zoomLevel: number;
};
const PanWrapper: React.FC<Props> = ({ children, zoomLevel }) => {
  const setZoom = useZoomStore((state) => state.setZoomLevel);
  useEffect(() => {
    setZoom(zoomLevel);
  }, [zoomLevel, setZoom]);
  return (
    <TransformComponent>
      <S.Canvas>{children}</S.Canvas>
    </TransformComponent>
  );
};
const S = {
  Canvas: styled.div`
    background-color: ${colors.backgroundBlue};
    background-image: url(${background});
    background-repeat: repeat;
    background-size: auto;
    height: 1800px;
    width: 3200px;
  `,
};
export default PanWrapper;

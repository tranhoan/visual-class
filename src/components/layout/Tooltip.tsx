import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import colors from '../../style/colors';
import styled, { css } from 'styled-components';
import { position, useTooltip } from '../../hooks/tooltip';

const ToolTip: React.FC = () => {
  const portalRef = document.getElementById('portal') as HTMLElement;
  const { isTooltipVisible, top, left, content, position } = useTooltip();
  const tooltipRef = useRef<HTMLDivElement>(null);
  return createPortal(
    <Tooltip
      top={top}
      left={left}
      isVisible={isTooltipVisible}
      ref={tooltipRef}
      position={position}
    >
      <div className='content'>{content}</div>
    </Tooltip>,
    portalRef
  );
};
export default ToolTip;

const Tooltip = styled.div<{
  top?: number;
  left?: number;
  isVisible?: boolean;
  position?: position;
}>`
  position: absolute;
  --scale: 1;
  --tx: 0;
  --ty: 0;
  transform: scale(var(--scale, 0.8)) translate(var(--tx), var(--ty));
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;
  background: #282727;
  border-radius: 50px;
  transition: transform 0.1s ease-in-out;
  background: ${colors.primaryBlue};
  font-size: 1.4rem;
  font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  line-height: 1;
  z-index: 1;
  white-space: nowrap;
  padding: 0.8rem 1.6rem;
  color: white;

  .content {
    position: relative;
    width: 100%;
    height: 100%;
  }
  ${({ isVisible }) => {
    if (isVisible) {
      return visibleTooltipCSS;
    }
    return hiddenTooltipCSS;
  }}
  ${({ position }) => {
    if (position === 'top') {
      return topCss;
    } else if (position === 'right') {
      return rightCss;
    } else if (position === 'bottom') {
      return bottomCss;
    }
    return leftCss;
  }}
`;

const visibleTooltipCSS = css`
  visibility: visible;
  opacity: 1;
  --scale: 1;
`;

const hiddenTooltipCSS = css`
  visibility: hidden;
  opacity: 0;
  --scale: 0.8;
`;

const topCss = css`
  --tx: 0;
  --ty: calc(-100% - 8px);
`;

const rightCss = css`
  --tx: 8px;
  --ty: -50%;
`;

const bottomCss = css`
  --tx: 0;
  --ty: 8px;
`;

const leftCss = css`
  --tx: calc(-100% - 8px);
  --ty: -50%;
`;

import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BareButton } from '../../style/button';
import colors from '../../style/colors';
import elevations from '../../style/elevations';

type Props = {
  renderIcon: () => ReactElement;
};
const Button: React.FC<Props> = ({ renderIcon, children }) => {
  return (
    <StyledButton>
      <IconWrapper $isRendered={renderIcon !== null}>
        {renderIcon()}
      </IconWrapper>
      <LabelWrapper>{children}</LabelWrapper>
    </StyledButton>
  );
};

const StyledButton = styled(BareButton)`
  --shadow-color: 214 97% 23%;
  background-color: ${colors.primaryBlue};
  color: ${colors.additionalWhite};
  font-size: 1.4rem;
  border: none;
  box-shadow: ${elevations.small};
  position: relative;
  overflow: hidden;
  flex-basis: auto;

  &::after {
    content: '';
    border-radius: 50%;
    background-color: ${colors.additionalWhite};
    opacity: 0.1;
    width: 6em;
    height: 6em;
    transform: scale(0);
    position: absolute;
    transition: all 100ms ease-in-out;
  }

  &:hover {
    &::after {
      opacity: 0.25;
      transform: scale(1);
    }
  }
`;
const IconWrapper = styled.div<{ $isRendered: boolean }>`
  margin-right: 1.6rem;
  display: ${(props) => (props.$isRendered ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const LabelWrapper = styled.span``;
export default Button;

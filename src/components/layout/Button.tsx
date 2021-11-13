import React, { Fragment, ReactElement } from 'react';
import styled from 'styled-components';
import { BareButton } from '../../style/button';
import colors from '../../style/colors';
import elevations from '../../style/elevations';

type Props = {
  renderIcon?: () => ReactElement;
  onClick: () => void;
  className?: string;
};
const Button: React.FC<Props> = ({
  renderIcon,
  children,
  onClick,
  className,
}) => {
  const renderOptionalIcon =
    renderIcon === undefined ? () => <Fragment /> : renderIcon;
  return (
    <StyledButton onClick={onClick} className={className}>
      <IconWrapper $isRendered={renderIcon !== undefined}>
        {renderOptionalIcon()}
      </IconWrapper>
      <LabelWrapper>{children}</LabelWrapper>
    </StyledButton>
  );
};

const StyledButton = styled(BareButton)`
  --shadow-color: 0 0% 55%;
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

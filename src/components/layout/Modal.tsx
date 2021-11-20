import React from 'react';
import styled from 'styled-components';
import { HiX } from 'react-icons/hi';
import colors from '../../style/colors';

type Props = {
  isHidden: boolean;
  hide: () => void;
  hasOverlay: boolean;
  title: string;
  className?: string;
};
const Modal: React.FC<Props> = ({
  title,
  isHidden,
  hide,
  hasOverlay,
  className,
  children,
}) => {
  return (
    <S.Container $isModalHidden={isHidden}>
      <S.ModalWrapper className={className}>
        <S.ContentWrapper>
          <S.Header>
            <PrimaryTitle>{title}</PrimaryTitle>
            <IconContainer onClick={hide}>
              <CloseIcon size={20} />
            </IconContainer>
          </S.Header>
        </S.ContentWrapper>
        {children}
      </S.ModalWrapper>
      <S.Overlay $isRendered={hasOverlay} />
    </S.Container>
  );
};
const S = {
  Container: styled.div<{ $isModalHidden: boolean }>`
    visibility: ${(props) => (props.$isModalHidden ? 'hidden' : 'visible')};
    & .sidebar-modal {
      bottom: 3%;
      transform: translateX(
        ${(props) => (props.$isModalHidden ? '0%' : '95%')}
      );
      transition: transform 200ms ease-in-out;
    }
  `,
  ModalWrapper: styled.div`
    background-color: ${colors.additionalWhite};
    border-radius: 8px;
    position: fixed;
    padding: 2.4rem 2.4rem 2.4rem 3.2rem;
    z-index: 1;
    display: flex;
    flex-direction: column;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    z-index: 2;
    position: relative;

    .instruction-modal & {
      padding: 1.6rem 1.6rem;
    }
  `,
  Overlay: styled.div<{ $isRendered: boolean }>`
    position: fixed;
    background-color: ${colors.textGrey};
    opacity: 0.54;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    display: ${(props) => (props.$isRendered ? 'block' : 'none')};
  `,
  ContentWrapper: styled.div``,
};

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  transition: background-color 200ms ease-in-out;
  border-radius: 50%;
  &:hover {
    background-color: ${colors.backgroundBlue};
  }
`;

export const CloseIcon = styled(HiX)`
  color: ${colors.textGrey};
`;

export const PrimaryTitle = styled.h1`
  font-size: 1.8rem;
  padding: 0;
  font-weight: 400;
  color: ${colors.textBlack};
`;
export default Modal;

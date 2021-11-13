import React from 'react';
import styled from 'styled-components';
import { HiX } from 'react-icons/hi';
import colors from '../style/colors';

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
    <S.ModalWrapper $isModalHidden={isHidden} className={className}>
      <S.Header>
        <S.PrimaryTitle>{title}</S.PrimaryTitle>
        <S.IconContainer onClick={() => hide()}>
          <S.CloseIcon size={20} />
        </S.IconContainer>
      </S.Header>
      <S.Content>{children}</S.Content>
      <S.Overlay $isRendered={hasOverlay} />
    </S.ModalWrapper>
  );
};
const S = {
  ModalWrapper: styled.div<{ $isModalHidden: boolean }>`
    background-color: ${colors.additionalWhite};
    border-radius: 8px;
    position: fixed;
    padding: 2.4rem 2.4rem 2.4rem 3.2rem;
    bottom: 3%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    visibility: ${(props) => (props.$isModalHidden ? 'hidden' : 'visible')};

    &.sidebar-modal {
      bottom: 3%;
      transform: translateX(
        ${(props) => (props.$isModalHidden ? '0%' : '95%')}
      );
      transition: transform 200ms ease-in-out;
    }
  `,
  PrimaryTitle: styled.h1`
    font-size: 1.8rem;
    padding: 0;
    font-weight: 400;
    color: ${colors.textBlack};
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  `,
  Content: styled.div``,
  Overlay: styled.div<{ $isRendered: boolean }>``,
  CloseIcon: styled(HiX)`
    color: ${colors.textGrey};
  `,
  IconContainer: styled.div`
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
  `,
};
export default Modal;

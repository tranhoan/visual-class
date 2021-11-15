import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import DraggableElement from './DraggableElement';
import { CloseIcon, IconContainer } from './Modal';

type Props = {
  userSource: string;
  hide: () => void;
  description: string;
};

const SharedContent: React.FC<Props> = ({
  userSource,
  hide,
  children,
  description,
}) => {
  return (
    <DraggableElement
      renderDraggable={() => (
        <S.SharedWrapper>
          <S.SharedHeader>
            <S.Description>
              <S.SourceIcon>{userSource}</S.SourceIcon>

              {description}
            </S.Description>
            <IconContainer onClick={hide}>
              <CloseIcon size={16} />
            </IconContainer>
          </S.SharedHeader>
          <S.SharedBody>{children}</S.SharedBody>
        </S.SharedWrapper>
      )}
    ></DraggableElement>
  );
};
const S = {
  SharedWrapper: styled.div`
    border-radius: 8px;
    background-color: ${colors.additionalWhite};
    width: 47.3rem;
    height: 32.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  SharedHeader: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    padding: 0.8rem;
  `,
  SourceIcon: styled.div`
    border-radius: 50%;
    background-color: ${colors.additionalOrange};
    width: 3.3rem;
    height: 3.3rem;
    color: ${colors.additionalWhite};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.8rem;
  `,
  SharedBody: styled.div`
    border-radius: 8px;
    overflow: auto; ;
  `,
  Description: styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 400;
  `,
};
export default SharedContent;

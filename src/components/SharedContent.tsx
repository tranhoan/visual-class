import { Resizable } from 're-resizable';
import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import DraggableElement from './DraggableElement';
import { CloseIcon, IconContainer } from './Modal';
import { AiOutlineExpand } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
  const [isResized, setIsResized] = useState(false);
  return (
    <DraggableElement
      isResized={isResized}
      renderDraggable={() => (
        <Resizable
          onResizeStart={() => setIsResized(true)}
          onResizeStop={() => setIsResized(false)}
          defaultSize={{ width: 473, height: 322 }}
        >
          <S.SharedWrapper>
            <S.SharedHeader>
              <S.Description>
                <S.SourceIcon>{userSource}</S.SourceIcon>

                {description}
              </S.Description>
              <S.Action>
                <S.SharedIconContainer as={Link} to='/maxScreen'>
                  <AiOutlineExpand size={16} />
                </S.SharedIconContainer>
                <S.SharedIconContainer onClick={hide}>
                  <CloseIcon size={20} />
                </S.SharedIconContainer>
              </S.Action>
            </S.SharedHeader>
            <S.SharedBody>{children}</S.SharedBody>
          </S.SharedWrapper>
        </Resizable>
      )}
    ></DraggableElement>
  );
};
const S = {
  SharedWrapper: styled.div`
    border-radius: 8px;
    background-color: ${colors.additionalWhite};
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
  Action: styled.div`
    display: flex;
    align-items: center;
  `,
  SharedIconContainer: styled(IconContainer)`
    color: ${colors.textGrey};
    margin-right: 0.8rem;
  `,
};
export default SharedContent;

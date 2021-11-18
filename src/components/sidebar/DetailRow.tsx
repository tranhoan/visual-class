import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import colors from '../../style/colors';

type Props = {
  userName: string;
  userInitials: string;
  userColor: string;
};

const DetailRow: React.FC<Props> = ({
  userName,
  userInitials,
  userColor,
  children,
}) => {
  return (
    <S.Row>
      <S.Icon iconColor={userColor}>{userInitials}</S.Icon>
      <S.Name>{userName}</S.Name>
      <S.ActionCenter>{children}</S.ActionCenter>
    </S.Row>
  );
};
const S = {
  Row: styled.div`
    margin-bottom: 2.4rem;
    display: grid;
    align-items: center;
    grid-template-columns: var(--sidebar-column-width);
    grid-gap: 1.6rem;
  `,
  Icon: styled.div<{ iconColor: string }>`
    height: 3rem;
    width: 3rem;
    margin-right: 1.6rem;
    border-radius: 50%;
    color: white;
    background-color: ${(props) => props.iconColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 400;
  `,
  Name: styled.div`
    font-size: 1.4rem;
    font-weight: 300;
    color: ${colors.textBlack};
  `,
  ActionCenter: styled.div`
    display: flex;
    align-items: center;
  `,
};
export const RaisedHandButton = styled(Lottie)<{ $isHandRaised: boolean }>`
    height 3rem;
    width: auto;
    display: ${(props) => (props.$isHandRaised ? 'block' : 'none')};
  `;
export const IsSpeakingButton = styled(Lottie)<{ $isSpeaking: boolean }>`
    height 1.6rem;
    width: auto;
    display: ${(props) => (props.$isSpeaking ? 'block' : 'none')};
  `;
export default DetailRow;

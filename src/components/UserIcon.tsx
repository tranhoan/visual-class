import React from 'react';
import styled from 'styled-components';
import { useUserStore } from '../hooks/user';
import colors from '../style/colors';
import elevations from '../style/elevations';
import Video from './Video';

type Props = {
  initials: string;
  isMe: boolean;
  isInRoom: boolean;
};
const UserIcon: React.FC<Props> = ({ initials, isMe, isInRoom }) => {
  const isWebcamOn = useUserStore((state) => state.isWebcamOn);
  return (
    <S.UserIconWrapper
      style={{
        transform: `scale(${isInRoom ? '0.7' : '1'})`,
      }}
    >
      {isWebcamOn && isMe ? <Video /> : <span>{initials}</span>}
    </S.UserIconWrapper>
  );
};
const S = {
  UserIconWrapper: styled.div`
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.additionalRed};
    color: ${colors.additionalWhite};
    --shadow-color: 224deg 58% 81%;
    box-shadow: ${elevations.medium};
    font-size: 1.8rem;
    transition: transform 200ms ease-in;
  `,
};
export default UserIcon;

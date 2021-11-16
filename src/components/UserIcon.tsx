import React, { useRef } from 'react';
import styled from 'styled-components';
import { useTooltip } from '../hooks/tooltip';
import { useParticipantsStore, useUserStore } from '../hooks/user';
import colors from '../style/colors';
import elevations from '../style/elevations';
import Video from './Video';

type Props = {
  id: number;
};
const UserIcon: React.FC<Props> = ({ id }) => {
  const isWebcamOn = useUserStore((state) => state.isWebcamOn);
  const users = useParticipantsStore((state) => state.participants);
  const currentUser = users[id];
  const { onMouseEnter, onMouseLeave } = useTooltip<HTMLDivElement>();
  const iconRef = useRef(null);
  return (
    <S.UserIconWrapper
      ref={iconRef}
      onMouseEnter={() =>
        onMouseEnter(iconRef.current, 'bottom', currentUser.name)
      }
      onMouseLeave={() => onMouseLeave()}
      style={{
        transform: `scale(${currentUser.room !== null ? '0.7' : '1'})`,
      }}
    >
      {isWebcamOn && id === 8 ? (
        <Video />
      ) : currentUser.isWebcamTurnedOn ? (
        <S.UserWebcam autoPlay loop>
          <source src={currentUser.video} />
        </S.UserWebcam>
      ) : (
        <span>{currentUser.initials}</span>
      )}
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
  UserWebcam: styled.video`
    object-fit: cover;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `,
};
export default UserIcon;

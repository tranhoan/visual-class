import React, { useRef } from 'react';
import styled from 'styled-components';
import { useStreamWebcam, useUserStore } from '../hooks/user';
import elevations from '../style/elevations';

type Props = {
  initials: string;
};
const UserIcon: React.FC<Props> = ({ initials }) => {
  const isWebcamOn = useUserStore((state) => state.isWebcamOn);
  const videoRef = useRef(null);
  useStreamWebcam(videoRef);
  return (
    <S.UserIconWrapper>
      {console.log(isWebcamOn)}
      {isWebcamOn ? (
        <S.Video ref={videoRef}></S.Video>
      ) : (
        <span>{initials}</span>
      )}
    </S.UserIconWrapper>
  );
};
const S = {
  UserIconWrapper: styled.div`
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    --shadow-color: 224deg 58% 81%;
    box-shadow: ${elevations.medium};
  `,
  Video: styled.video`
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
  `,
};
export default UserIcon;

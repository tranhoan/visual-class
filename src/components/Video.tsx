import React, { useRef } from 'react';
import styled from 'styled-components';
import { useStreamWebcam } from '../hooks/user';

type Props = {
  className?: string;
};
const Video: React.FC<Props> = ({ className }) => {
  const videoRef = useRef(null);
  useStreamWebcam(videoRef);
  return <S.Video className={className} ref={videoRef}></S.Video>;
};
const S = {
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
export default Video;

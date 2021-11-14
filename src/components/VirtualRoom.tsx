import React from 'react';
import styled from 'styled-components';
import { Point } from '../hooks/pan';
import { useDetectRoomEnter } from '../hooks/virtualroom';
import colors from '../style/colors';

type Props = {
  roomName: string;
  position: Point;
  id: number;
};

const VirtualRoom: React.FC<Props> = ({ roomName, position, id }) => {
  const [detectEnter, detectLeave] = useDetectRoomEnter(id);
  return (
    <S.RoomWrapper
      onMouseUp={detectEnter}
      onMouseLeave={detectLeave}
      style={{
        transform: `translate(${position.x}px,${position.y}px)`,
      }}
    >
      <S.RoomHeader>{roomName}</S.RoomHeader>
    </S.RoomWrapper>
  );
};
const S = {
  RoomWrapper: styled.div`
    width: 24.3rem;
    height: 20rem;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.64) no-repeat padding-box;
    backdrop-filter: blur(2px);
    padding: 1.6rem 1.6rem;

    &:hover {
      background-color: ${colors.hoverPrimaryBlue};
      transition: background-color 200ms ease-in-out;
    }
  `,
  RoomHeader: styled.div`
    color: ${colors.textBlack};
    font-size: 1.2rem;
    font-weight: 400;
  `,
};
export default VirtualRoom;

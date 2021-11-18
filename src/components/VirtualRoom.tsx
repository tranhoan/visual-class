import React from 'react';
import styled, { css } from 'styled-components';
import { Point } from '../hooks/pan';
import { useDetectRoomEnter } from '../hooks/virtualroom';
import colors from '../style/colors';
import { HiUsers } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';

type Props = {
  roomName: string;
  position: Point;
  id: number;
  description?: string;
  link?: string;
};
const VirtualRoom: React.FC<Props> = ({
  roomName,
  position,
  id,
  description,
  link,
}) => {
  const [detectEnter, detectLeave, peopleInRoom] = useDetectRoomEnter(id);
  return (
    <S.RoomWrapper
      onMouseUp={() => detectEnter(link)}
      onMouseLeave={detectLeave}
      style={{
        transform: `translate(${position.x}px,${position.y}px)`,
      }}
    >
      <S.RoomHeader>
        {roomName}
        <S.UsersWrapper>
          <S.UsersIcon size={16} />
          {peopleInRoom}
        </S.UsersWrapper>
      </S.RoomHeader>
      <S.RoomFooter>
        {description && <S.UserIcon size={16} />}
        <S.Description>{description}</S.Description>
      </S.RoomFooter>
    </S.RoomWrapper>
  );
};

const roomPartStyle = css`
  color: ${colors.textBlack};
  font-size: 1.3rem;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const S = {
  RoomWrapper: styled.div`
    width: 24.3rem;
    height: 20rem;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.64) no-repeat padding-box;
    backdrop-filter: blur(2px);
    padding: 1.6rem 1.6rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      background-color: ${colors.hoverPrimaryBlue};
      transition: background-color 200ms ease-in-out;
    }
  `,

  Description: styled.div`
    align-self: flex-end;
  `,
  RoomHeader: styled.div`
    ${roomPartStyle}
  `,
  UsersWrapper: styled.div`
    margin-left: 1.6rem;
    display: flex;
    align-items: center;
  `,
  UsersIcon: styled(HiUsers)`
    margin-right: 0.8rem;
  `,

  UserIcon: styled(HiUser)`
    margin-right: 0.8rem;
  `,
  RoomFooter: styled.div`
    ${roomPartStyle}
    align-items: flex-end;
  `,
};
export default VirtualRoom;

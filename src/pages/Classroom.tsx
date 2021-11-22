import React, { Fragment, useEffect, useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import styled from 'styled-components';
import DraggableElement from '../components/DraggableElement';
import { PrimaryTitle } from '../components/layout/Modal';
import SharedContent from '../components/SharedContent';
import UserIcon from '../components/UserIcon';
import Video from '../components/Video';
import VirtualRoom from '../components/VirtualRoom';
import VirtualSpace from '../components/VirtualSpace';
import { classroomDeskData } from '../data/classroomDesk-data';
import { participants, UserType } from '../data/users-data';
import { useParticipantsStore, useUserStore } from '../hooks/user';
import { useRoomStore } from '../hooks/virtualroom';
import sharedScreen from '../resources/sharedScreen.png';
import colors from '../style/colors';
import elevations from '../style/elevations';
import { FloatingButton, FloatingUserIcon } from './MaxedScreenShare';
import { RoomDescription } from './School';

const getUsersInRoom = (
  id: number,
  participants: UserType[]
): Array<UserType> => {
  const usersInRoom: Array<UserType> = [];
  const myRoom = participants[id].room;
  if (myRoom === null) {
    return usersInRoom;
  }
  participants.forEach((user) => {
    if (user.id !== id && user.room === myRoom) {
      usersInRoom.push(user);
    }
  });
  return usersInRoom;
};
const Classroom: React.FC = () => {
  const [usersInRoom, setUsersInRoom] = useState<UserType[]>([]);
  const [classParticipants, setUsers] = useParticipantsStore((state) => [
    state.participants,
    state.setUsers,
  ]);
  const [rooms, setRooms] = useRoomStore((state) => [
    state.rooms,
    state.setRooms,
  ]);
  const [setSharing, isSharing, isWebcamOn, sidebarContent] = useUserStore(
    (state) => [
      state.setIsSharingScreen,
      state.isSharingScreen,
      state.isWebcamOn,
      state.sidebarContent,
    ]
  );

  useEffect(() => {
    setUsers(Object.values(participants));
  }, [setUsers]);

  useEffect(() => {
    setRooms(Object.values(classroomDeskData));
  }, [setRooms]);

  useEffect(() => {
    if (classParticipants.length === 0) {
      return;
    }
    console.log('tran');
    const inRoom = getUsersInRoom(8, classParticipants);
    setUsersInRoom(inRoom);
  }, [classParticipants]);

  return (
    <Fragment>
      <VirtualSpace>
        {classParticipants.map((user) => {
          return (
            <DraggableElement
              id={user.id}
              key={user.id}
              renderDraggable={() => <UserIcon id={user.id} />}
            />
          );
        })}
        {rooms.map((desk) => {
          return (
            <VirtualRoom
              key={desk.name}
              position={desk.position}
              roomName={desk.name}
              id={desk.id}
            />
          );
        })}
        {isSharing && (
          <SharedContent
            userSource={'HT'}
            hide={() => setSharing(false)}
            description={'Vy sdílíte'}
          >
            <S.ShareImage alt={'shared screen'} />
          </SharedContent>
        )}
      </VirtualSpace>
      <S.Cameras>
        <S.SpotlightWrapper $isWebcamOn={isWebcamOn}>
          <S.SpotlightCamera />
        </S.SpotlightWrapper>
        {usersInRoom.map((user) => {
          return (
            <FloatingUserIcon autoPlay loop key={`spotlightcamera${user.id}`}>
              <source src={user.video} />
            </FloatingUserIcon>
          );
        })}
      </S.Cameras>
      <RoomDescription $isSidebarOpen={sidebarContent !== null}>
        <FloatingButton
          className='floating-button'
          renderIcon={() => <HiOutlinePencil size={20} />}
        />
        <PrimaryTitle>Třída IV.BG</PrimaryTitle>
      </RoomDescription>
    </Fragment>
  );
};

const S = {
  ShareImage: styled.img.attrs({
    src: sharedScreen,
  })`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  `,
  SpotlightCamera: styled(Video)`
    width: 3rem;
    height: 8rem;
    border-radius: 4px;
  `,
  SpotlightWrapper: styled.div<{ $isWebcamOn: boolean }>`
    width: 31.7rem;
    height: 18.8rem;
    top: 8.8rem;
    right: 7.2rem;
    border-radius: 4px;
    opacity: ${(props) => (props.$isWebcamOn ? '1' : '0')};
    visibility: ${(props) => (props.$isWebcamOn ? 'visible' : 'hidden')};
    transform: scale(${(props) => (props.$isWebcamOn ? '1' : '0')});
    transition: all 200ms ease-in-out;
    --shadow-color: 224deg 58% 88%;
    box-shadow: ${elevations.medium};
    border: 1px solid ${colors.textGrey};
    margin-bottom: 3.6rem;
  `,
  Cameras: styled.div`
    position: fixed;
    top: 8.8rem;
    right: 7.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,

  ClassFloatingCamera: styled(FloatingUserIcon)`
    margin-bottom: 0;
    margin-top: 2.4rem;
  `,
};
export default Classroom;

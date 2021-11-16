import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import DraggableElement from '../components/DraggableElement';
import SharedContent from '../components/SharedContent';
import UserIcon from '../components/UserIcon';
import VirtualRoom from '../components/VirtualRoom';
import VirtualSpace from '../components/VirtualSpace';
import { classroomDeskData } from '../data/classroomDesk-data';
import { participants } from '../data/users-data';
import { useParticipantsStore, useUserStore } from '../hooks/user';
import { useRoomStore } from '../hooks/virtualroom';
import sharedScreen from '../resources/sharedScreen.png';

const Classroom: React.FC = () => {
  const setUsers = useParticipantsStore((state) => state.setUsers);
  const setRooms = useRoomStore((state) => state.setRooms);
  const classParticipants = useParticipantsStore((state) => state.participants);
  const rooms = useRoomStore((state) => state.rooms);
  const isSharing = useUserStore((state) => state.isSharingScreen);
  const setSharing = useUserStore((state) => state.setIsSharingScreen);

  useEffect(() => {
    setUsers(Object.values(participants));
  }, [setUsers]);

  useEffect(() => {
    setRooms(Object.values(classroomDeskData));
  }, [setRooms]);

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
};
export default Classroom;

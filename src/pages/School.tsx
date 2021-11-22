import React, { Fragment, useEffect, useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import styled from 'styled-components';
import DraggableElement from '../components/DraggableElement';
import InstructionModal from '../components/InstructionModal';
import { PrimaryTitle } from '../components/layout/Modal';
import Sidebar from '../components/sidebar/Sidebar';
import UserIcon from '../components/UserIcon';
import VirtualRoom from '../components/VirtualRoom';
import VirtualSpace from '../components/VirtualSpace';
import { roomsData } from '../data/rooms-data';
import { schoolUsers } from '../data/schoolUsers-data';
import { sidebarSchoolData } from '../data/sidebar-school-data';
import { useParticipantsStore, useUserStore } from '../hooks/user';
import { FloatingButton } from './MaxedScreenShare';

const School: React.FC = () => {
  const [schoolParticipants, setUsers] = useParticipantsStore((state) => [
    state.participants,
    state.setUsers,
  ]);
  const sidebarContent = useUserStore((state) => state.sidebarContent);
  const [instructionHidden, setInstructionHidden] = useState(false);
  useEffect(() => {
    setUsers(Object.values(schoolUsers));
  }, [setUsers]);

  return (
    <Fragment>
      <VirtualSpace>
        {Object.values(roomsData).map((room) => {
          return (
            <VirtualRoom
              key={room.name}
              position={room.position}
              roomName={room.name}
              id={room.id}
              link={room.link}
              description={room.currentTeacher}
            />
          );
        })}
        {schoolParticipants.map((user) => {
          return (
            <DraggableElement
              id={user.id}
              key={user.id}
              renderDraggable={() => <UserIcon id={user.id} />}
            />
          );
        })}
      </VirtualSpace>
      ;
      <Sidebar sidebarData={sidebarSchoolData} />
      <RoomDescription $isSidebarOpen={sidebarContent !== null}>
        <FloatingButton
          className='floating-button'
          renderIcon={() => <HiOutlinePencil size={20} />}
        />
        <PrimaryTitle>Gymnázium Jiřího Gutha-Jarkovského</PrimaryTitle>
      </RoomDescription>
      <InstructionModal
        hide={() => setInstructionHidden(true)}
        isHidden={instructionHidden}
      />
    </Fragment>
  );
};
export const RoomDescription = styled.div<{ $isSidebarOpen: boolean }>`
  position: fixed;
  top: 4rem;
  left: ${(props) => (props.$isSidebarOpen ? '26%' : '8%')};
  display: flex;
  align-items: center;
  transition: all 200ms ease-in-out;
`;

export default School;

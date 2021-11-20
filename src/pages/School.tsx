import React, { Fragment, useEffect, useState } from 'react';
import DraggableElement from '../components/DraggableElement';
import InstructionModal from '../components/InstructionModal';
import Sidebar from '../components/sidebar/Sidebar';
import UserIcon from '../components/UserIcon';
import VirtualRoom from '../components/VirtualRoom';
import VirtualSpace from '../components/VirtualSpace';
import { roomsData } from '../data/rooms-data';
import { schoolUsers } from '../data/schoolUsers-data';
import { sidebarSchoolData } from '../data/sidebar-school-data';
import { useParticipantsStore } from '../hooks/user';

const School: React.FC = () => {
  const [schoolParticipants, setUsers] = useParticipantsStore((state) => [
    state.participants,
    state.setUsers,
  ]);

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
      <InstructionModal
        hide={() => setInstructionHidden(true)}
        isHidden={instructionHidden}
      />
    </Fragment>
  );
};
export default School;

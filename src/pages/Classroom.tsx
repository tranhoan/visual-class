import React, { useEffect } from 'react';
import DraggableElement from '../components/DraggableElement';
import UserIcon from '../components/UserIcon';
import VirtualRoom from '../components/VirtualRoom';
import VirtualSpace from '../components/VirtualSpace';
import { classroomDeskData } from '../data/classroomDesk-data';
import { participants } from '../data/users-data';
import { useParticipantsStore } from '../hooks/user';

const Classroom: React.FC = () => {
  const setUsers = useParticipantsStore((state) => state.setUsers);
  const classParticipants = useParticipantsStore((state) => state.participants);
  useEffect(() => {
    setUsers(Object.values(participants));
  }, [setUsers]);
  return (
    <VirtualSpace>
      {classParticipants.map((user) => {
        return (
          <DraggableElement
            id={user.id}
            key={user.id}
            renderDraggable={() => (
              <UserIcon
                isMe={user.id === 8}
                initials={user.initials}
                isInRoom={user.room !== null}
              />
            )}
          />
        );
      })}
      {Object.values(classroomDeskData).map((desk) => {
        return (
          <VirtualRoom
            key={desk.name}
            position={desk.position}
            roomName={desk.name}
            id={desk.id}
          />
        );
      })}
    </VirtualSpace>
  );
};
export default Classroom;

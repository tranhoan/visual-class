import React, { useEffect } from 'react';
import DraggableElement from '../components/DraggableElement';
import UserIcon from '../components/UserIcon';
import VirtualSpace from '../components/VirtualSpace';
import { participants } from '../data/users-data';
import { useParticipantsStore } from '../hooks/user';

const Classroom: React.FC = () => {
  const setUsers = useParticipantsStore((state) => state.setUsers);
  useEffect(() => {
    setUsers(Object.values(participants));
  }, [setUsers]);
  return (
    <VirtualSpace>
      <DraggableElement renderDraggable={() => <UserIcon initials='HT' />} />
    </VirtualSpace>
  );
};
export default Classroom;

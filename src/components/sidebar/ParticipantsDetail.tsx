import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import styled from 'styled-components';
import { useParticipantsStore } from '../../hooks/user';
import Collapsbile from '../Collapsible';
import Button from '../layout/Button';
import GroupModal from './GroupModal';
import ParticipantRow from './ParticipantRow';

const ParticipantsDetail: React.FC = () => {
  const participants = useParticipantsStore((state) => state.participants);
  const [isGroupDialogHidden, setIsGroupDialogHidden] = useState(true);
  return (
    <SidebarWrapper>
      <MainContent>
        <Collapsbile heading={'Přítomní studenti'}>
          {participants.map((p) => {
            return p.isOnline && <ParticipantRow participant={p} key={p.id} />;
          })}
        </Collapsbile>
        <Collapsbile heading={'Nepřítomní studenti'}>
          {participants.map((p) => {
            return !p.isOnline && <ParticipantRow participant={p} key={p.id} />;
          })}
        </Collapsbile>
      </MainContent>
      <Button
        renderIcon={() => <HiPlus />}
        onClick={() => setIsGroupDialogHidden(false)}
      >
        Vytvořit skupiny
      </Button>
      <GroupModal
        isHidden={isGroupDialogHidden}
        hide={() => setIsGroupDialogHidden(true)}
      />
    </SidebarWrapper>
  );
};
const SidebarWrapper = styled.div`
  margin: 0 4rem 0 4.8rem;
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const MainContent = styled.div``;

export default ParticipantsDetail;

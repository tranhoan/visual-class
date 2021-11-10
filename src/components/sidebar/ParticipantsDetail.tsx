import React from 'react';
import styled from 'styled-components';
import { useParticipantsStore } from '../../hooks/user';
import Collapsbile from '../Collapsible';
import ParticipantRow from './ParticipantRow';

const ParticipantsDetail: React.FC = () => {
  const participants = useParticipantsStore((state) => state.participants);
  return (
    <S.SidebarWrapper>
      <Collapsbile heading={'Přítomní studenti'}>
        {participants.map((p) => {
          return <ParticipantRow participant={p} />;
        })}
      </Collapsbile>
    </S.SidebarWrapper>
  );
};
const S = {
  SidebarWrapper: styled.div`
    margin: 0 4rem 0 5.6rem;
    width: max-content;
  `,
};
export default ParticipantsDetail;

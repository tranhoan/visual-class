import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import styled from 'styled-components';
import { useParticipantsStore } from '../../hooks/user';
import Collapsbile from '../Collapsible';
import Button from '../layout/Button';
import GroupModal from './GroupModal';
import DetailRow, { IsSpeakingButton, RaisedHandButton } from './DetailRow';
import speakingAnimation from '../../resources/volume.json';
import handAnimation from '../../resources/hand.json';

const ParticipantsDetail: React.FC = () => {
  const participants = useParticipantsStore((state) => state.participants);
  const [isGroupDialogHidden, setIsGroupDialogHidden] = useState(true);
  const studentTypes: string[] = ['Přítomní studenti', 'Nepřítomní studenti'];
  return (
    <SidebarWrapper>
      <ParticipantContent>
        {studentTypes.map((type) => {
          return (
            <Collapsbile heading={type}>
              {participants.map((p) => {
                return (
                  (type === 'Přítomní studenti' ? p.isOnline : !p.isOnline) && (
                    <DetailRow
                      key={p.id}
                      userName={p.name}
                      userColor={p.color}
                      userInitials={p.initials}
                    >
                      <RaisedHandButton
                        $isHandRaised={p.isHandRaised}
                        animationData={handAnimation}
                        loop={false}
                        autoplay={true}
                      />
                      <IsSpeakingButton
                        animationData={speakingAnimation}
                        $isSpeaking={p.isSpeaking}
                        loop={true}
                        autoplay={true}
                      />
                    </DetailRow>
                  )
                );
              })}
            </Collapsbile>
          );
        })}
      </ParticipantContent>
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
export const SidebarWrapper = styled.div`
  margin: 0 4rem 0 4.8rem;
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ParticipantContent = styled.div`
  --sidebar-column-width: 3rem 15rem auto;
`;

export default ParticipantsDetail;

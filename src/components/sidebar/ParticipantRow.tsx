import React from 'react';
import styled from 'styled-components';
import { UserType } from '../../data/users-data';
import colors from '../../style/colors';
import { Content as CollapsibleContent } from '../Collapsible';
import Lottie from 'lottie-react';
import speakingAnimation from '../../resources/volume.json';
import handAnimation from '../../resources/hand.json';

type Props = {
  participant: UserType;
};

const ParticipantRow: React.FC<Props> = ({ participant }) => {
  return (
    <S.Row>
      <S.Icon>{participant.initials}</S.Icon>
      <S.Name>{participant.name}</S.Name>
      <S.ActionIcons>
        <S.RaisedHandButton
          $isHandRaised={participant.isHandRaised}
          animationData={handAnimation}
          loop={false}
          autoplay={true}
        />
        <S.IsSpeakingButton
          animationData={speakingAnimation}
          $isSpeaking={participant.isSpeaking}
          loop={true}
          autoplay={true}
        />
      </S.ActionIcons>
    </S.Row>
  );
};
const S = {
  Row: styled.div`
    ${CollapsibleContent} & {
      margin-bottom: 2.4rem;
      display: grid;
      grid-template-columns: 3rem 16rem 8rem;
      grid-gap: 1.6rem;
      align-items: center;
    }
  `,
  Icon: styled.div`
    height: 3rem;
    width: 3rem;
    margin-right: 1.6rem;
    border-radius: 50%;
    color: white;
    background-color: ${colors.additionalRed};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Name: styled.div`
    font-size: 1.4rem;
    font-weight: 300;
  `,
  ActionIcons: styled.div`
    display: flex;
    align-items: center;
  `,
  RaisedHandButton: styled(Lottie)<{ $isHandRaised: boolean }>`
    height 3rem;
    width: auto;
    display: ${(props) => (props.$isHandRaised ? 'block' : 'none')};
  `,
  IsSpeakingButton: styled(Lottie)<{ $isSpeaking: boolean }>`
    height 1.6rem;
    width: auto;
    display: ${(props) => (props.$isSpeaking ? 'block' : 'none')};
  `,
};
export default ParticipantRow;

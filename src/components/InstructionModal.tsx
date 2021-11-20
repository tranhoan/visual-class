import React, { useState } from 'react';
import styled from 'styled-components';
import { instructionData } from '../data/instruction-data';
import colors from '../style/colors';
import elevations from '../style/elevations';
import Modal, { PrimaryTitle } from './layout/Modal';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Button from './layout/Button';
import DotIndicator from './DotIndicator';

type Props = {
  hide: () => void;
  isHidden: boolean;
};
const FIRST_STEP = 0;
const FINAL_STEP = 3;

const InstructionModal: React.FC<Props> = ({ hide, isHidden }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepObject = instructionData[currentStep];

  return (
    <S.StyledInstructionModal
      title={''}
      className={'instruction-modal'}
      hide={hide}
      isHidden={isHidden}
      hasOverlay={true}
    >
      <S.ClipSection>
        <S.NavigationIcon $isDisabled={currentStep === FIRST_STEP}>
          <HiOutlineChevronLeft
            size={20}
            onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          />
        </S.NavigationIcon>
        <S.InstructionVideo key={currentStep} autoPlay loop>
          <source src={stepObject.videoSource} />
        </S.InstructionVideo>
        <S.NavigationIcon
          $isDisabled={currentStep === FINAL_STEP}
          onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
        >
          <HiOutlineChevronRight size={20} />
        </S.NavigationIcon>
      </S.ClipSection>
      <S.InstructionSection>
        <div>
          <PrimaryTitle>{stepObject.heading}</PrimaryTitle>
          <S.Description>{stepObject.description}</S.Description>
        </div>
        <S.ActionCenter>
          <DotIndicator numberOfSteps={4} currentStep={currentStep + 1} />
          <S.NavigationButton
            onClick={
              currentStep === FINAL_STEP
                ? () => hide()
                : () => setCurrentStep((prevStep) => prevStep + 1)
            }
          >
            {currentStep === FINAL_STEP ? 'Ukončit' : 'Pokračovat'}
          </S.NavigationButton>
        </S.ActionCenter>
      </S.InstructionSection>
    </S.StyledInstructionModal>
  );
};
const S = {
  StyledInstructionModal: styled(Modal)`
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
    background-color: white;
    height: 60.1rem;
    width: 67.7rem;
    padding: 0;
    flex-direction: column;
    justify-content: space-between;
    --shadow-color: 0deg 0% 56%;
    box-shadow: ${elevations.large};
  `,
  ClipSection: styled.div`
    background-color: ${colors.modalOrange};
    position: absolute;
    top: 0;
    width: 100%;
    height: 60%;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.6rem;
    box-sizing: border-box;
  `,
  InstructionSection: styled.section`
    height: 40%;
    padding: 2.4rem 6.4rem 3.2rem 6.4rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  InstructionVideo: styled.video`
    width: 53.4rem;
    height: 28.1rem;
    object-fit: cover;
    overflow: hidden;
    border-radius: 8px;
    --shadow-color: 28deg 82% 68%;
    box-shadow: ${elevations.medium};
  `,
  Description: styled.p`
    font-size: 1.4rem;
    font-weight: 300;
    margin: 1.6rem 0;
    line-height: 2.7rem;
  `,
  NavigationIcon: styled.div<{ $isDisabled: boolean }>`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background-color: ${colors.additionalWhite};
    color: ${colors.additionalGrey};
    --shadow-color: 28deg 82% 68%;
    box-shadow: ${elevations.medium};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    pointer-events: ${(props) => (props.$isDisabled ? 'none' : 'auto')};
    opacity: ${(props) => (props.$isDisabled ? '0.5' : '1')};

    &:hover {
      background-color: ${colors.backgroundBlue};
    }
    &:active {
      box-shadow: inset ${elevations.small};
    }
  `,
  ActionCenter: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  NavigationButton: styled(Button)`
    padding: 1.2rem 2.4rem;
  `,
};

export default InstructionModal;

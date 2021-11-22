import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';

type Props = {
  numberOfSteps: number;
  currentStep: number;
};
const DotIndicator: React.FC<Props> = ({ numberOfSteps, currentStep }) => {
  return (
    <StepIndicator currentStep={currentStep}>
      {Array(numberOfSteps)
        .fill(0)
        .map((dot, dotIndex) => {
          return <Dot key={`dotstep${dotIndex}`} />;
        })}
    </StepIndicator>
  );
};
const Dot = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 0.5rem;
  background-color: ${colors.additionalGrey};
  margin-right: 2.4rem;
  transition: width 300ms ease;
`;
const StepIndicator = styled.div<{ currentStep: number }>`
  display: flex;
  align-items: center;

  & ${Dot}:nth-child(${(props) => props.currentStep}) {
    width: 3rem;
    background-color: ${colors.additionalOrange};
  }
`;
export default DotIndicator;

import React, { useState } from 'react';
import styled from 'styled-components';
import { HiChevronUp } from 'react-icons/hi';
type Props = {
  heading: string;
};
const Collapsbile: React.FC<Props> = ({ children, heading }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <Collapsible>
      <Header onClick={() => setIsCollapsed((prevCollapsed) => !prevCollapsed)}>
        <Heading>{heading}</Heading>
        <CustomAccordion size={20} $isCollapsed={isCollapsed} />
      </Header>
      <Content $isCollapsed={isCollapsed}>{children}</Content>
    </Collapsible>
  );
};
const Collapsible = styled.div``;
const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 3.2rem;
`;
export const Content = styled.section<{ $isCollapsed: boolean }>`
  max-height: ${(props) => (props.$isCollapsed ? '0' : '500px')};
  --transition-function: ${(props) =>
    props.$isCollapsed ? 'ease-out' : 'ease-in'};
  overflow: hidden;
  transition: max-height 100ms var(--transition-function);
  display: flex;
  flex-direction: column;
`;
const Heading = styled.h2`
  font-weight: 400;
  font-size: 1.6rem;
  margin-right: 0.8rem;
`;
const CustomAccordion = styled(HiChevronUp)<{ $isCollapsed: boolean }>`
  transform: rotate(${(props) => (props.$isCollapsed ? '180deg' : '0deg')});
  transition: transform 200ms ease-in;
`;
export default Collapsbile;

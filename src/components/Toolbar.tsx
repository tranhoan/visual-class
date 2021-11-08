import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../style/colors';
import elevations from '../style/elevations';
import { IconContext } from 'react-icons/lib';
import { toolbarData } from '../data/toolbar-data';
import { useUserStore } from '../hooks/user';

const Toolbar: React.FC = () => {
  const userStore = useUserStore();
  return (
    <IconContext.Provider value={{ size: '2.4rem' }}>
      <S.ToolbarWrapper>
        {Object.values(toolbarData).map((item) => {
          return item.type === 'normal' ? (
            <ToolbarItemButton onClick={item.onClick}>
              {item.renderIcon()}
            </ToolbarItemButton>
          ) : (
            <ActiveItemButton
              onClick={userStore[item.type[1]]}
              isActive={userStore[item.type[0]]}
            >
              {item.renderIcon()}
            </ActiveItemButton>
          );
        })}
      </S.ToolbarWrapper>
    </IconContext.Provider>
  );
};
const S = {
  ToolbarWrapper: styled.div`
    --shadow-color: 224deg 58% 88%;
    box-shadow: ${elevations.large};
    border-radius: 12px;
    background-color: ${colors.additionalWhite};
    left: 50%;
    bottom: 3.2rem;
    transform: translateX(-50%);
    position: fixed;
    padding: 0.8rem 4.8rem;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1.6rem;
  `,
};
const ToolbarItemButton = styled.button`
  border-radius: 8px;
  display: flex;
  background-color: white;
  color: ${colors.textGrey};
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  transition: all 50ms linear;
  border: none;
  &:hover {
    background-color: ${colors.backgroundBlue};
    color: ${colors.primaryBlue};
    cursor: pointer;
  }
`;
export const ActiveItemButton = styled(ToolbarItemButton)<{
  isActive: boolean;
}>`
  ${(props) => (props.isActive ? onStyle : offStyle)};
`;

const onStyle = css`
  color: ${colors.successGreen};
  &:hover {
    color: ${colors.successGreen};
    background-color: ${colors.successGreenHover};
  }
`;

const offStyle = css`
  color: ${colors.additionalRed};
  &:hover {
    color: ${colors.additionalRed};
    background-color: ${colors.errorRedHover};
  }
`;

export default Toolbar;

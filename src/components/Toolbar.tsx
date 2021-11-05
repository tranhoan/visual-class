import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import elevations from '../style/elevations';
import { IconContext } from 'react-icons/lib';
import { toolbarData } from '../data/toolbar-data';
import ToolbarItem from './ToolbarItem';

const Toolbar: React.FC = () => {
  return (
    <IconContext.Provider value={{ size: '2.4rem' }}>
      <S.ToolbarWrapper>
        {Object.values(toolbarData).map((item) => {
          return <ToolbarItem>{item.renderIcon()}</ToolbarItem>;
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
    padding: 1.2rem 4.8rem;
    display: grid;
    grid-auto-flow: column;
    column-gap: 2.4rem;
  `,
};
export default Toolbar;

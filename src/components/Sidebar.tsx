import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import elevations from '../style/elevations';
import logo from '../resources/logo.svg';

const Sidebar: React.FC = () => {
  return (
    <S.Sidebar>
      <S.Logo />
    </S.Sidebar>
  );
};
const S = {
  Sidebar: styled.div`
    --shadow-color: 224deg 58% 88%;
    box-shadow: ${elevations.large};
    position: fixed;
    height: 86vh;
    padding: 3.2rem 2.4rem;
    background-color: ${colors.additionalWhite};
    left: 3.2rem;
    bottom: 50%;
    transform: translateY(50%);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
  `,
  Logo: styled.img.attrs({
    src: logo,
  })``,
};
export default Sidebar;

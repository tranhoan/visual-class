import React, { useState, TransitionEvent } from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';
import elevations from '../../style/elevations';
import logo from '../../resources/logo.svg';
import { IconContext } from 'react-icons/lib';
import { HiUsers, HiChartPie, HiChatAlt2, HiCog } from 'react-icons/hi';
import { SidebarContentType, SidebarContent } from './SidebarContentFactory';
import SidebarContentFactory from './SidebarContentFactory';

const Sidebar: React.FC = () => {
  const [contentType, setContentType] = useState<SidebarContent>(null);
  const [displayContent, setDisplayContent] = useState<boolean>(false);
  const compareActive = (type: SidebarContentType): boolean => {
    if (!contentType) {
      return false;
    }
    return contentType.type === type;
  };

  const manageContentType = (desiredType: SidebarContentType): void => {
    if (!contentType || contentType.type !== desiredType) {
      setContentType({ type: desiredType });
    } else {
      setContentType(null);
    }
  };

  const displayContentOnTransitionEnd = (
    event: TransitionEvent<HTMLElement>
  ): void => {
    if (event.propertyName !== 'width') {
      return;
    }
    setDisplayContent((prevDisplay) => !prevDisplay);
  };

  return (
    <IconContext.Provider value={{ size: '2.4rem' }}>
      <S.Sidebar
        isHidden={contentType === null}
        onTransitionEnd={(e) => displayContentOnTransitionEnd(e)}
      >
        <S.Menu>
          <S.Logo />
          <S.SidebarItem
            isActive={compareActive(SidebarContentType.PARTICIPANTS)}
            onClick={() => manageContentType(SidebarContentType.PARTICIPANTS)}
          >
            <HiUsers />
          </S.SidebarItem>
          <S.SidebarItem
            isActive={compareActive(SidebarContentType.QUIZ)}
            onClick={() => manageContentType(SidebarContentType.QUIZ)}
          >
            <HiChartPie />
          </S.SidebarItem>
          <S.SidebarItem
            isActive={compareActive(SidebarContentType.CHAT)}
            onClick={() => manageContentType(SidebarContentType.CHAT)}
          >
            <HiChatAlt2 />
          </S.SidebarItem>
          <S.SidebarItem
            isActive={compareActive(SidebarContentType.SETTINGS)}
            onClick={() => manageContentType(SidebarContentType.SETTINGS)}
          >
            <HiCog />
          </S.SidebarItem>
        </S.Menu>
        <SidebarContentFactory
          contentType={contentType}
          displayContent={displayContent}
        />
      </S.Sidebar>
    </IconContext.Provider>
  );
};
const S = {
  Sidebar: styled.div<{ isHidden: boolean }>`
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
    transition: width 200ms ease-in-out;
    width: ${(props) => (props.isHidden ? '4rem' : '30rem')};
  `,
  Logo: styled.img.attrs({
    src: logo,
  })`
    margin-bottom: 7.2rem;
  `,
  Menu: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  SidebarItem: styled.div<{ isActive: boolean }>`
    color: ${(props) =>
      props.isActive ? colors.secondaryBlue : colors.middleGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    cursor: pointer;
    transition: all 100ms ease-in;
    border-radius: 8px;
    padding: 0.8rem;
    &:hover {
      background-color: ${colors.backgroundBlue};
    }
  `,
};
export default Sidebar;

import React, { useState, TransitionEvent } from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';
import elevations from '../../style/elevations';
import logo from '../../resources/logo.svg';
import { IconContext } from 'react-icons/lib';
import { SidebarContentType } from './SidebarContentFactory';
import SidebarContentFactory from './SidebarContentFactory';
import { useTooltip, useTooltipArrayRef } from '../../hooks/tooltip';
import { sidebarData } from '../../data/sidebar-data';
import { useUserStore } from '../../hooks/user';
import shallow from 'zustand/shallow';

const Sidebar: React.FC = () => {
  const { contentType, setContentType } = useUserStore(
    (state) => ({
      contentType: state.sidebarContent,
      setContentType: state.setSidebarContent,
    }),
    shallow
  );
  const [displayContent, setDisplayContent] = useState<boolean>(false);
  const { onMouseEnter, onMouseLeave } = useTooltip<HTMLDivElement>();
  const refs = useTooltipArrayRef<HTMLDivElement>(4);

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
    <S.SidebarWrapper id='sidebar-portal'>
      <IconContext.Provider value={{ size: '2.4rem' }}>
        <S.Sidebar
          isHidden={contentType === null}
          onTransitionEnd={(e) => displayContentOnTransitionEnd(e)}
        >
          <S.Menu>
            <S.Logo />
            {Object.values(sidebarData).map((item, index) => {
              return (
                <S.SidebarItem
                  isActive={compareActive(item.type)}
                  onClick={() => manageContentType(item.type)}
                  ref={(e) => (refs!.current[index] = e)}
                  key={item.tooltip}
                  onMouseEnter={() =>
                    onMouseEnter(refs!.current[index], 'right', item.tooltip)
                  }
                  onMouseLeave={() => onMouseLeave()}
                >
                  {item.icon}
                </S.SidebarItem>
              );
            })}
          </S.Menu>
          <SidebarContentFactory
            contentType={contentType}
            displayContent={displayContent}
          />
        </S.Sidebar>
      </IconContext.Provider>
    </S.SidebarWrapper>
  );
};
const S = {
  Sidebar: styled.div<{ isHidden: boolean }>`
    --shadow-color: 224deg 58% 88%;
    box-shadow: ${elevations.large};
    position: fixed;
    height: 86vh;
    padding: ${(props) =>
      props.isHidden ? '3.2rem 2.4rem' : '3.2rem 4.8rem 3.2rem 2.4rem'};
    background-color: ${colors.additionalWhite};
    left: 3.2rem;
    bottom: 50%;
    transform: translateY(50%);
    border-radius: 12px;
    display: flex;
    transition: width 200ms ease-in-out;
    width: ${(props) => (props.isHidden ? '4rem' : '35rem')};
    z-index: 2;
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
  SidebarWrapper: styled.div`
    display: relative;
  `,
};
export default Sidebar;

import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';

const ToolbarItem: React.FC = (props) => {
  return <S.IconWrapper>{props.children}</S.IconWrapper>;
};
const S = {
  IconWrapper: styled.div`
    border-radius: 8px;
    display: flex;
    background-color: white;
    color: ${colors.textGrey};
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    transition: all 50ms linear;
    &:hover {
      background-color: ${colors.backgroundBlue};
      color: ${colors.primaryBlue};
      cursor: pointer;
    }
  `,
};
export default ToolbarItem;

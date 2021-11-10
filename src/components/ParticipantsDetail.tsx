import React from 'react';
import styled from 'styled-components';

const ParticipantsDetail: React.FC = () => {
  return (
    <S.SidebarWrapper onTransitionEnd={() => console.log('quoc')}>
      <S.DetailLabel>Přítomní studenti</S.DetailLabel>
    </S.SidebarWrapper>
  );
};
const S = {
  SidebarWrapper: styled.div`
    padding: 0 4rem 0 5.6rem;
  `,
  DetailLabel: styled.h2`
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0 0 3.6rem 0;
  `,
};
export default ParticipantsDetail;

import React from 'react';
import styled from 'styled-components';
import { roomsData } from '../../data/rooms-data';
import colors from '../../style/colors';
import Collapsbile from '../Collapsible';
import Button from '../layout/Button';
import DetailRow from './DetailRow';
import { SidebarWrapper } from './ParticipantsDetail';
import { HiOutlineLogin, HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const RoomsDetail: React.FC = () => {
  return (
    <SidebarWrapper>
      <S.RoomsContent>
        <Collapsbile heading={'Všechny místnosti'}>
          {Object.values(roomsData).map((room) => {
            return (
              <DetailRow
                userInitials={room.initials}
                userName={room.name}
                userColor={colors.additionalOrange}
              >
                <Link to={room.link}>
                  <S.SecondaryButton
                    renderIcon={() => <S.LoginIcon size={16} />}
                  >
                    Vstoupit
                  </S.SecondaryButton>
                </Link>
              </DetailRow>
            );
          })}
        </Collapsbile>
      </S.RoomsContent>
      <Button
        renderIcon={() => <HiPlus />}
        onClick={() => console.log('create room')}
      >
        Vytvořit třídu
      </Button>
    </SidebarWrapper>
  );
};
const S = {
  SecondaryButton: styled(Button)`
    background-color: transparent;
    color: ${colors.primaryBlue};
    border: 2px solid ${colors.primaryBlue};
    font-size: 1.2rem;
    padding: 1.2rem 1.6rem;
    box-shadow: none;
    font-weight: 500;
  `,
  LoginIcon: styled(HiOutlineLogin)`
    color: ${colors.primaryBlue};
    transform: rotate(180deg);
  `,
  RoomsContent: styled.div`
    --sidebar-column-width: 3rem 8rem auto;
  `,
};
export default RoomsDetail;

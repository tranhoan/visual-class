import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import colors from '../../style/colors';
import elevations from '../../style/elevations';
import Modal from '../layout/Modal';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import Button from '../layout/Button';

type Props = {
  isHidden: boolean;
  hide: () => void;
};
const GroupModal: React.FC<Props> = ({ isHidden, hide }) => {
  const portalRef = document.getElementById('sidebar-portal') as HTMLElement;
  return createPortal(
    <S.StyledGroupModal
      isHidden={isHidden}
      hide={hide}
      hasOverlay={false}
      className='sidebar-modal'
      title={'Rozdělte třídu do skupin'}
    >
      <ModalInput placeholder='Kolik lidí chcete v jedné skupině' />
      <S.InfoContent>
        <HiOutlineInformationCircle size={24} />
        <S.InfoText>
          Skupiny budou vytvořeny náhodně. Rozdělení můžete vytvořit ručně
          přetáhnutím ikonek.
        </S.InfoText>
      </S.InfoContent>
      <S.ActionableContent>
        <TertiaryButton onClick={hide}>Zrušit</TertiaryButton>
        <DialogButton onClick={() => console.log('hoang')}>
          Rozdělit
        </DialogButton>
      </S.ActionableContent>
    </S.StyledGroupModal>,
    portalRef
  );
};

const S = {
  StyledGroupModal: styled(Modal)`
    --shadow-color: 224deg 58% 88%;
    box-shadow: ${elevations.large};
  `,
  InfoContent: styled.section`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.textBlack};
    display: flex;
    align-items: center;
    margin: 2.4rem 0 5.6rem;
    max-width: 43.6rem;
  `,
  InfoText: styled.p`
    margin-left: 0.8rem;
  `,
  ActionableContent: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,
};

const ModalInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.backgroundGrey};
  color: ${colors.textGrey};
  font-size: 1.6rem;
  font-weight: 300;
  padding: 0.8rem 0;
  font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  width: 95%;
  &:focus,
  &:active {
    outline: none;
    border-bottom: 1px solid ${colors.primaryBlue};
    transition: all 200ms ease-in-out;
  }
`;

const DialogButton = styled(Button)`
  padding: 1.2rem 2.4rem;
`;

const TertiaryButton = styled(Button)`
  padding: 1.2rem 2.4rem;
  color: ${colors.primaryBlue};
  background-color: ${colors.additionalWhite};
  box-shadow: none;
  &:hover {
    color: ${colors.secondaryBlue};
  }
`;

export default GroupModal;

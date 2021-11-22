import React from 'react';
import styled from 'styled-components';
import screen from '../resources/sharedScreen.png';
import Button from '../components/layout/Button';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { PrimaryTitle } from '../components/layout/Modal';
import videoStudent1 from '../resources/videoStudent1.mp4';
import videoStudent2 from '../resources/videStudent2.mp4';
import elevations from '../style/elevations';
import { UserWebcam } from '../components/UserIcon';

const MaxedScreenShare: React.FC = () => {
  return (
    <S.MaxedContent>
      <S.Header>
        <Link to='/inclass/classroom'>
          <FloatingButton
            className='floating-button'
            renderIcon={() => <HiOutlineChevronLeft size={24} />}
          />
        </Link>
        <PrimaryTitle>Maximalizovaná obrazovka vašeho sdílení</PrimaryTitle>
      </S.Header>
      <S.Body>
        <S.SharedImage></S.SharedImage>
        <S.Viewers>
          <FloatingUserIcon autoPlay loop>
            <source src={videoStudent1} />
          </FloatingUserIcon>
          <FloatingUserIcon autoPlay loop>
            <source src={videoStudent2} />
          </FloatingUserIcon>
        </S.Viewers>
      </S.Body>
    </S.MaxedContent>
  );
};
const S = {
  MaxedContent: styled.div`
    display: flex;
    height: 100vh;
    max-width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5.6rem 3.6rem;
    box-sizing: border-box;
    margin-left: 20rem;
  `,
  SharedImage: styled.img.attrs({ src: screen })`
    max-width: 85%;
    border-radius: 12px;
    width: auto;
    object-fit: contain;
  `,
  Header: styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
  `,
  Body: styled.div`
    display: flex;
  `,
  Viewers: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8.8rem;
  `,
};

export const FloatingButton = styled(Button)`
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.6rem;
`;
export const FloatingUserIcon = styled(UserWebcam)`
  width: 11rem;
  height: 11rem;
  margin-bottom: 2.4rem;
  --shadow-color: 0deg 0% 40%;
  box-shadow: ${elevations.medium};
`;
export default MaxedScreenShare;

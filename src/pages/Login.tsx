import React, { useState } from 'react';
import styled from 'styled-components';
import illustration from '../resources/illustration.png';
import colors from '../style/colors';
import floatingIcon1 from '../resources/Icon1.svg';
import floatingIcon2 from '../resources/Icon2.svg';
import floatingIcon3 from '../resources/Icon3.svg';
import floatingIcon4 from '../resources/Icon4.svg';
import Button from '../components/layout/Button';
import { useLogin } from '../hooks/login';

const positions = [
  { x: 85, y: 60 },
  { x: 45, y: 70 },
  { x: 10, y: 60 },
  { x: 60, y: 60 },
];

const positionsMid = [
  { x: 70, y: 65 },
  { x: 45, y: 70 },
  { x: 10, y: 60 },
  { x: 65, y: 50 },
];

const positionEnd = [
  { x: 70, y: 65 },
  { x: 35, y: 60 },
  { x: 10, y: 60 },
  { x: 65, y: 50 },
];

const Login: React.FC = () => {
  const [iconPosition, setIconPosition] = useState(positions);
  const [setIsLoggedIn] = useLogin();

  return (
    <S.LoginWrapper>
      <S.Illustration>
        <S.TextWrapper>
          <S.HeroTitle>
            Distanční výuka.
            <br />
            motto
          </S.HeroTitle>
          <S.HeroParagraph>
            Vyučujte a studujte z domova bez toho <br /> aniž byste se cítili
            sami.
          </S.HeroParagraph>
        </S.TextWrapper>
        <S.FloatingImage
          delay={1}
          src={floatingIcon1}
          alt={'floating icon'}
          style={{
            left: `${iconPosition[0].x}%`,
            top: `${iconPosition[0].y}%`,
          }}
        />
        <S.FloatingImage
          delay={1.5}
          src={floatingIcon2}
          alt={'floating icon 2'}
          style={{
            left: `${iconPosition[1].x}%`,
            top: `${iconPosition[1].y}%`,
          }}
        />
        <S.FloatingImage
          delay={2}
          src={floatingIcon3}
          alt={'floating icon 2'}
          style={{
            left: `${iconPosition[2].x}%`,
            top: `${iconPosition[2].y}%`,
          }}
        />
        <S.FloatingImage
          delay={2.5}
          src={floatingIcon4}
          alt={'floating icon 3'}
          style={{
            left: `${iconPosition[3].x}%`,
            top: `${iconPosition[3].y}%`,
          }}
        />
      </S.Illustration>
      <S.LoginForm>
        <S.LoginContainer>
          <S.LoginTitle>
            Přihlašte se <br /> do VisualClass.
          </S.LoginTitle>
          <S.Subtitle>Začněte a užijte si online hodinu!</S.Subtitle>
          <S.InputWrapper>
            <S.InputLabel htmlFor={'email'}>Email</S.InputLabel>
            <S.InputText
              id={'email'}
              type={'email'}
              placeholder={'user@email.com'}
              onFocus={() => setIconPosition(positionsMid)}
            ></S.InputText>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel htmlFor={'password'}>Heslo</S.InputLabel>
            <S.InputText
              onFocus={() => setIconPosition(positionEnd)}
              id={'password'}
              type={'password'}
              placeholder={'Min. 8 znaků'}
            ></S.InputText>
          </S.InputWrapper>
          <S.ForgetPassword>Zapomněli jste heslo?</S.ForgetPassword>
          <S.LoginButton onClick={() => setIsLoggedIn(true)}>
            Přihlásit
          </S.LoginButton>
          <S.Register>
            Nemáte účet?
            <S.RegisterLink> Zaregistrujte se</S.RegisterLink>
          </S.Register>
        </S.LoginContainer>
      </S.LoginForm>
    </S.LoginWrapper>
  );
};
const S = {
  LoginWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 4.8rem 4.8rem;
    box-sizing: border-box;
    background-color: ${colors.additionalWhite};
  `,
  Illustration: styled.div`
    width: 45%;
    height: 100%;
    background-image: url(${illustration});
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: 15% 10%;
    border-radius: 12px;
    display: grid;
    grid-template-rows: 24rem auto auto;
    justify-items: center;
    position: relative;
  `,
  LoginForm: styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    flex-direction: column;
    margin-top: 9.6rem;
  `,
  TextWrapper: styled.div`
    grid-row: 2/3;
  `,
  HeroTitle: styled.h1`
    font-size: 4rem;
    font-weight: 600;
    color: ${colors.additionalWhite};
    margin-bottom: 3.6rem;
  `,
  HeroParagraph: styled.p`
    font-size: 1.6rem;
    font-weight: 300;
    color: ${colors.additionalWhite};
    line-height: 2.7rem;
  `,
  FloatingImage: styled.img<{ delay: number }>`
    position: absolute;
    animation: float 6s ease-in-out infinite;
    border-radius: 50%;
    animation-delay: ${(props) => props.delay}s;
    transition: all 400ms ease-in-out;
    @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
  `,
  LoginTitle: styled.h1`
    font-size: 3.2rem;
    font-weight: 400;
    margin: 0;
  `,
  Subtitle: styled.p`
    font-size: 1.6rem;
    font-weight: 300;
    color: ${colors.textGrey};
    margin: 2.4rem 0 5.6rem 0;
  `,
  InputText: styled.input`
    border: 2px solid ${colors.middleGrey};
    color: ${colors.textGrey};
    font-size: 1.6rem;
    font-weight: 300;
    padding: 1.8rem 1.6rem;
    border-radius: 8px;
    width: 41.5rem;
    margin-bottom: 3.2rem;
    font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    transition: all 200ms ease-in-out;
    &:focus,
    &:active {
      outline: none;
      border-color: ${colors.primaryBlue};
    }
    ::placeholder {
      color: ${colors.middleGrey};
    }
  `,
  LoginContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  LoginButton: styled(Button)`
    padding: 1.8rem 17.4rem;
    font-size: 1.6rem;
    margin-bottom: 2.4rem;
  `,
  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  InputLabel: styled.label`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${colors.textBlack};
    margin-bottom: 1.6rem;
  `,
  Register: styled.div`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${colors.textBlack};
  `,
  RegisterLink: styled.a`
    color: ${colors.primaryBlue};
  `,
  ForgetPassword: styled.div`
    font-size: 1.4rem;
    color: ${colors.primaryBlue};
    margin-bottom: 3.6rem;
  `,
};
export default Login;

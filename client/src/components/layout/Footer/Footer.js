import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import codingLogo from '../../../assets/images/codingLogo.png';
import { tablet } from '../../../styles/Responsive';

const Footer = () => {
  return (
    <Container>
      <FooterLogo>
        <Link to={'/'}>
          <img src={codingLogo} alt="logo" />
        </Link>
      </FooterLogo>
      <FooterText>
        <Category>
          <div className="title">서비스소개</div>
          <a href="https://github.com/codestates-seb/seb40_main_026">Github</a>
          <a href="https://github.com/codestates-seb/seb40_main_026">Figma</a>
        </Category>
        <Category>
          <div className="title">Frontend</div>
          <Contributers>
            <AiOutlineGithub />
            <a href="https://github.com/hyeleeeeen">이혜린</a>
          </Contributers>
          <Contributers>
            <AiOutlineGithub />
            <a href="https://github.com/Powkim">김지수</a>
          </Contributers>
          <Contributers>
            <AiOutlineGithub />
            <a href="https://github.com/ALSRUD29">박민경</a>
          </Contributers>
        </Category>
        <Category>
          <div className="title">Backend</div>
          <Contributers>
            <AiOutlineGithub />
            <a href="https://github.com/Kimdumchit">김영훈</a>
          </Contributers>
          <Contributers>
            <AiOutlineGithub />
            <a href="https://github.com/oasis791">김현욱</a>
          </Contributers>
          <Contributers>
            <AiOutlineGithub />
            <a href="https://github.com/heoseongeun">허성은</a>
          </Contributers>
        </Category>
      </FooterText>
      <Etc>
        <SnsContainer>
          <Sns>Blog</Sns>
          <Sns>Facebook</Sns>
          <Sns>Twitter</Sns>
          <Sns>LinkedIn</Sns>
          <Sns>Instagram</Sns>
        </SnsContainer>
        <Paragraph>
          <License>Site design / logo © 2022 Fly to the coding</License>
          <License>contributions licensed under CC BY-SA.</License>
          <License>rev 2022.11.15.26</License>
        </Paragraph>
      </Etc>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: white;
  display: flex;
  height: 150px;
  border-top: 1px gray solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: var(--theme-footer-text-color);
  text-align: center;

  @media ${tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    height: 220px;
  }
`;

export const FooterLogo = styled.div`
  img {
    width: 150px;
    cursor: pointer;
  }
  margin: 20px;

  @media ${tablet} {
    display: none;
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Category = styled.div`
  padding: 20px;
  font-size: 12px;
  width: 120px;

  @media ${tablet} {
    margin-top: 20px;
  }
  > div.title {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  > a {
    display: flex;
    text-decoration: none;
    color: var(--theme-footer-text-color);
    justify-content: center;
  }
`;

const Contributers = styled.div`
  > a {
    text-decoration: none;
    color: var(--theme-footer-text-color);
    margin-left: 3px;
  }
  padding: 2px;
`;

export const Etc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
`;

const SnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sns = styled.a`
  text-decoration: none;
  font-size: 11px;
  color: var(--theme-footer-link-color);
  padding: 4px 0px;
  margin-top: 10px;
  cursor: pointer;
`;

const License = styled.p`
  display: flex;
  font-size: 11px;
  justify-content: baseline;
  color: var(--theme-footer-text-color);
  text-align: left;
  width: 100%;
`;

const Paragraph = styled.div`
  margin-top: auto;
  margin-bottom: 10px;
`;

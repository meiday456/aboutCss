import styled from "@emotion/styled";

export const Header = styled.header`
  border-bottom: 1px solid gray;
`;

export const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
  text-align: center;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const LogoText = styled.div`
  font-size: 22px;
  margin: 0;
`;

export const Thumbnail = styled.img`
  display: block;
  height: calc((250px * 3) / 4);
  box-shadow: 10px 5px 5px #8c8c8c;
`;

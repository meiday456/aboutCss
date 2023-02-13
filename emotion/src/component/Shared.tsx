import styled from "@emotion/styled";

export const Header = styled.header`
  border-bottom: 1px solid gray;
`;

export const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 10rem;
  }
`;
export const LogoText = styled.div`
  margin: 0;
`;

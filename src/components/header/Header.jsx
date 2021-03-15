import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <StyledHeader>
      <StyledH3>IPL_Data_Set</StyledH3>
      <span>
        <StyledSpan>
          <p>Data</p>
          <p>Community</p>
          <p>Intern</p>
        </StyledSpan>
        <StyledBiMenuAltRight />
      </span>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 0.1rem 2rem;
  background-color: #eeeded;
  display: flex;
  align-items: center;

  @media screen and (max-width: 894px) {
    padding: 0.1rem 1rem;
  }
`;

const StyledSpan = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;

  & > * {
    cursor: pointer;
  }

  & > p:hover {
    color: #5261d1;
  }

  @media screen and (max-width: 894px) {
    display: none;
  }
`;

const StyledH3 = styled.h3`
  border: 1.5px dotted #aaaaaa;
  padding: 0.3rem 0.3rem;
  border-radius: 0.2rem;
  width: fit-content;
  background-color: #f6f5f5;
  margin-right: auto;
`;

const StyledBiMenuAltRight = styled(BiMenuAltRight)`
  font-size: 2.5rem;
  cursor: pointer;

  @media screen and (min-width: 894px) {
    display: none;
  }
`;

export default Header;

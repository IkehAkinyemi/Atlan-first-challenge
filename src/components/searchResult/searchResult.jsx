import { useEffect, useState } from "react";
import styled from "styled-components";

const SearchResult = ({ checkboxState }) => {
  const [appliedFilters, setAppliedFilters] = useState([]);

  useEffect(() => {
    setAppliedFilters([...Object.entries(checkboxState)]);
  }, [checkboxState]);

  return (
    <Container>
      <StyledPara>Search results:</StyledPara>
      <AppliedFilter>
        Applied filters:
        {appliedFilters.map(([filter, bool], index) => {
          if (bool === false) {
            return null;
          }
          return (
            <StyledSpan id={index} key={index}>
              {filter}
            </StyledSpan>
          );
        })}
      </AppliedFilter>
      <hr />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;

  @media screen and (max-width: 894px) {
    padding: 1rem;
  }
`;

const StyledPara = styled.p`
  font-weight: bolder;
  margin: 0rem;
`;

const AppliedFilter = styled.div`
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-style: italic;
  font-weight: normal;
`;

const StyledSpan = styled.span`
  background-color: ${(props) =>
    props.id > 0
      ? !(props.id >= 2)
        ? "#ff7171"
        : props.id === 2
        ? "#145374"
        : "rebeccapurple"
      : "#f25287"};
  color: #ffffff;
  padding: 0.15rem 0.5rem;
  font-style: normal;
  border-radius: 0.25rem;
  margin-left: 0.7rem;
`;

export default SearchResult;

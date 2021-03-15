import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import Filter from "./filter/Filter";

const Search = ({ checkboxState, handleCheckboxChange }) => {
  return (
    <MainContainer >
      <StyledInputContainer >
        <StyledFiSearch />
        <div>        
          <StyledInput type="text" name="search" placeholder="Search with filter" id="search" autoComplete="off" />
        </div>
        <StyledLabel htmlFor="search">Search</StyledLabel>
      </StyledInputContainer>

      <Filter checkboxState={checkboxState} handleCheckboxChange={handleCheckboxChange} />
    </MainContainer>
  )
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  @media screen and (max-width: 894px) {
    display: block;
    flex-direction: unset;
    align-items: unset;
    justify-content: unset;
    padding: 1rem;
  }
`

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: fit-content;
  padding-bottom: 0.8rem;
`;

const StyledFiSearch = styled(FiSearch)`
  position: absolute;
  font-size: 1.4rem;
  color: #6A6B76;
  top: 32%;
  left: 1rem;

  @media screen and (max-width: 894px){
    display: none;
  }
`;

const StyledInput = styled.input`
  border: 1.6px solid #9C9CA5;
  border-right: none;
  border-radius: 0.3rem;
  padding: 0.3rem 1.5rem;
  padding-left:3.1rem;
  padding-right: 5rem;
  outline-color: #A6ADD7;
  font-size: 1.01rem;
  color: #797a7e;
  height: 100%;

  &::-webkit-input-placeholder {
    color: #9C9CA5;
  }

  &:-ms-input-placeholder {
    color: #9C9CA5;
  }

  &::placeholder {
    color: #9C9CA5;
    font-size: 1.001rem;
  }

  @media screen and (max-width: 894px){
    padding-left: 0.5rem;
    padding-right: 1rem;
  }
`;

const StyledLabel = styled.label`
  background-color: #5261D1;
  color: #EDEDF7;
  padding: 0.77rem 1.5rem;
  border-radius: 0.3rem;
  border-bottom-left-radius: unset;
  border-top-left-radius: unset;
  cursor: pointer;
  position: absolute;
  right: 0px;
`;

export default Search;
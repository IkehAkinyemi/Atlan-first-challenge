import styled from "styled-components";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Checkbox from "./Checkbox";

const Filter = ({ checkboxState, handleCheckboxChange }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else if (!clicked) {
      setClicked(true);
    }
  };
  const { players, owners, teams, venues } = checkboxState;

  return (
    <OuterContainer checked={clicked}>
      <StyledInnerContainer onClick={handleClick}>
        <span style={{ marginRight: "2rem" }}>Filter by category</span>
        {clicked ? <BsChevronUp /> : <BsChevronDown />}
      </StyledInnerContainer>

      {clicked ? (
        <StyledCheckBoxContainer>
          <Checkbox
            id={"players"}
            label="Players"
            checked={players}
            checkboxChange={handleCheckboxChange}
          />
          <Checkbox
            id={"owners"}
            label="Owners"
            checked={owners}
            checkboxChange={handleCheckboxChange}
          />
          <Checkbox
            id={"teams"}
            label="Teams"
            checked={teams}
            checkboxChange={handleCheckboxChange}
          />
          <Checkbox
            id={"venues"}
            label="Venues"
            checked={venues}
            checkboxChange={handleCheckboxChange}
          />
        </StyledCheckBoxContainer>
      ) : null}
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: fit-content;
  border: ${(props) =>
    props.checked ? " 1.6px solid #A6ADD7" : "1.6px solid #9C9CA5"};
  position: relative;
  border-radius: 0.3rem;

  @media screen and (max-width: 894px) {
    margin-top: 0.5rem;
  }
`;

const StyledInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

const StyledCheckBoxContainer = styled.div`
  position: absolute;
  z-index: 99;
  background-color: #ededf7;
  padding: 0rem 0rem 0.5rem 0.5rem;
  width: 96%;
  -webkit-box-shadow: -2px 4px 6px -4px #a6add7, 2px 4px 6px -4px #a6add7;
  -moz-box-shadow: -2px 4px 6px -4px #a6add7, 2px 4px 6px -4px #a6add7;
  box-shadow: 0px 4px 6px -4px #a6add7, 0px 4px 6px -4px #a6add7;
  color: #2635be;
`;

export default Filter;

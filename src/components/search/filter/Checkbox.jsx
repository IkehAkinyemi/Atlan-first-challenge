import styled from "styled-components";

const Checkbox = ({ label, checkboxChange, checked, id }) => {
  return (
    <div className="container" id={id} style={{ width: "100%", marginTop: "1rem" }}>
      <label>
        <CheckboxComponent checked={ checked } onChange={ checkboxChange } />
        <span>{label}</span>
      </label>
    </div>
  );
};

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 23px;
  height: 23px;
  background: ${(props) => (props.checked ? "#2635BE" : "transparent")};
  border-radius: 3px;
  transition: all 150ms;
  margin-right: 1rem;
  border: ${(props) => (props.checked ? "none" : " 1.6px solid #A6ADD7")};

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const CheckboxComponent = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;

import styled, { keyframes } from "styled-components";

interface Props {
  inputColor?: string;
}

const rotate = keyframes`
  from {transform: translateX(-100%);}
  to {transform: translateX(100%);}
`;

export const Input = styled.input<Props>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const AttrInput = styled(Input).attrs((props) => ({
  type: "text",
  placeholder: "empty",
}))``;

const Ball = styled.div`
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #0b5ed7;
  animation: ${rotate} 1s linear infinite;
`;

const Buttons = () => {
  // Render a styled text input with the standard input color, and one with a custom input color
  return (
    <div>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <AttrInput />
      <Ball />
    </div>
  );
};

export default Buttons;

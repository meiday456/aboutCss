/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { ThemeType } from "../interface/Theme";

const copyrightStyle = css`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const blackAndWhiteBtnStyle = css`
  background-color: #fcfcfd;
  color: #36395a;
  border: 1px solid rgba(34, 36, 38, 0.5);
  padding: 0.6rem 1.5rem;
  margin-left: 15px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Footer = ({ isDark, setIsDark }: ThemeType) => {
  return (
    <div css={copyrightStyle}>
      <p>© Book list Inc, All rights reserved</p>
      <button css={blackAndWhiteBtnStyle} onClick={() => setIsDark(!isDark)}>
        dark
      </button>
    </div>
  );
};

export default Footer;

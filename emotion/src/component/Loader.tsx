/** @jsxImportSource @emotion/react */
import React from "react";
import { keyframes } from "@emotion/css";
import { css } from "@emotion/react";

const turnKeyFrame = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`;

const LoadingStyle = css`
  width: 30px;
  height: 30px;
  margin: 30px auto;
  border: 4px solid #868686;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${turnKeyFrame} 1s linear infinite;
`;

const Loader = () => {
  console.log("show suspense");
  return <div css={LoadingStyle} />;
};

export default Loader;

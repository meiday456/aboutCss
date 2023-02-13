/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Fragment } from "react";

const defaultBtnStyle = css`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #1a8cff;
  text-align: center;
`;

//이렇게 해서는 값을 받아서 넣어주지못한다.
const RedBtnStyle = css({ ...css, backgroundColor: "#FF2424" });

const Btns = (): React.ReactElement => {
  return (
    <Fragment>
      <button css={defaultBtnStyle}>버튼입니다</button>
      <button
        css={css`
          width: 100px;
          height: 50px;
          border: none;
          border-radius: 5px;
          color: #fff;
          background-color: #1a8cff;
          text-align: center;
        `}
      >
        버튼입니다
      </button>
      <button css={RedBtnStyle}>버튼입니다</button>
    </Fragment>
  );
};

export default Btns;

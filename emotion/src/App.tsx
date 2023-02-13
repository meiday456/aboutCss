/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { css, Global, ThemeProvider, useTheme } from "@emotion/react";
import SearchPage from "./pages/SearchPage";
import BookDetailPage from "./pages/BookDetailPage";
import Footer from "./component/Footer";

import { Theme, themeDark, themeLight } from "./component/Theme";
import { ThemeType } from "./interface/Theme";

const Layout = ({ isDark, setIsDark }: ThemeType) => {
  const theme = useTheme() as Theme;
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: ${theme.background};
            color: ${theme.text};
            transition-duration: 0.2s;
            transition-property: background-color, color;
          }

          a {
            color: ${theme.text};
            text-decoration: none;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        `}
      />
      <div
        css={css`
          min-height: 90vh;
        `}
      >
        <Outlet />
      </div>
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </>
  );
};

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <Routes>
          {/*
          중첩 라우팅을 사용하여 ,공통 레이아웃을 지정해 줄 수 있다
          아래와 같이 작성한 경우 Layout이 기본으로 출력이 되고 중첩 라우팅 부분을 라우팅하는경우
          Outlet에 chlidren이 자동삽입되는 구조이다.
         */}
          <Route
            path="/"
            element={<Layout isDark={isDark} setIsDark={setIsDark} />}
          >
            <Route index element={<SearchPage />}></Route>
            <Route path="/book/:bookId" element={<BookDetailPage />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

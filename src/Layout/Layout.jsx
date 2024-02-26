import React from "react";
import Header from "../pages/Header";

import MainPage from "../pages/MainPage";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />

      <MainPageStyle>
        <Outlet />
        <MainPage />
      </MainPageStyle>
    </div>
  );
};

const MainPageStyle = styled("main")`
  background-image: url("https://img.freepik.com/free-photo/marian-lake-in-the-darran-mountain-range-in-new-zealand_181624-45296.jpg?w=1380&t=st=1708979916~exp=1708980516~hmac=4fe81962dbdcd07691cf66a8d1cd9f84d05d4e3b412acec12e0912cd38cdfeb9");
  background-position: center;
  background-size:cover
 
`;

export default Layout;

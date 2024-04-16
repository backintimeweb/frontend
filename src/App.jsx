import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";
import { YearPage } from "./pages/YearPage";
import { useState } from "react";
import { Burger } from "./components/UI/burger";

function App() {
  const [headerActive, setHeaderActive] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Header active={headerActive}/>
        <Routes>
          <Route path="/years" Component={MainPage} />
          <Route path="/years/:year" Component={YearPage} />
          <Route path="*" element={<Navigate to="/years" />} />
        </Routes>
        <Burger headerActive={headerActive} setHeader={setHeaderActive}/>
      </BrowserRouter>
    </>
  );
}

export default App;

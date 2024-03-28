import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";
import { YearPage } from "./pages/YearPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/years" Component={MainPage} />
          <Route path="/years/:year" Component={YearPage} />
          <Route path="*" element={<Navigate to="/years" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

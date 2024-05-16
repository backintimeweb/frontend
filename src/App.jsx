import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { MainPage } from "./pages/MainPage";
import { YearPage } from "./pages/YearPage";
import { AboutPage } from "./pages/AboutPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/years" Component={MainPage}/>
          <Route path="/years/:year" Component={YearPage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="*" element={<Navigate to="/years" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

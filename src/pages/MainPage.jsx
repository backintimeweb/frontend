import { Card } from "../components/Card/Card";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetAllPostsQuery } from "../api/posts";
import { Loader } from "../components/UI/loader";
import { useState } from "react";

export const MainPage = ({ children }) => {
  const navigate = useNavigate();

  const { data: years, isLoading, isError } = useGetAllPostsQuery();
  const [searchQuery, setSearchQuery] = useState("");

  const onClickHandler = (year) => {
    localStorage.setItem("year", year);
    navigate(`/years/${year}`);
  };
  
  const filteredYears = years
    ? years.filter((year) =>
        year.year.toString().includes(searchQuery)
      )
    : [];

  return (
    <div className="main">
      <div className="main__flexcont">
        <h2 className="main__title">Альманах</h2>

        <NavLink to="/about" className="main__about">
          О проекте
          <InfoIcon sx={{marginLeft: "10px"}}/>
        </NavLink>
      </div>

      <input
        type="number"
        placeholder="Введите год"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="main__input"
      />

      <div className="main__list">
        {years ? (
          filteredYears.length > 0 ?
           filteredYears.map((elem, key) => (
            <Card
              key={key}
              elem={elem.year}
              onClickHandler={() => onClickHandler(elem.year)}
            />
          )) : <div>Ничего не найдено</div>
        ) : isLoading ? (
          <div className="main__loader">
            <Loader width={"100px"} height="100px" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

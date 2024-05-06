import { Card } from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useGetAllPostsQuery } from "../api/posts";
import { reverseList } from "../utils/helpers";
import { Loader } from "../components/UI/loader";

export const MainPage = ({ children }) => {
  const navigate = useNavigate();

  const { data: years, isLoading, isError } = useGetAllPostsQuery();

  const onClickHandler = (year) => {
    localStorage.setItem("year", year);
    navigate(`/years/${year}`);
  };

  return (
    <div className="main">
      <h2 className="main__title">Альманах</h2>
      {/* <input type="text" /> */}
      <div className="main__list">
        {years ? (
          reverseList([...years]).map((elem, key) => (
            <Card
              key={key}
              elem={elem.year}
              onClickHandler={() => onClickHandler(elem.year)}
            />
          ))
        ) : isLoading ? (
          <div className="main__loader">
            <Loader width={"100px"} height="100px"/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

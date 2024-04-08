import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { sliderSettings} from "../data/data";
import { useGetAllPostsQuery } from "../api/posts";
import { reverseList } from "../utils/helpers";

export const MainPage = () => {
  const navigate = useNavigate();

  const {data: years, isLoading, isError} = useGetAllPostsQuery()

  const onClickHandler = (year) => {
    localStorage.setItem("year", year)
    navigate(`/years/${year}`);
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings} className="slider">

        {years ? reverseList([...years]).map((elem, key) => (
          <Card
            key={key}
            elem={elem.year}
            onClickHandler={() => onClickHandler(elem.year)}
          />
        )) : null}
      </Slider>
    </div>
  );
};

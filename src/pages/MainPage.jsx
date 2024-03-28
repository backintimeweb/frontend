import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { sliderSettings, years } from "../data/data";

export const MainPage = () => {
  const navigate = useNavigate();

  const onClickHandler = (year) => {
    navigate(`/years/${year}`);
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings} className="slider">
        {years.map((elem, key) => (
          <Card
            key={key}
            elem={elem}
            onClickHandler={() => onClickHandler(elem)}
          />
        ))}
      </Slider>
    </div>
  );
};

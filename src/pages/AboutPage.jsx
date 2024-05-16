import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Telegram } from "@mui/icons-material";
import { Vk } from "../components/UI/vk";
import { NavLink } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="about">
      <h2 className="about__title">Альманах</h2>
      <p className="about__text">
        Проект «Альманах» представляет собой интерактивный веб-портал,
        посвящённый значимым событиям прошлого.
      </p>
      <p className="about__text">
        На главной странице отображаются карточки разных лет, при нажатии на них
        можно увидеть всю имеющуюся информацию
      </p>

      <div className="about__list">
        <a
          href="https://pay.cloudtips.ru/p/dbc8ae55"
          target="blank"
          className="about__list__link"
        >
          Поддержать донатом
        </a>

        <a
          href="https://forms.gle/AmJiosU4S5w6o1m28"
          target="blank"
          className="about__list__link"
        >
          Предложить идею
        </a>
      </div>

      <ul className="about__list">
        <li className="about__list__link" style={{ border: "none" }}>
          <a href="https://vk.com/chuchmanovthefirst" target="blank">
            <Vk />
          </a>
        </li>
        <li className="about__list__link" style={{ border: "none" }}>
          <a href="https://t.me/oliceglad" target="blank">
            <Telegram />
          </a>
        </li>
      </ul>

      <NavLink to="/years" className="about__back">
        <ArrowBackIcon sx={{width: "30px", height: "30px"}}/>
        Назад
      </NavLink>
    </div>
  );
};

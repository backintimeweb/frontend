import { NavLink } from "react-router-dom";
import s from "./Footer.module.scss";
import { Vk } from "../UI/vk";
import { Telegram } from "../UI/telegram";

export const Footer = () => {
  return (
    <header className={s.footer}>
      <NavLink to="/years" className={s.footer__title} href="#">
        Альманах
      </NavLink>

      <div className={s.footer__list}>
        <a
          href="https://pay.cloudtips.ru/p/dbc8ae55"
          target="blank"
          className={s.footer__list__link}
        >
          Поддержать донатом
        </a>

        <a
          href="https://forms.gle/AmJiosU4S5w6o1m28"
          target="blank"
          className={s.footer__list__link}
        >
          Предложить идею
        </a>

        <NavLink className={s.footer__list__link} to="/about">
          О проекте
        </NavLink>
      </div>

      <ul className={s.footer__social}>
        <li className={s.footer__social__item}>
          <a href="https://vk.com/chuchmanovthefirst" target="blank">
            <Vk />
          </a>
        </li>
        <li className={s.footer__social__item}>
          <a href="https://t.me/oliceglad" target="blank">
            <Telegram />
          </a>
        </li>
      </ul>
    </header>
  );
};

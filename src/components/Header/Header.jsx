import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { Vk } from "../UI/vk";
import { Telegram } from "../UI/telegram";
import { Cross } from "../UI/cross";
import { useEffect, useRef } from "react";

export const Header = ({ active, setHeader }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setHeader(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setHeader]);

  return (
    <header
      className={active ? `${s.header} ${s.active}` : s.header}
      ref={headerRef}
    >
      <Cross onClickHander={() => setHeader(!active)} className={s.cross}/>
      <NavLink
        to="/years"
        className={s.header__title}
        href="#"
        onClick={() => setHeader(!active)}
      >
        Альманах
      </NavLink>

      <div className={s.header__list}>
        <a
          href="https://pay.cloudtips.ru/p/dbc8ae55"
          target="blank"
          className={s.header__list__link}
        >
          Поддержать донатом
        </a>

        <a
          href="https://forms.gle/AmJiosU4S5w6o1m28"
          target="blank"
          className={s.header__list__link}
        >
          Предложить идею
        </a>
      </div>

      <ul className={s.header__social}>
        <li className={s.header__social__item}>
          <a href="https://vk.com/chuchmanovthefirst" target="blank">
            <Vk />
          </a>
        </li>
        <li className={s.header__social__item}>
          <a href="https://t.me/oliceglad" target="blank">
            <Telegram />
          </a>
        </li>
      </ul>
    </header>
  );
};

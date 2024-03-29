import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { Vk } from "../UI/vk";
import { Telegram } from "../UI/telegram";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Header = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const onLoadFuncAnim = contextSafe(() => {
    let tl = gsap.timeline();
    tl.to(`.${s.header__title}`, { duration: 1, y: 0 }, "<")
      .to(`.${s.header__list}`, { duration: 1, y: 0 }, ">")
      .to(`.${s.header__social}`, { duration: 1, y: 0 }, ">");
  });

  useEffect(() => {
    onLoadFuncAnim();
  }, []);

  return (
    <header className={s.header} ref={container}>
      <NavLink to="/years" className={s.header__title} href="#">
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

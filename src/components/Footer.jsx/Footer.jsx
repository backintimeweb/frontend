import s from './Footer.module.scss'
import { Vk } from '../UI/vk'
import { Telegram } from '../UI/telegram'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__name}>
                Вячеслав Чучманов©2024
            </div>

            <ul className={s.footer__list}>
                <li className={s.footer__list__item}>
                    <a href='https://vk.com/chuchmanovthefirst' target='blank'>
                        <Vk />
                    </a>
                </li>
                <li className={s.footer__list__item}>
                    <a href='https://t.me/oliceglad' target='blank'>
                        <Telegram />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
import s from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__list}>
                <li className={s.navbar__list__item}>
                    <a href="#main">Важные события</a>   
                </li>
                <li className={s.navbar__list__item}>
                    <a href="#memes">Мемы</a>   
                </li>
                <li className={s.navbar__list__item}>
                    <a href="#media">Медиа</a>   
                </li>
            </ul>
        </nav>
    )
}
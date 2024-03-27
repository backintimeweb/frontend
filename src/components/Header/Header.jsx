import s from './Header.module.scss'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__title} href='#'>
               Временной альманах
            </div>

            <a href='https://pay.cloudtips.ru/p/dbc8ae55' target='blank' className={s.header__link}>
                Поддержать донатом
            </a>
        </header>
    )
}
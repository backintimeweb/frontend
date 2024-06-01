import s from './Navbar.module.scss'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MmsIcon from '@mui/icons-material/Mms';

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__list}>
                <li className={s.navbar__list__item}>
                    <a href="#main" className={s.navbar__list__item__link}><NewspaperIcon /></a>   
                </li>
                <li className={s.navbar__list__item}>
                    <a href="#memes" className={s.navbar__list__item__link}><EmojiEmotionsIcon /></a>   
                </li>
                <li className={s.navbar__list__item}>
                    <a href="#media" className={s.navbar__list__item__link}><MmsIcon /></a>   
                </li>
            </ul>
        </nav>
    )
}
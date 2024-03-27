import s from './Card.module.scss'

export const Card = ({elem, onClickHandler}) => {
    return (
        <div className={s.card} onDoubleClick={onClickHandler} href='https://google.com'>
            {elem}
        </div>
    )
}
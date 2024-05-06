import { photos } from "../../data/data";
import s from "./Card.module.scss";

export const Card = ({ elem, onClickHandler }) => {
  return (
    <div
      className={s.card}
      onClick={() => {
        onClickHandler();
      }}
    >
      <img src={photos[elem]} alt={elem} className={s.card__img}/>
      <div className={s.card__year}>{elem}</div>
    </div>
  );
};

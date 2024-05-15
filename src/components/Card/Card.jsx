
import s from "./Card.module.scss";

export const Card = ({ elem, onClickHandler }) => {
  return (
    <div
      className={s.card}
      onClick={() => {
        onClickHandler();
      }}
    >
      <div className={s.card__year}>{elem}</div>
    </div>
  );
};

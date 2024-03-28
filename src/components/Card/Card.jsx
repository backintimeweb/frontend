import { useEffect, useState } from "react";
import { photos } from "../../data/data";
import s from "./Card.module.scss";


export const Card = ({ elem, onClickHandler }) => {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const foundPhoto = photos.find((ph) => ph.year === elem);
    if (foundPhoto) {
      setPhoto(foundPhoto.photo);
    }
  }, [elem]);

  return (
    <div className={s.card} onDoubleClick={onClickHandler}>
      {photo ? (
        <>
          <div className={s.card__year}>{elem}</div>
          <img src={photo} className={s.card__img}/>
        </>
      ) : (
        <div className={s.card__year}>{elem}</div>
      )}
    </div>
  );
};

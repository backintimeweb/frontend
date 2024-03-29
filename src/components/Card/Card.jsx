import { useEffect, useState, useRef } from "react";
import { photos } from "../../data/data";
import s from "./Card.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Card = ({ elem, onClickHandler }) => {
  const [photo, setPhoto] = useState("");
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const onLoadFuncAnim = contextSafe(() => {
    let tl = gsap.timeline();
    tl.to(`.${s.card__img}`, { duration: 1, opacity: 1 })
      .to(".anim", {
        duration: 1,
        y: 0,
      })
      .to(`.${s.card__tag}`, { duration: 1, y: 0 });
  });

  const onNotLoadFuncAnim = contextSafe(() => {
    let tl = gsap.timeline();
    tl.to(`.${s.card__img}`, { duration: 1, opacity: 0 })
  });

  useEffect(() => {
    const foundPhoto = photos.find((ph) => ph.year === elem);
    if (foundPhoto) {
      setPhoto(foundPhoto.photo);
      setTimeout(() => onLoadFuncAnim(), 100);
    }
  }, [elem]);

  return (
    <div
      className={s.card}
      onDoubleClick={() => {
        onNotLoadFuncAnim();
        setTimeout(() => onClickHandler(), 1500);
      }}
      ref={container}
    >
      {photo ? (
        <>
          <div className={`${s.card__year} anim`}>{elem}</div>
          <div className={s.card__tag}>Нажми на карточку два раза</div>
          <img src={photo} className={s.card__img} />
          {/* <div className={s.card__tag}>*изображение сгенерировано нейросетью <a href="https://www.sberbank.com/promo/kandinsky/" style={{color: 'violet'}}>kandinsky</a></div> */}
        </>
      ) : (
        <div className={`${s.card__year} anim`}>{elem}</div>
      )}
    </div>
  );
};

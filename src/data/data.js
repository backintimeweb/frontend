import logo2023 from "../assets/2023.png";
import logo2022 from "../assets/2022.jpg";
import logo2021 from "../assets/2021.png";
import logo2020 from "../assets/2020.png";
export const years = [2023, 2022, 2021, 2020];

export const photos = [
  {
    year: 2023,
    photo: logo2023,
  },
  {
    year: 2022,
    photo: logo2022,
  },
  {
    year: 2021,
    photo: logo2021,
  },
  {
    year: 2020,
    photo: logo2020,
  },
];

export var sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const scrollOptions = {
  duration: 500,
  smooth: true,
};


export let fetchYear;
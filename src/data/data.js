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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
};

export const scrollOptions = {
  duration: 500,
  smooth: true,
};

export const desc = `
  <div className="year__container">
        <h2>Важные события</h2>
  
        <ul>
          <li>
            <h3>Чебурашка</h3>
            <img src="https://rs.gov.ru/app/uploads/2023/08/7-1.jpg" />
  
            <a href="https://www.kinopoisk.ru/film/4370148/"> Посмотреть </a>
            <p>
              Фильм стал самым
              <a
                href="https://ru.wikipedia.org/wiki/Список_самых_кассовых_фильмов_в_России#Список_самых_кассовых_фильмов_российского_кинопроката"
                id="notimlink"
              >
                кассовым
              </a>
              в истории российского кинематрофа.
            </p>
            <p>
              На небольшой приморский городок обрушивается дождь из
              апельсинов, а вместе с фруктами с неба падает неизвестный науке
              мохнатый непоседливый зверёк. Одержимое апельсинами животное
              оказывается в домике нелюдимого старика-садовника Геннадия,
              который из вредности решает оставить его жить у себя, так как
              местная богачка жаждет заполучить необычного зверя для своей
              избалованной внучки. Также эта коварная женщина, владелица
              кондитерской фабрики, пытается выведать секрет шоколада у
              хозяйки маленького магазинчика — дочери Геннадия, много лет
              обиженной на отца.
            </p>
          </li>
  
          <li>
            <h3>Team Spirit - победители</h3>
            <img src="https://3dnews.ru/assets/external/illustrations/2023/10/30/1095198/dota2_team_spirit_winners.jpg" />
  
            <a href="https://www.youtube.com/watch?v=OC1ggQt5Wms">
              Смотреть гранд финал
            </a>
  
            <p>
              29 октября, прошли финальные матчи The International 2023 по
              Dota 2 с призовым фондом в размере $3,1 млн. Сербская команда с
              российскими корнями Team Spirit выиграла турнир, победив в
              финале европейскую Gaimin Gladiators со счётом 3:0 и забрав
              домой $1,4 млн.
            </p>
          </li>
  
          <li>
            <h3>Землетрясение в Турции</h3>
  
            <iframe
              width="700"
              height="527"
              src="https://www.youtube.com/embed/W7AljHpJZ0Q"
              title="Турция: Самое страшное землетрясение века - Репортаж с Места событий / The Люди / @anton_lyadov"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
  
            <p>
              6 февраля 2023 года с интервалом в девять часов на юго-востоке
              Турции произошли два мощных землетрясения. Эпицентр первого, с
              магнитудой 7,8 (± 0,1), находился в районе Шехиткамиль в
              Газиантепе (Турция), эпицентр второго, с магнитудой 7,5 (± 0,1),
              — в районе Экинёзю в Кахраманмараше (Турция). После
              землетрясений было зарегистрировано несколько тысяч повторных
              толчков, с магнитудой самого сильного до 6,7[1]. В результате
              катастрофы в Турции погибло свыше 50 500 человек[4][5], а в
              Сирии — 8476 человек[6], ещё десятки тысяч пострадали. В Турции
              были объявлены чрезвычайное положение и семидневный траур.
            </p>
          </li>
  
          <li>
            <h3>Самолет в поле</h3>
  
            <iframe
              width="700"
              height="527"
              src="https://www.youtube.com/embed/zXpXGZQCedo"
              title='Посадка на пшеничное поле "Уральских авиалиний". Мнения профессионалов. 12 сентября 2023 года.'
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
  
            <p>
              Самолет Airbus A320 авиакомпании «Уральские авиалинии»,
              выполнявший утром 12 сентября рейс из Сочи в Омск, совершил
              экстренную посадку в пшеничном поле в Убинском районе
              Новосибирской области. На борту находились 161 пассажир и шесть
              членов экипажа. В результате происшествия никто не погиб.
            </p>
  
            <h4>Причина</h4>
  
            <p>
              В пресс-службе правительства Омской области со ссылкой на данные
              окружной транспортной прокуратуры позднее сообщили, что у
              самолета возникли проблемы с гидравликой, а у пилотов –
              опасения, что откажут тормоза. В связи с этим экипаж принял
              решение совершать посадку в Новосибирске, где длиннее
              взлетно-посадочная полоса.
            </p>
          </li>
  
          <li>
            <h3>Атомное сердце</h3>
  
            <img src="https://assets.xboxservices.com/assets/0b/5b/0b5bcbae-c4cb-40e7-a539-f0d603b65c6a.jpg?n=Atomic-Heart_GLP-Page-Hero-1084_1920x1080.jpg" />
  
            <a href="https://vkplay.ru/play/game/atomic_heart/?_1ld=3416117_2072934&_1lp=1&mt_link_id=p85696">
              Играть
            </a>
  
            <p>
              Компьютерная игра в жанре шутера от первого лица с элементами
              ролевой игры, разработанная студией Mundfish.
            </p>
  
            <p>
              Действие Atomic Heart происходит в альтернативном СССР, в
              котором страна вышла на массовое производство роботов,
              обслуживающих население страны. Главным героем игры является
              майор Сергей Нечаев — агент советской разведки под псевдонимом
              П-3, прибывший на предприятие по производству роботов под
              кодовым названием «3826», находящемся в КазССР. По неизвестной
              причине роботы на объекте вышли из строя и напали на персонал, а
              затем захватили «3826». Теперь майору Нечаеву предстоит не
              только разрешить ситуацию и остановить роботов, но и выяснить
              причину произошедшего. Игра включает в себя сражения с видом от
              первого лица; в течение игры персонаж может находить и
              конструировать разнообразное оружие. По словам генерального
              директора Mundfish Роберта Багратуни, игровой мир представляет
              собой «весь Советский Союз, широкий круг» от Арктики на севере
              до Алтайских гор на юге; локации игры, такие как подземные и
              надземные объекты «3826», разбросаны по карте и связаны
              железными дорогами.
            </p>
          </li>
  
          <li>
            <h3>Нейросети</h3>
  
            <img src="https://s0.rbk.ru/v6_top_pics/resized/1280xH/media/img/9/81/756696246816819.webp" />
  
            <p>В этот год вышло огромное количество нейронных сетей.</p>
  
            <div>
              В 2023 году почти все IT-гиганты представили свои LLM и
              чат-ботов, основанных на них:
            </div>
  
            <ul>
              <li>
                <a
                  href="https://skillbox.ru/media/code/luchshie-alternativy-chatgpt-znakomimsya-s-bard-claude-i-gigachat/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox"
                  id="notimlink"
                >
                  Claude
                </a>
                от Anthropic;
              </li>
  
              <li>
                <a
                  href="https://skillbox.ru/media/code/neyroset-gigachat-ot-sbera-poyavilas-v-otkrytom-dostupe/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox"
                  id="notimlink"
                >
                  GigaChat
                </a>
                от «Сбера» и модель
                <a
                  href="https://skillbox.ru/media/code/yandeks-predstavil-obnovlenie-yazykovoy-modeli-yandexgpt/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox"
                  id="notimlink"
                >
                  YaGPT 2
                </a>
                от «Яндекса»;
              </li>
  
              <li>
                <a
                  href="https://skillbox.ru/media/code/luchshie-alternativy-chatgpt-znakomimsya-s-bard-claude-i-gigachat/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox"
                  id="notimlink"
                >
                  Bard
                </a>
                от Google;
              </li>
            </ul>
  
            <a href="https://skillbox.ru/media/code/vy-nakhodites-zdes-itogi-2023-goda-v-sfere-ii/">
              Подробнее
            </a>
          </li>
        </ul>
  
        <h2>Окей, а как дела с мемами?</h2>
  
        <ol>
          <li>
            <h3>Let me do it for you</h3>
  
            <img src="https://i1.sndcdn.com/artworks-6ibwybgttgXxkEvL-HnIymQ-t500x500.jpg" />
  
            <a href="https://www.youtube.com/watch?v=XCqLuEAmNW8&t=1s">
              Смотреть
            </a>
  
            <p>
              Борзая по кличке Сахарок так понравилась интернету, что ее морду
              стали видеть везде: в куске пиццы, карандаше или смесителе. А на
              фон добавляли надрывный кавер Мисс Пигги из «Маппет-шоу» на
              песню Cellophane исполнительницы FKA Twig. Часто Сахарок
              приходил на помощь, доставая предметы с помощью длинного носа.
              За эту преданность он и остался в сердцах пользователей
              соцсетей.
            </p>
          </li>
  
          <li>
            <h3>Сигма</h3>
  
            <p>
              Сигмы одинокие волки, сверхуспешные трудоголики, образцы
              маскулинности, которые с уважением относятся к окружающим.
            </p>
  
            <iframe
              width="700"
              height="527"
              src="https://www.youtube.com/embed/OvvY112ME6U"
              title="я очень крутой сигма😈"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </li>
  
          <li>
            <h3>Образовый самец</h3>
  
            <p>
              С премьеры «Образцового самца» прошло более 20 лет, а мемный
              потенциал картины в полном объеме раскрыли только в 2023 году,
              когда дуэль взглядов актеров Бена Стиллера и Оуэна Уилсона
              сделали мемным шаблоном. В мемах Стиллер олицетворяет ничего не
              подозревающего человека, который был счастлив, пока не
              столкнулся с Уилсоном — неким препятствием или разочаровывающим
              обстоятельством.
            </p>
            <iframe
              width="700"
              height="428"
              src="https://www.youtube.com/embed/5MX2YsIJ07w"
              title="мем зуландер  ||   mem zoolander  || #zoolandermeme"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </li>
  
          <li>
            <h3>Финн щелкает пальцем</h3>
  
            <p>
              Отрывок из промо к третьему сезону «Очень странных дел», где
              Финн Вулфхард щелкает пальцами, широко расходился благодаря
              универсальности. С помощью шаблона иллюстрировали реакцию на
              перемены в жизни, способность быстро переключаться или,
              наоборот, иронично подметить отсутствие каких-либо изменений.
            </p>
  
            <iframe
              width="700"
              height="527"
              src="https://www.youtube.com/embed/cl8ZRdXenCg"
              title="Финн Вулфард щелкает пальцами - подборка мемов из Тиктока"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </li>
  
          <li>
            <h3>уффффффф, КЕФТЕМЕЕ</h3>
  
            <p>Бархатные тяги, ну тут даже объяснять и не надо)</p>
  
            <iframe
              width="700"
              height="527"
              src="https://www.youtube.com/embed/0XdGTiwwta0"
              title="БАРХАТНЫЕ ТЯГИ мем (оригинал)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </li>
  
          <li>
            <h3>Да поебать мне</h3>
  
            <p>Не буду здесь ничего писать, поебать мне</p>
  
            <img src="https://opis-cdn.tinkoffjournal.ru/mercury/best-memes-2023-05.3dhttr0blzgd..jpg?preset=image_570w_2x" />
          </li>
  
          <li>
            <h3>Turn Around</h3>
  
            <iframe
              width="700"
              height="527"
              src="https://www.youtube.com/embed/3BfG8QONdCI"
              title="TURN AROUND - original meme"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </li>
        </ol>
  
        <h2>Что мы слушали?</h2>
  
        <ol id="flex">
          <li>
            <a href="https://music.yandex.ru/album/25163882/track/112140181">
              Где прошла ты
            </a>
          </li>
          <li>
            <a href="https://music.yandex.ru/artist/41052">Король и Шут</a>
          </li>
          <li>
            <a href="https://music.yandex.ru/album/26697445">
              Плохая девочка
            </a>
          </li>
          <li>
            <a href="https://music.yandex.ru/album/24375438/track/109140203">
              За деньги да
            </a>
          </li>
          <li>
            <a href="https://music.yandex.ru/album/25361122/track/112632320">
              ASPHALT 8
            </a>
          </li>
          <li>
            <a href="https://music.yandex.ru/album/27558714/track/115517682">
              Царица
            </a>
          </li>
          <li>
            <a href="https://music.yandex.ru/album/28570790/track/113376105">
              Танцы
            </a>
          </li>
          <li>
            <a href="https://music.yandex.ru/album/24982188/track/111643091">
              Комарово (Phonk)
            </a>
          </li>
        </ol>
  
        <h2>А какие фильмы смотрели?</h2>
        <ol id="flex">
          <li>
            <a href="https://www.kinopoisk.ru/film/4448519/">Вызов</a>
          </li>
          <li>
            <a href="https://www.kinopoisk.ru/film/4771048/">
              Гром: Трудное детство
            </a>
          </li>
          <li>
            <a href="https://www.kinopoisk.ru/film/4664634/">Оппенгеймер</a>
          </li>
          <li>
            <a href="https://www.kinopoisk.ru/film/478052/">Барби</a>
          </li>
        </ol>
  
        <h2>А что дальше?</h2>
  
        <h3>Дальше - больше!</h3>
      </div>
  `;

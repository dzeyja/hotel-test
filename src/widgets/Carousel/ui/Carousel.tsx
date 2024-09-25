import { Button } from 'react-bootstrap'; 
import Carousel from 'react-bootstrap/Carousel'; 
import cls from './Carousel.module.scss'; 
import { Link } from 'react-router-dom'; 

export function Carousele() { 
  return ( 
    <Carousel fade> 
      <Carousel.Item> 
        <div className={cls.imageWrapper}> 
          <img src='https://kazanriviera.ru/upload/resize_cache/iblock/0f1/960_500_2/6gepburt7x4sb5qutd15lsvb1itf2a34.jpg' alt="Отель на берегу" className='div'/> 
        </div> 
        <Carousel.Caption> 
          <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" alt="Логотип отеля" /> 
          <p>Добро пожаловать в наш уютный отель, где каждый гость почувствует себя как дома. У нас есть все условия для комфортного отдыха.</p> 
          <Link to='/booked-form'> 
            <Button >Забронировать</Button> 
          </Link> 
        </Carousel.Caption> 
      </Carousel.Item> 

      <Carousel.Item> 
        <div className={cls.imageWrapper}> 
          <img src='https://kazanriviera.ru/upload/resize_cache/iblock/eac/960_500_2/z4im361ko2lqf97xl9qmufaq1ygma8wa.jpg' alt="Номер в отеле" className='div'/> 
        </div> 
        <Carousel.Caption> 
          <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" alt="Логотип отеля" /> 
          <p>Наши номера оснащены современными удобствами, чтобы сделать ваше пребывание максимально комфортным и приятным.</p> 
          <Link to='/booked-form'> 
            <Button>Забронировать</Button> 
          </Link> 
        </Carousel.Caption> 
      </Carousel.Item> 

      <Carousel.Item> 
        <div className={cls.imageWrapper}> 
          <img src='https://kazanriviera.ru/upload/resize_cache/iblock/0d2/960_500_2/86x6p4lalrfj1wpfl09tzrui7dpkslpv.jpg' alt="Аквапарк" className='div' /> 
        </div> 
        <Carousel.Caption> 
          <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" alt="Логотип отеля" /> 
          <p>Погрузитесь в атмосферу веселья и развлечений в нашем аквапарке. Это идеальное место для отдыха всей семьи!</p> 
          <Link to='/booked-form'> 
            <Button>Забронировать</Button> 
          </Link> 
        </Carousel.Caption> 
      </Carousel.Item> 
    </Carousel> 
  ); 
}

import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import cls from './Carousel.module.scss'

export function Carousele() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className={cls.imageWrapper}>
          <img src='https://kazanriviera.ru/upload/resize_cache/iblock/0f1/960_500_2/6gepburt7x4sb5qutd15lsvb1itf2a34.jpg' alt="" className='div'/>
        </div>
        <Carousel.Caption>
          <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" alt="" />
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button>Забранировать номер</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={cls.imageWrapper}>
          <img src='https://kazanriviera.ru/upload/resize_cache/iblock/eac/960_500_2/z4im361ko2lqf97xl9qmufaq1ygma8wa.jpg' alt="" className='div'/>
        </div>
        <Carousel.Caption>
          <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button>Забранировать номер</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={cls.imageWrapper}>
          <img src='https://kazanriviera.ru/upload/resize_cache/iblock/0d2/960_500_2/86x6p4lalrfj1wpfl09tzrui7dpkslpv.jpg' alt="" className='div' />
        </div>
        <Carousel.Caption>
          <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" alt="" />
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        <Button>Забранировать номер</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

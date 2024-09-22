import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img2 from 'shared/assets/images/81lbufimun9mf6oop32tx7l049kgaejv.jpg'
import img3 from 'shared/assets/images/z82essu344e0ua55es494wm1tx2h223p.jpg'

export function Carousele() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='https://kazanriviera.ru/upload/resize_cache/iblock/0f1/960_500_2/6gepburt7x4sb5qutd15lsvb1itf2a34.jpg' alt="" className='div'/>
        <Carousel.Caption>
          <h3>РИВЬЕРА</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button>Забранировать номер</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://kazanriviera.ru/upload/resize_cache/iblock/eac/960_500_2/z4im361ko2lqf97xl9qmufaq1ygma8wa.jpg' alt="" className='div'/>

        <Carousel.Caption>
          <h3>РИВЬЕРА</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button>Забранировать номер</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://kazanriviera.ru/upload/resize_cache/iblock/0d2/960_500_2/86x6p4lalrfj1wpfl09tzrui7dpkslpv.jpg' alt="" className='div' />
        <Carousel.Caption>
          <h3>РИВЬЕРА</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        <Button>Забранировать номер</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

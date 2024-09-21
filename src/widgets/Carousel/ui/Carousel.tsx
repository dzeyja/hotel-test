import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img from 'shared/assets/images/6gepburt7x4sb5qutd15lsvb1itf2a34.jpg'
import img2 from 'shared/assets/images/81lbufimun9mf6oop32tx7l049kgaejv.jpg'
import img3 from 'shared/assets/images/z82essu344e0ua55es494wm1tx2h223p.jpg'

export function Carousele() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={img} alt="" className='div'/>
        <Carousel.Caption>
          <h3>РИВЬЕРА</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button>Забранировать номер</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" className='div'/>

        <Carousel.Caption>
          <h3>РИВЬЕРА</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button>Забранировать номер</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" className='div' />
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

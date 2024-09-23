import { Button } from 'react-bootstrap'
import cls from './RoomCart.module.scss'
import { IRooms } from '../api/rooms'

interface RoomCartProps {
    room: IRooms
}

export const RoomCart = ({room}: RoomCartProps) => {
  return (
    <div className={cls.roomCard}>
        <div className={cls.imageWrapper}>
            <img src={room.img} className={cls.img}  />
        </div>
        <div className={cls.textContent}>
            <div className={cls.roomTitle}>
                {room.title}
            </div>
            <div className={cls.roomTexts}>
                {room.texts}
            </div>
            <div className={cls.roomPrice}>
                {room.roomPrice}
            </div>
            <div className={cls.actions}>
                <Button>Забронировать</Button>
                <Button>Подробнее</Button>
            </div>
        </div>
    </div>
  )
}

import { Button } from "react-bootstrap"
import rooms from "../api/rooms"
import cls from './RoomsList.module.scss'
import { RoomCart } from "../RoomCart/RoomCart"

export const RoomsList = () => {
  return (
    <div className={cls.roomsWrapper}>
    {rooms.map(room => (
        <RoomCart key={room.id} room={room}/>
    ))}
</div>
  )
}

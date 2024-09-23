import { classNames } from "shared/lib/classNames/classNames"
import cls from './RoomsPage.module.scss'
import { RoomsList } from "widgets/Rooms/RoomsList/RoomsList"

 
export const RoomsPage = () => {
  return (
    <div className={classNames(cls.RoomsPage)}>
        <div className="container">
            <div className={cls.title}>Наши номера</div>
            <RoomsList />
        </div>
    </div>
  )
}

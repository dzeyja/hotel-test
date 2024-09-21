import { classNames } from 'shared/lib/classNames/classNames'
import cls from './RoomPage.module.scss'

interface RoomPageProps {
    className?: string
}

export function RoomPage({className}: RoomPageProps) {
  return (
    <div className={classNames(cls.RoomPage, {}, [className])}>
       Rooms Page
    </div>
  )
}

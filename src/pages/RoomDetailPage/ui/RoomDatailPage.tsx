import { useParams } from "react-router-dom"
import cls from './RoomDatailPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import rooms from "widgets/Rooms/api/rooms"

export const RoomDatailPage = () => {
    const { id } = useParams()

    const room = rooms.find((room) => room.id === Number(id))

    console.log(room)

    return (
        <div className={classNames(cls.RoomDetailPage)}>
            <div className="container">
                <div className={cls.title}>{room.title}</div>
                <div className={cls.roomDetails}>
                    <div className={cls.imgWrapper}>
                        <img className={cls.roomImg} src={room.roomDetail.img} alt={room.title} />
                    </div>
                    <div className={cls.textContent}>
                        <div className={cls.desc}>
                            <div>
                                Описание
                            </div>
                            {room.roomDetail.desc}
                        </div>

                        <div className={cls.categoryTitle}>
                            В стоимость номера включено (тариф «Все включено»):
                        </div>
                        <ul className={cls.lists}>
                            {room.roomDetail.tarif.map(el => <li>{el}</li>)}
                        </ul>

                        <div className={cls.categoryTitle}>
                            Оснащение ванной
                        </div>
                        <ul className={cls.lists}>
                            {room.roomDetail.bath.map(el => <li>{el}</li>)}
                        </ul>

                        <div className={cls.categoryTitle}>
                            Прочее
                        </div>
                        <ul className={cls.lists}>
                            {room.roomDetail.other.map(el => <li>{el}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     )
}

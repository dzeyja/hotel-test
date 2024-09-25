import { classNames } from 'shared/lib/classNames/classNames'
import cls from './RoomsPreView.module.scss'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface RoomsPreViewProps {
    className?: string
}

export const RoomsPreView = ({className}:RoomsPreViewProps) => {
  return (
    <div className="container">
        <div className={classNames(cls.RoomsPreView, {}, [className])}>
            <div className={cls.roomsHeader}>
                <div className={cls.title}>
                    Наши номера
                </div>
                <Link to='/rooms'>
                    <Button>
                        Все номера
                    </Button>
                </Link>
            </div>
            <div className={cls.roomsContent}>
                <div className={cls.roomCart}>
                    <img className={cls.img} src="https://kazanriviera.ru/upload/resize_cache/iblock/a43/960_500_2/tfy09eelda8gwbnlm1uiwxioy5jgxhg2.jpg" alt="" />
                    <div className={cls.textContent}>
                        <div className={cls.cardTitle}>
                            Комфорт
                        </div>
                        <div className={cls.cardSuptitle}>
                            Небольшой уютный однокомнатный номер. Оснащен всем необходимым для продуктивной работы и полноценного отдыха.
                        </div>
                        <div className={cls.roomPrice}>
                            Стоимость номера от 13 000 РУБ./сутки
                        </div>
                    </div>
                </div>
                <div className={cls.roomCart}>
                    <img className={cls.img} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/193982181.jpg?k=89827a4feeca832eab408f9d9d9096a668a8c8d0ea1c936456bc845fb855679f&o=&hp=1" alt="" />
                    <div className={cls.textContent}>
                        <div className={cls.cardTitle}>
                            Люкс
                        </div>
                        <div className={cls.cardSuptitle}>
                        Просторный, светлый 2-х комнатный номер отличается элегантным оформлением, качественной отделкой и видом на новый район города
                        </div>
                        <div className={cls.roomPrice}>
                            Стоимость номера от 25 000 РУБ./сутки
                        </div>
                    </div>
                </div>
                <div className={cls.roomCart}>
                    <img className={cls.img} src="https://kazanriviera.ru/upload/resize_cache/iblock/679/960_500_2/mpga2mmka7szccl19q2ye2wt7jr8ai3j.jpg" alt='' />
                    <div className={cls.textContent}>
                        <div className={cls.cardTitle}>
                            Стандарт Double
                        </div>
                        <div className={cls.cardSuptitle}>
                            Светлый уютный однокомнатный номер. Оснащен всем необходимым для продуктивной работы и полноценного отдыха.
                        </div>
                        <div className={cls.roomPrice}>
                            Стоимость номера от 14 100 РУБ./сутки
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

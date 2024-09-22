import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Carts.module.scss'

interface CartsProps {
    className?: string
}

export const Carts = ({className}: CartsProps) => {
  return (
    <div className="container">
        <div className={classNames(cls.Carts, {}, [className])}>
            <div className={cls.Cart}>
                <img src="http://dauksh.fastsite.ru/themes/corp-2018/images/about/cr.png" alt="" />
                <div className={cls.title}>
                    Комфортабельные номера
                </div>
                <div className={cls.suptitle}>
                    В каждом номере кондиционер, 
                    телевизор, холодильник, 
                    санузел с душем и балкон
                </div>
            </div>
            <div className={cls.Cart}>
                <img src="http://dauksh.fastsite.ru/themes/corp-2018/images/about/eco.png" alt="" />
                <div className={cls.title}>
                    Доступные цены
                </div>
                <div className={cls.suptitle}>
                    Современная комфортабельная гостиница с доступными ценами, 
                    высоким уровнем обслуживания
                </div>
            </div>
            <div className={cls.Cart}>
                <img src="http://dauksh.fastsite.ru/themes/corp-2018/images/about/list.png" alt="" />
                <div className={cls.title}>
                    Широкий спектр услуг
                </div>
                <div className={cls.suptitle}>
                    Центр красоты и здоровья, организация встреч и 
                    семинаров, экскурсионные услуги
                </div>
            </div>
        </div>
    </div>
  )
}

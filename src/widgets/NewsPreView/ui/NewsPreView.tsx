import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NewsPreView.module.scss'
import { Button } from 'react-bootstrap'

interface NewsPreViewProps {
    className?: string
}

export const NewsPreView = ({ className }: NewsPreViewProps) => {
  return (
    <div className={classNames(cls.NewsPreView, {}, [className])}>
      <div className="container">
        <div className={cls.newsPreView}>
          <div className={cls.title}>
            Новости
          </div>
        </div>
        <div className={cls.contentNews}>
          <div className={cls.newsCard}>
            <div className={cls.date}>
              25.09.2024
            </div>
            <div className={cls.cardTitle}>
              Открытие нового спа-комплекса
            </div>
            <div className={cls.cardSuptitle}>
              Отель «Ривьера» рад сообщить об открытии нового спа-комплекса! Теперь наши гости могут насладиться полноценным отдыхом в новом комплексе с бассейнами, саунами и массажными кабинетами.
            </div>
          </div>
          <div className={cls.newsCard}>
            <div className={cls.date}>
              15.09.2024
            </div>
            <div className={cls.cardTitle}>
              Специальное предложение осенью
            </div>
            <div className={cls.cardSuptitle}>
              С 1 октября по 30 ноября 2024 года гости отеля могут воспользоваться скидкой 20% на все номера. Забронируйте заранее и проведите осенние каникулы с комфортом в «Ривьере».
            </div>
          </div>
          <div className={cls.newsCard}>
            <div className={cls.date}>
              01.09.2024
            </div>
            <div className={cls.cardTitle}>
              Новое меню в ресторане отеля
            </div>
            <div className={cls.cardSuptitle}>
              Шеф-повар нашего ресторана разработал новое сезонное меню с акцентом на местные продукты. Приглашаем попробовать свежие блюда и насладиться уникальными вкусами!
            </div>
          </div>
          <div className={cls.newsCard}>
            <div className={cls.date}>
              10.08.2024
            </div>
            <div className={cls.cardTitle}>
              Реконструкция бассейна
            </div>
            <div className={cls.cardSuptitle}>
              Завершена реконструкция бассейна на территории отеля «Ривьера». Новый дизайн и усовершенствованная система фильтрации обеспечат комфортный и безопасный отдых для всех наших гостей.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

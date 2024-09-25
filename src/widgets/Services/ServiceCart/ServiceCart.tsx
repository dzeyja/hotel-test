import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ServiceCart.module.scss'
import { IService } from '../api/services'

interface ServiceCartProps {
    className?: string
    service: IService
}

export const ServiceCart = ({className, service}: ServiceCartProps) => {
  return (
    <div className={classNames(cls.ServiceCart, {}, [className])}>
        <div className={cls.serviceTitle}>
            {service.title}
        </div>
        <div className={cls.desc}>
            {service.desc}
        </div>
    </div>
  )
}

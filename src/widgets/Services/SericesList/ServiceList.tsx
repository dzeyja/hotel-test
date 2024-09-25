import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ServiceList.module.scss'
import services from '../api/services'
import { ServiceCart } from '../ServiceCart/ServiceCart'

interface ServiceListProps {
    className?: string
}
 
export const ServiceList = ({className}:ServiceListProps) => {
  return (
    <div className={classNames(cls.ServiceList, {}, [className])}>
        {services.map(service => <ServiceCart key={service.title} service={service}/>)}
    </div>
  )
}

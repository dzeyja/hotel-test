import cls from './ServicesPage.module.scss'
import { ServiceList } from 'widgets/Services'

export const ServicesPage = () => {
  return (
    <div className="container">
        <div className={cls.title}>Наши услуги</div>
        <ServiceList />
    </div>
  )
}

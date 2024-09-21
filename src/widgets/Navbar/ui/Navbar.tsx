import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className="container">
            <nav className={cls.navigation}>
                <div className={cls.logo}>
                    РИВЬЕРА
                </div>
                <div className={cls.links}>
                    <Link to='/'>ГЛАВНАЯ</Link>
                    <Link to='/about'>О НАС</Link>
                    <Link to='/rooms'>НОМЕРА</Link>
                    <Link to='/prices'>ЦЕНЫ</Link>
                    <Link to='/services'>УСЛУГИ</Link>
                    <Link to='/gallery'>ФОТОГАЛЕРЕЯ</Link>
                    <Link to='/news'>НОВОСТИ</Link>
                    <Link to='/reviews'>ОТЗЫВЫ</Link>
                    <Link to='/contacts'>КОНТАКТЫ</Link>
                </div>
            </nav>
         </div>
    </div>
  )
}

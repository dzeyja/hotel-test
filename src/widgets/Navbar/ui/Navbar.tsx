import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import Logo from 'shared/assets/icons/scb804piu7r52v1r1lf3o79dqtanu837.svg'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className="container">
            <nav className={cls.navigation}>
                <Link to='/hotel-test'>
                    <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" width={130} alt="" />
                </Link>
                {/* <Logo className={cls.logo}/> */}
                <div className={cls.links}>
                    <Link to='/about'>О НАС</Link>
                    <Link to='/rooms'>НОМЕРА</Link>
                    <Link to='/services'>УСЛУГИ</Link>
                    <Link to='/restourants'>РЕСТОРАНЫ</Link>
                    <Link to='/news'>НОВОСТИ</Link>
                    <Link to='/reviews'>ОТЗЫВЫ</Link>
                    <Link to='/contacts'>КОНТАКТЫ</Link>
                </div>
            </nav>
         </div>
    </div>
  )
}

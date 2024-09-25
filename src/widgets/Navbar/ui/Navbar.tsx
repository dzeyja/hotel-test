import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import Logo from 'shared/assets/icons/scb804piu7r52v1r1lf3o79dqtanu837.svg'
import { Button } from 'react-bootstrap'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className="container">
            <nav className={cls.navigation}>
                <Link to='/'>
                    <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" width={130} alt="" />
                </Link>
                {/* <Logo className={cls.logo}/> */}
                <div className={cls.links}>
                    <Link to='/about'>О НАС</Link>
                    <Link to='/rooms'>НОМЕРА</Link>
                    <Link to='/services'>УСЛУГИ</Link>
                    <Link to='/restourants'>РЕСТОРАНЫ</Link>
                    <Link to='/contacts'>КОНТАКТЫ</Link>
                </div>
                <Link to='/booked-form'>
                    <Button>Забронировать</Button>
                </Link>
            </nav>
         </div>
    </div>
  )
}

import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

interface FooterProps {
    className?: string
}

export const Footer = ({className}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src="https://kazanriviera.ru/upload/iblock/675/scb804piu7r52v1r1lf3o79dqtanu837.svg" alt="Логотип" />
          <p>Отель Ривьера</p>
        </div>
        <div className={styles.footerNav}>
          <h4>Навигация</h4>
          <ul>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/about'>О нас</Link></li>
            <li><Link to='/rooms'>Номера</Link></li>
            <li><Link to='/services'>Услуги</Link></li>
            <li><Link to='/restourants'>Рестораны</Link></li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h4>Контакты</h4>
          <p>Адрес: ул. Ленина, д. 10</p>
          <p>Телефон: <a href="tel:+79001234567">+7 (900) 123-45-67</a></p>
          <p>Email: <a href="mailto:info@riviera.com">info@riviera.com</a></p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Отель Ривьера. Все права защищены.</p>
      </div>
    </footer>
  )
}

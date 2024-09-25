import { Button } from 'react-bootstrap'
import cls from './BookedForm.module.scss'

export const BookedForm = () => {
  return (
    <form className={cls.BookedForm}>
        <label htmlFor="name">ФИО (обязательно)</label>
        <input id="name" type="text" />
        <label htmlFor="number">Номер телефона (с кодом) (обязательно)</label>
        <input id="number" type="text" />
        <label htmlFor="email">Email (обязательно)</label>
        <input id="email" type="text" />
        <label htmlFor="date">Дата заезда (обязательно)</label>
        <input id="date" type="date" />
        <label htmlFor="count">Количество человек</label>
        <input type="text" id="count"/>
        <label htmlFor="message">Оставьте сообщение</label>
        <input id="message" />
        <Button>Отправить заявку</Button>
    </form>
  )
}


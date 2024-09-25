import { BookedForm } from 'widgets/BookedForm'
import cls from './BookedFormPage.module.scss'

export const BookedFormPage = () => {
  return (
    <div className={cls.BookedFormPage}>
        <div className="container">
            <div className={cls.title}>
                Забронировать номер
            </div>
            <BookedForm />
        </div>
    </div>
  )
}

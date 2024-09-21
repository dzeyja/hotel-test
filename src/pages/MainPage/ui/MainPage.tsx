import cls from './MainPage.module.scss'
import { Carousele } from 'widgets/Carousel'

export function MainPage() {
    return (
        <div className={cls.MainPage}>
            <Carousele />
        </div>
    )
}
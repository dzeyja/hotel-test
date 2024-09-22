import { Carts } from 'widgets/Carts'
import cls from './MainPage.module.scss'
import { Carousele } from 'widgets/Carousel'
import { RoomsPreView } from 'widgets/RoomsPreView'
import { NewsPreView } from 'widgets/NewsPreView'

export function MainPage() {
    return (
        <div className={cls.MainPage}>
            <Carousele />
            <Carts />
            <RoomsPreView />
            <NewsPreView />
        </div>
    )
}
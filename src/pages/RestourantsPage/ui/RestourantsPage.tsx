import cls from './RestourantsPage.module.scss'

export const RestourantsPage = () => {
  return (
    <div className="container">
        <div className={cls.RestourantsPage}>
            <div className={cls.title}>
                Наши ретораны
            </div>
            <div className={cls.restInfo}>
                <div className={cls.imgWrapper}>
                    <img src="https://kazanriviera.ru/upload/resize_cache/iblock/63d/960_500_2/tagupjjq0hdbmu38j17uka9fbbbbiyrc.jpg" alt="" />
                </div>
                <div className={cls.textContent}>
                    <div className={cls.restTitle}>
                        РЕСТОРАН «AMORE»
                    </div>

                    <div className={cls.restDesc}>
                        Одним из самых ярких впечатлений для гостей становятся завтраки, обеды и ужины в изысканном ресторане «Amore», название которого выбрано не случайно.
                        В переводе с итальянского «Amore» означает «любовь». Именно любовь к высокой кухне делает «Amore» центром притяжения гостей.В меню ресторана гармонично соседствуют привычные позиции европейской кухни и лучшие блюда со всего света.
                        В барной карте «Amore» собраны более 30 изысканных вин. Большую часть занимают образцы из Франции и Италии. А также больше 20 вариантов классических и авторских коктейлей.
                    </div>
                    <div className={cls.info}>
                        <div className={cls.infoItem}>
                            <div>
                                Вместимость
                            </div>
                            До 120 чел.
                        </div>
                        <div className={cls.infoItem}>
                            <div>
                                Телефон
                            </div>
                            +7 (843) 218-00-60 (доб.3014)
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.restInfo}>
                <div className={cls.imgWrapper}>
                    <img src="https://kazanriviera.ru/upload/resize_cache/iblock/2e1/960_500_2/ffdextnufw2h0g2j2j515c0czzypfrqf.jpg" alt="" />
                </div>
                <div className={cls.textContent}>
                    <div className={cls.restTitle}>
                        РЕСТОРАН «ВЕРАНДА»
                    </div>
                    <div className={cls.restDesc}>
                        Открытый ресторан «Веранда» создан для тех, кто стремится вырваться 
                        из душной суеты летнего города. Именно здесь Вы сможете насладиться
                        восхитительными блюдами от шеф-повара под пение птиц и плеск воды. В 
                        ресторане представлены блюда европейской и национальной кухни, а также
                        специальное летнее меню. Комфортная цветовая гамма и великолепный вид на
                        Казанский Кремль позволяет ресторану стать универсальной площадкой для 
                        любого повода: неспешного завтрака в выходной день, делового обеда или 
                        романтического ужина. У нас любят проводить камерные свадьбы, отмечать 
                        дни рождения и другие важные даты — интерьер ресторана прекрасно 
                        адаптируется под любой праздничный декор.
                    </div>
                    <div className={cls.info}>
                        <div className={cls.infoItem}>
                            <div>
                                Вместимость
                            </div>
                            До 120 чел.
                        </div>
                        <div className={cls.infoItem}>
                            <div>
                                Телефон
                            </div>
                            +7 (843) 218-00-60 (доб.3014)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

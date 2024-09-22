import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NewsPreView.module.scss'
import { Button } from 'react-bootstrap'

interface NewsPreViewProps {
    className?: string
}

export const NewsPreView = ({className}: NewsPreViewProps) => {
    
  return (
    <div className={classNames(cls.NewsPreView, {}, [className])}>
        <div className="container">
            <div className={cls.newsPreView}>
                <div className={cls.title}>
                    Новости
                </div>
                <Button>
                    Все новости
                </Button>
            </div>
            <div className={cls.contentNews}>
                <div className={cls.newsCard}>
                    <div className={cls.date}>
                        12.04.2016
                    </div>
                    <div className={cls.cardTitle}>
                        Impetus regione ad eos
                    </div>
                    <div className={cls.cardSuptitle}>
                        Impetus regione ad eos. Recusabo interpretaris te nec. Vide deleniti sed an.
                    </div>
                </div>
                <div className={cls.newsCard}>
                <div className={cls.date}>
                        12.04.2016
                    </div>
                    <div className={cls.cardTitle}>
                        Impetus regione ad eos
                    </div>
                    <div className={cls.cardSuptitle}>
                        Impetus regione ad eos. Recusabo interpretaris te nec. Vide deleniti sed an.
                    </div>
                </div>
                <div className={cls.newsCard}>
                <div className={cls.date}>
                        12.04.2016
                    </div>
                    <div className={cls.cardTitle}>
                        Impetus regione ad eos
                    </div>
                    <div className={cls.cardSuptitle}>
                        Impetus regione ad eos. Recusabo interpretaris te nec. Vide deleniti sed an.
                    </div>
                </div>
                <div className={cls.newsCard}>
                <div className={cls.date}>
                        12.04.2016
                    </div>
                    <div className={cls.cardTitle}>
                        Impetus regione ad eos
                    </div>
                    <div className={cls.cardSuptitle}>
                        Impetus regione ad eos. Recusabo interpretaris te nec. Vide deleniti sed an.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

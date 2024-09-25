import cls from './ContactsPage.module.scss';

export const ContactsPage = () => {
  return (
    <div className={cls.container}>
      <main className={cls.section}>
        <div className={cls.innerContainer}>
          <h1 className={cls.title1}>Контакты</h1>

          <ul className={cls.contentList}>
            <li className={cls.contentListItem}>
              <h2 className={cls.title2}>Адрес</h2>
              <p>Казань, пр. Фатыха Амирхана, 1</p>
            </li>
            <li className={cls.contentListItem}>
              <h2 className={cls.title2}>Отель / Аквапарк</h2>
              <p><a href="tel:+79051234567">+7(987) 218-00-40 / +7 (987) 218-00-80</a></p>
            </li>
            <li className={cls.contentListItem}>
              <h2 className={cls.title2}>Email</h2>
              <p><a href="mailto:webdev@protonmail.com">reservation@hotelriviera.ru</a></p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

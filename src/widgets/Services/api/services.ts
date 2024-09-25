export interface IService {
    title: string
    desc: string
}

const services: IService[] = [
    {
        title: 'Аквапарк и пляж «Ривьера»',
        desc: 'Приглашаем гостей отеля посетить аквапарк и пляжную зону бесплатно в течение всего периода проживания. Вас ждет более 50 бассейнов и водных аттракционов, детская зона и горки для самых смелых и любящих поднимать адреналин в крови, джакузи в СПА-зоне, бани, сауны, различные активности и аквааэробика по пятницам.'
    },
    {
        title: 'Экскурсии',
        desc: 'Казань — уникальное место для туризма, один из самых привлекательных городов России с богатой историей, культурным наследием и множеством достопримечательностей. В нашем отеле вы можете приобрести групповые и индивидуальные экскурсии по Казани и Республике Татарстан. Более подробная информация о программе экскурсий по телефону +7 (843) 500-02-70.'
    },
    {
        title: 'Планета Фитнес',
        desc: 'Спортивно-оздоровительный клуб премиум-класса общей площадью 3 200 м² - идеальное место для отдыха и занятий спортом для гостей отеля: 25-метровый бассейн, тренажерный зал, кардиозал, залы групповых тренировок, джакузи, сауны и бани, детская комната. Здесь вас ждет высококлассная команда профессионалов и качественный сервис, характерные для всех клубов сети компании «Планета Фитнес»'
    },
    {
        title: 'Химчистка и прачечная',
        desc: 'Собственная химчистка и прачечная отеля позволяют быстро и качественно предоставлять полный спектр услуг по уходу за вашей одеждой в любое время суток. Для этого достаточно заполнить бланк, оставить необходимые вещи в специальном пакете в номере или передать их сотруднику службы приема и размещения на стойке ресепшн.'
    },
    {
        title: 'Транспортные услуги',
        desc: 'По предварительному запросу, отель готов предоставить индивидуальный трансфер до аэропорта или встречу в аэропорту, а также помочь с вызовом городской службы такси. Для этого необходимо обратиться к сотруднику службы приема и размещения на стойке ресепшн или связаться с ним по телефону, указанному в справочной информации.'
    },
    {
        title: 'Проживание для гостей с ограниченными возможностями',
        desc: 'В отеле предусмотрен полный комплекс удобств для гостей с ограниченными возможностями: широкая входная дверь, отсутствие порогов, большое пространство вокруг кровати, позволяющее легко передвигаться по комнате, специально оборудованная ванная комната с доступной по высоте раковиной и регулируемым по высоте душем, удобными поручнями и полками с банными принадлежностями.'
    }
]

export default services
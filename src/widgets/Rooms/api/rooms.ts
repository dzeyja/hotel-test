export interface IRooms {
    id: number
    img: string
    title: string
    texts: string
    roomPrice: string
}

const rooms: IRooms[] = [
    {
        id: 1,
        img: 'https://kazanriviera.ru/upload/resize_cache/iblock/dd4/960_500_2/ovm64wo2y4zps2ojrnuc600ki7qozmtp.jpg',
        title: 'Комфорт',
        texts: 'Небольшой уютный однокомнатный номер. Оснащен всем необходимым для продуктивной работы и полноценного отдыха.',
        roomPrice: 'Стоимость номера от 13 000 РУб./сутки'
    },
    {
        id: 2,
        img: 'https://kazanriviera.ru/upload/resize_cache/iblock/c85/960_500_2/z82essu344e0ua55es494wm1tx2h223p.jpg',
        title: 'Стандарт Double',
        texts: 'Светлый уютный однокомнатный номер. Отличное решение для деловой поездки и комфортного отдыха.',
        roomPrice: 'Стоимость номера от 14 100 РУб./сутки'
    },
    {
        id: 3,
        img: 'https://kazanriviera.ru/upload/resize_cache/iblock/cfa/960_500_2/5vh7phi14txwk4li7m4okv58fovw8zc8.jpg',
        title: 'Стандарт Twin',
        texts: 'Светлый уютный однокомнатный номер с 2-мя раздельными кроватями. Отличное решение для деловой поездки и комфортного отдыха.',
        roomPrice: 'Стоимость номера от 14 100 РУб./сутки'
    },
    {
        id: 4,
        img: 'https://kazanriviera.ru/upload/resize_cache/iblock/bdd/960_500_2/2080ft6upbxaymk9quzgin07t3dn5avx.jpg',
        title: 'Улучшенный номер',
        texts: 'Просторный, светлый номер отличается элегантным оформлением в светло-бежевых спокойных тонах, качественной отделкой и прекрасным видом на город.',
        roomPrice: 'Стоимость номера от 18 900 РУб./сутки'
    },
    {
        id: 5,
        img: 'https://kazanriviera.ru/upload/resize_cache/iblock/00f/960_500_2/0x25ha51apl12sf5x9fh2co4hqbf6edy.jpg',
        title: 'Люкс',
        texts: 'Просторный, светлый 2-х комнатный номер отличается элегантным оформлением в светло-бежевых спокойных тонах, качественной отделкой и видом на новый район города',
        roomPrice: 'Стоимость номера от 25 000 РУб./сутки'
    },
    {
        id: 6,
        img: 'https://kazanriviera.ru/upload/resize_cache/iblock/0d2/960_500_2/86x6p4lalrfj1wpfl09tzrui7dpkslpv.jpg',
        title: 'Апартаменты «Кремлёвские»',
        texts: 'Просторный, светлый номер с эксклюзивным дизайном. Стильный интерьер с роскошной итальянской мебелью. Из «Кремлевских апартаментов» открывается шикарный вид на акваторию Казанки и Казанский Кремль.',
        roomPrice: 'Стоимость номера от 38 300 РУб./сутки'
    },
]

export default rooms
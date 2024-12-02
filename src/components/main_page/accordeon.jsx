import { useState } from "react"
import { Accrdion } from "./Accordion"
import { Acc_card } from '/src/components/main_page/Accordion_card.jsx'
export function Accord() {
    const [open, setOpen] = useState(false)
    const [accord, setAccord] = useState(null)
    const toggle = (i) => {
        if (accord == i) {
            return setAccord(null)
        }
        setAccord(i)
    }
    const info = [
        {
            id: 0,
            title: 'Лендинг',
            price: 'От 100 000 ₽',
            days: '14-21 день',
            text: 'Наша цель подать нужную информацию о вашем продукте и правильно её преподнести.',
        },
        {
            id: 1,
            title: 'Корпоративный сайт',
            price: 'От 300 000 ₽',
            days: '14-21 день',
            text: 'Для бизнесов, где нужно рассказать о продукте, услугах, компании, команде более подробно во многих аспектах. И количество информации и контента будет увеличиваться.',
        },
        {
            id: 2,
            title: 'Интернет магазин',
            price: 'От 500 000 ₽',
            days: '14-21 день',
            text: 'Для продажи физических или цифровых товаров с приемом оплат, онлайн поддержкой, управлением калогами и доставкой.',
        },
        {
            id: 3,
            title: 'Новостной сайт',
            price: 'От 500 000 ₽',
            days: '14-21 день',
            text: 'Для регулярной публикации статей, новостей, обучающего материала, исследованиваний, обзорами.',
        },
        {
            id: 4,
            title: 'Дизайн приложений',
            price: 'От 500 000 ₽',
            days: '14-21 день',
            text: 'Мобильные, десктоп и SaaS приложений, сервисы.',
        },
        {
            id: 5,
            title: 'Брендинг',
            price: 'От 300 000 ₽',
            days: '14-21 день',
            text: 'Наша цель подать нужную информацию о вашем продукте и правильно её преподнести.',
        }
    ]

    return (
        <section className="flex gap-x-[20px] mb-[300px]">
            <ul  className="flex flex-col w-[630px] gap-y-[20px]">
                {info.map((block, i) => (
                    <li key={block.id} typeof="radio" className={`border-[1px] border-white ${accord == i ? 'bg-white' : 'bg-black'} rounded-[10px] overflow-hidden animated`}>
                        <div className="py-[25px] px-[20px]">
                            <h2 className={`flex space-x-5 text-h7 leading-h7 ${accord == i ? 'text-black' : 'text-white'} uppercase mb-[20px] whitespace-nowrap relative`}>{block.title}<p className={`absolute right-0 flex gap-x-[53px] ${accord ==i ? 'text-[#00000066]' : 'text-[#FFFFFF66]'} `}>{block.price}<span>{block.days}</span></p></h2>
                            <p className={`text-h8 leading-h8 ${accord == i ? 'text-black' : 'text-[#FFFFFFB2]'}`}>{block.text}</p>
                        </div>
                        <button onClick={() => (toggle(i), setOpen(!open))} className={`btn_animated hover:bg-[#D2FE67] flex items-center justify-center gap-x-[10px] uppercase w-full py-[21px] border-t-[1px] ${accord == i ? 'border-[#00000033] text-black' : 'border-white text-white' } text-h7 leading-h7`}>Этапы работ <img className="w-[15px] h-[15px]" src={accord == i ? 'public/main page/icons/x.svg' : 'public/main page/icons/+_wh.svg'}/></button>
                    </li>
                ))}
            </ul>
            <div className="uppercase text-center w-[630px] border-[1px] border-white bg-black rounded-[10px] h-[815px] flex items-center justify-center overflow-hidden">
                {open ? <Acc_card /> : <p className="uppercase py-[9px] px-[67px] text-[#FFFFFF66] text-h10 leading-h10 border-[1px] border-[#FFFFFF66] rounded-[100px]">Нажмите на “Этапы работ”</p>}
            </div>
        </section>
    )
}
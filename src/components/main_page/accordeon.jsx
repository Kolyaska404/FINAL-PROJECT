import { useState } from "react"
import { Accrdion } from "./Accordion"
import { Acc_card } from "./Accordion_card"

export function Accord() {
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
        <section className="flex gap-x-[20px] mb-[300px] px-[80px]">
            <ul className="flex flex-col w-[630px] gap-y-[20px]">
                {info.map((block) => (
                    <Accrdion id={block.id} title={block.title} price={block.price} days={block.days} text={block.text} />
                ))}
            </ul>
            <div className="uppercase text-center w-[630px] border-[1px] border-white bg-black rounded-[10px] h-[815px] flex items-center justify-center overflow-hidden">
                <p className="uppercase py-[9px] px-[67px] text-[#FFFFFF66] text-h10 leading-h10 border-[1px] border-[#FFFFFF66] rounded-[100px]">Нажмите на “Этапы работ”</p>
                {/* <Acc_card /> */}
            </div>
        </section>
    )
}
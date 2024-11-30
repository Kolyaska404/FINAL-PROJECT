import { Service_Item } from "./item"
import { useState } from "react"
import { animated, config, useSpring } from  'react-spring'
import '/src/App.css'

export function Service_block() {
    const service_list = [
        {
            id: 0,
            title: 'Лендинг',
            price: 'От 100 000 ₽',
            time: '14-21 день',
            text: 'Бизнесов, где нужно рассказать о продукте, услугах, компании, команде кратко и по делу.'
        },
        {
            id: 1,
            title: 'Многостраничный сайт',
            price: 'От 300 000 ₽',
            time: '14-21 день',
            text: 'Бизнесов, где нужно рассказать о продукте, услугах, компании, команде более подробно во многих аспектах. И количество информации и контента будет увеличиваться.'
        },
        {
            id: 2,
            title: 'Интернет магазин',
            price: 'От 500 000 ₽',
            time: '14-21 день',
            text: 'Продажи физических или цифровых товаров с приемом оплат, онлайн поддержкой, управлением калогами и доставкой.'
        },
        {
            id: 3,
            title: 'Новостной сайт',
            price: 'От 500 000 ₽',
            time: '14-21 день',
            text: 'Регулярной публикации статей, новостей, обучающего материала, исследованиваний, обзорами.'
        },
        {
            id: 4,
            title: 'Дизайн приложений',
            price: 'От 500 000 ₽',
            time: '14-21 день',
            text: 'Мобильных, десктоп и SaaS приложений, сервисов'
        },
        {
            id: 5,
            title: 'Брендинг',
            price: 'От 500 000 ₽',
            time: '14-21 день',
            text: 'Наша цель подать нужную информацию о вашем продукте и правильно её преподнести.'
        }
    ]
    const [accord, setAccord] = useState(null)
    const toggle = (i) => {
        if (accord == i) {
            return setAccord(null)
        }
        setAccord(i)
    }
    return (
        <section className="conteiner">
            <ul className="flex flex-col gap-y-[40px]">
                {service_list.map((e, i) => (
                    <li key={e.id} className="border-[1px] border-white rounded-[10px] overflow-hidden animated">
                        <div className="pt-[20px] px-[20px] text-white">
                            <h2 className="flex space-x-5 text-h5 leading-h5 uppercase mb-[18px] whitespace-nowrap relative font-normal">{e.title}<p className="absolute right-0 flex gap-x-[128px] text-[#FFFFFF66]">{e.price}<span>{e.time}</span></p></h2>
                            <p className={`flex gap-x-[384px] desk_text uppercase ${accord == i ? 'max-h-0 ' : 'max-h-[42px]'} text-[#FFFFFFB2] font-medium mt-[41px] mb-[35px]`}>Подходит для:<span className="w-[700px] normal-case font-normal">{e.text}</span></p>
                        </div>
                        <ul className={`bg-white text-black flex ${accord == i ? 'max-h-[825px] opacity-100' : 'max-h-0 opacity-0 z-[-1]'}`}>
                            <li className="w-[650px] border-r-[1px] border-[#00000033] text-center">
                                <h3 className="text-h2 leading-h2 uppercase mx-auto tracking-[-3px] font-medium py-[40px]">Подход</h3>
                                <ul>
                                    <li className="border-y-[1px] border-[#00000033] flex justify-between py-[25px] text-left pl-[25px] pr-[21px]">
                                        <h4 className="uppercase font-medium text-h7 leading-h7">Обдуманный дизайн</h4>
                                        <p className="w-[300px] font-normal tracking-[-1px] text-[#000000B2] desk_text">Предлагаем визуальные решения в зависимости от ЦА и задач бизнеса.<br />Не используем шаблоны.</p>
                                    </li>
                                    <li className="border-b-[1px] border-[#00000033] flex justify-between py-[25px] text-left pl-[25px] pr-[21px]">
                                        <h4 className="uppercase font-medium text-h7 leading-h7">Выполняем в срок</h4>
                                        <p className="w-[300px] font-normal tracking-[-1px] text-[#000000B2] desk_text">Составляем регламент, после полного ознакомления с проектом. В случае крупных доработок сроки изменятся.</p>
                                    </li>
                                    <li className="border-b-[1px] border-[#00000033] flex justify-between py-[25px] text-left pl-[25px] pr-[21px]">
                                        <h4 className="uppercase font-medium text-h7 leading-h7">Работаем по договору</h4>
                                        <p className="w-[300px] font-normal tracking-[-1px] text-[#000000B2] desk_text">Заключаем договор, предоставляем акты и чеки.</p>
                                    </li>
                                    <li className="border-b-[1px] border-[#00000033] flex justify-between py-[25px] text-left pl-[25px] pr-[21px]">
                                        <h4 className="uppercase font-medium text-h7 leading-h7">Оплата</h4>
                                        <p className="w-[300px] font-normal tracking-[-1px] text-[#000000B2] desk_text">После каждого этапа высылаем счёт на оплату, после чего переходим к следующему.</p>
                                    </li>
                                </ul>
                                <button className="py-[25px] uppercase text-h7 leading-h7 font-medium">Заполнить бриф</button>
                            </li>
                            <li className="w-[630px] text-center">
                                <h3 className="text-h2 leading-h2 uppercase mx-auto tracking-[-3px] font-medium py-[40px]">Этапы работ</h3>
                                <ul>
                                    <li className="border-y-[1px] border-[#00000033] flex pl-[25px] pr-[25px] py-[25px] uppercase font-medium text-h7 leading-h7 text-[#00000066]">
                                        <h4 className="mr-[188px] text-black">Брифинг</h4>
                                        <p className="mr-[83px]">1 день</p>
                                        <p className="mr-[113px]">0 ₽</p>
                                        <button><img src="public\main page\icons\+_bl.svg" alt="" /></button>
                                    </li>
                                    <li className="border-b-[1px] border-[#00000033] flex pl-[25px] pr-[25px] py-[25px] uppercase font-medium text-h7 leading-h7 text-[#00000066]">
                                        <h4 className="mr-[123px] text-black">Исследования</h4>
                                        <p className="mr-[85px]">3 дня</p>
                                        <p className="mr-[63px]">10 000 ₽</p>
                                        <button><img src="public\main page\icons\+_bl.svg" alt="" /></button>
                                    </li>
                                    <li className="border-b-[1px] border-[#00000033] flex pl-[25px] pr-[25px] py-[25px] uppercase font-medium text-h7 leading-h7 text-[#00000066]">
                                        <h4 className="mr-[178px] text-black">Прототип</h4>
                                        <p className="mr-[73px]">5 Дней</p>
                                        <p className="mr-[60px]">20 000 ₽</p>
                                        <button><img src="public\main page\icons\+_bl.svg" alt="" /></button>
                                    </li>
                                    <li className="border-b-[1px] border-[#00000033] flex pl-[25px] pr-[25px] py-[25px] uppercase font-medium text-h7 leading-h7 text-[#00000066]">
                                        <h4 className="mr-[196px] text-black">Дизайн </h4>
                                        <p className="mr-[73px]">5 Дней</p>
                                        <p className="mr-[60px]">30 000 ₽</p>
                                        <button><img src="public\main page\icons\+_bl.svg" alt="" /></button>
                                    </li>
                                    <li className="border-b-[1px] border-[#00000033] flex pl-[25px] pr-[25px] py-[25px] uppercase font-medium text-h7 leading-h7 text-[#00000066]">
                                        <h4 className="mr-[172px] text-black">Адаптивы</h4>
                                        <p className="mr-[86px]">2 дня</p>
                                        <p className="mr-[60px]">20 000 ₽</p>
                                        <button><img src="public\main page\icons\+_bl.svg" alt="" /></button>
                                    </li>
                                    <li className="border-b-[1px] border-[#00000033] flex pl-[25px] pr-[25px] py-[25px] uppercase font-medium text-h7 leading-h7 text-[#00000066]">
                                        <h4 className="mr-[166px] text-black">Анимация</h4>
                                        <p className="mr-[73px]">5 дней</p>
                                        <p className="mr-[60px]">20 000 ₽</p>
                                        <button><img src="public\main page\icons\+_bl.svg" alt="" /></button>
                                    </li>
                                </ul>
                                <div className="py-[25px]">
                                    <p className="flex gap-x-[58px] ml-[295px] mb-[15px] text-h7 leading-h7 uppercase font-medium text-[#00000066]">21 день*<span>100 000 ₽*</span></p>
                                    <p className="text-h10 leading-h10 font-normal whitespace-nowrap mr-[80px] text-[#000000B2]">*Конечная стоимость проекта зависит объема работы, сложности задачи и сроков.</p>
                                </div>
                            </li>
                        </ul>
                        <button onClick={() => toggle(i)} className={`flex items-center justify-center gap-x-[10px] z-[3] uppercase w-full pt-[22px] pb-[18px] border-t-[1px] ${accord == i ? 'border-[#00000033] text-black bg-white' : 'border-white text-white bg-black'} text-h7 leading-h7 font-medium`}>Закрыть<img className="w-[15px] h-[15px]" src={accord == i ? `public/main page/icons/x.svg` : 'public/main page/icons/+_wh.svg'}/></button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
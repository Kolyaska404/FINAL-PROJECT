import { useState } from "react"
import { animated, config, useSpring } from  'react-spring'
import '/src/App.css'

export function Service_Item({ id, title, price, time, text }) {
    const [open, setOpen] = useState(false)
    let toggleHandler = (e) => {
        setOpen(!open);
    };
    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "0px" },
        to: { opacity: "1", maxHeight: open ? "825px" : "0px" },
        config: { duration: "300" }
    });
    const p_style = useSpring({
        from: { opacity: '0', maxHeight: '42px'},
        to: { opacity: '1', maxHeight: open ? '0px' : '42px', color: open ? '' : '#FFFFFFB2', display:  open ? ' none' : 'flex'},
        config: { duration: '200'}
    })
    return (
        <li key={id} className="border-[1px] border-white rounded-[10px] overflow-hidden animated">
            <div className="pt-[20px] px-[20px] text-white">
                <h2 className="flex space-x-5 text-h5 leading-h5 uppercase mb-[18px] whitespace-nowrap relative font-normal">{title}<p className="absolute right-0 flex gap-x-[128px] text-[#FFFFFF66]">{price}<span>{time}</span></p></h2>
                <animated.p style={p_style} className="flex gap-x-[384px] desk_text uppercase text-[#FFFFFFB2] font-medium mt-[41px] mb-[35px]">Подходит для:<span className="w-[700px] normal-case font-normal">{text}</span></animated.p>
            </div>
            <animated.ul className="bg-white text-black flex" style={openAnimation}>
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
            </animated.ul>
            {open ? 
                <button onClick={toggleHandler} className="flex items-center justify-center gap-x-[10px] uppercase w-full pt-[22px] pb-[18px] border-t-[1px] border-[#00000033] text-h7 leading-h7 text-black bg-white font-medium">Закрыть<img className="w-[15px] h-[15px]" src='public/main page/icons/x.svg'/></button>
                :
                <button onClick={toggleHandler} className="flex items-center justify-center gap-x-[10px] uppercase w-full pt-[22px] pb-[18px] border-t-[1px] border-white text-h7 leading-h7 text-white bg-black font-medium">Этапы работ<img className="w-[15px] h-[15px]" src='public/main page/icons/+_wh.svg'/></button>
            }
        </li>
    )
}


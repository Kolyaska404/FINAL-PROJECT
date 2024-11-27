import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import '/src/App.css'
export function Menu({ closeModal }) {
    const [over, setOver] = useState(false);
    const nhover  = 'public/main page/icons/close_menu.svg'
    const hover = 'public/main page/icons/close_menu_bl.svg'
    const Menu_anim = useSpring({
        opacity: '1',
        from: {opacity: '0'},
        config: {duration: '300'}
    })
    return (
        <animated.section style={Menu_anim} className="bg-black text-white absolute top-0 right-0 left-0 uppercase pt-[20px] pb-[69px] conteiner z-[2]">
            <nav className="flex items-center font-medium mb-[80px] uppercase">
                <h2 className="flex items-center gap-x-[10px] text-h7 leading-h7 mr-[354px]"><img src="public\main page\icons\LOGO_wh.png" alt="" /> Yudaev branding</h2>
                <button onClick={closeModal} className="hover:bg-gr hover:border-transparent hover:text-black active:bg-sal active:text-[#00000099] transition-all delay-25 z-10 flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] mr-[432px] border-white text-h9 leading-h9" 
                    onMouseOver={() => setOver(true)}
                    onMouseOut={() => setOver(false)}
                >
                    <img src={over ? hover : nhover} alt=""/>
                    ЗАКРЫТЬ
                </button>
                <button className="hover:bg-gr hover:border-transparent hover:text-black active:bg-sal active:text-[#00000099] transition-all delay-25 z-10 uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-white text-h9 leading-h9">Заполнить бриф</button>
            </nav>
            <ul className="flex gap-x-[184px]">
                <li>
                    <ul className="text-h3 leading-h3 font-medium flex flex-col gap-y-[20px]">
                        <Link to='/'>Главная</Link>
                        <Link to='/Service' className="flex gap-x-[77px]">Услуги <span className="text-[#FFFFFF33]">(6)</span></Link>
                        <Link to='/portfolio' className="flex gap-x-[59px]">Портфолио <span className="text-[#FFFFFF33]">(12)</span></Link>
                        <Link to='/Team'>Команда</Link>
                        <Link to='/Contacts'>КОнтакты</Link>
                        <Link to='/notfound'>О школе</Link>
                    </ul>
                </li>
                <li className="flex flex-col gap-y-[60px]">
                    <div className="text-h8 leading-h font-normal normal-case">
                        <p>Находимся в Москве.</p>
                        <p>Работаем по всей России и Миру.</p>
                    </div>
                    <div className=" text-h7 leading-h7 font-medium">
                        <h3 className="text-[#FFFFFF66] mb-[10px]">Телефон</h3>
                        <p className="flex gap-x-[139px]">+7 999 999–99–99<span className="text-[#FFFFFF66]">WA TG</span></p>
                    </div>
                    <div className=" text-h7 leading-h7 font-medium">
                        <h3 className="text-[#FFFFFF66] mb-[10px]">Почта</h3>
                        <p>contact@yudaev.ru</p>
                    </div>
                    <div className="flex gap-x-[134px] text-h7 leading-h7 font-medium">
                        <div className="flex flex-col gap-y-[10px]">
                            <h3 className="text-[#FFFFFF66] mb-[10px]">Мессенджеры</h3>
                            <a href="">Telegram</a>
                            <a href="">Whatsapp</a>
                        </div>
                        <div className="flex flex-col gap-y-[10px] text-right">
                            <h3 className="text-[#FFFFFF66] mb-[10px]">Соц. сети</h3>
                            <a href="">Vkontakte</a>
                            <a href="">Instagram</a>
                            <a href="">Behance</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-[10px] text-h7 leading-h7 font-medium">
                        <h3 className="text-[#FFFFFF66]">Другие наши проекты</h3>
                        <a href="">Школа дизайнеров</a>
                        <a href="">Блог о дизайне</a>
                    </div>
                </li>
            </ul>
        </animated.section>
    )
}
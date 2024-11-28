import { Footer } from '/src/components/Footer.jsx'
import { Run_stroke, Run_stroke_13, Run_stroke_12_2 } from './run_stroke'
import { Accord } from './accordeon'
import { Run_stroke_2 } from './run_stroke'
import { Run_stroke_3 } from './run_stroke'
import { Designs } from './Designs'
import { Cards } from './Cards'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Menu } from '../menu'
import { Hover } from './hover'
import '/src/App.css'

export function Main_page() {
    const [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    return (
    <>
        <div className='w-full flex flex-col min-h-full mx-auto relative'>
            <header className="bg-white text-black relative">
                <div className='px-[80px] max-w-[1440px] relative mx-auto pb-[30px] pt-[18px] flex flex-col w-full'>
                    <img className="top-[136px] absolute" src="/public/main page/icons/main_logo.png" alt="" />
                    <div className="flex text-h9 leading-h9 font-medium ml-[560px] relative">
                        <button onClick={() => setShowModal(true)} className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black"><img src="/public/main page/icons/mn_icn.svg" alt="" />МЕНЮ</button>
                        <Link to='/Breef' className="absolute right-0 hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black">Заполнить бриф</Link>
                    </div>
                    <img className="absolute top-[5px] hd_img left-[70px] object-cover" src='/public/main page/hdr_img.png'></img>
                    <div className='mix-blend-difference'>
                        <div className="relative flex font-medium text-h1 leading-h1 text-white">
                            <h1 className="text-h1 uppercase w-[856px] pt-[348px]">Дизайн сайтов
                            Приложений <span className="ml-[196px]">Брендинг</span></h1>
                            <h1 className="absolute right-[-4px] text-h1 uppercase w-[648px] pt-[75px] ">Yudaev <span className="pl-[105px] w-[536px]">branding</span></h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-[58px] absolute right-[80px] bottom-[47px] text-h8 leading-h8">
                        <p className="">Мы — диджитал дизайн агенство. <br /><span className="ml-[30px]">Помогаем бизнесу решить задачи в интернете.</span></p>
                        <p className="">Находимся в Москве. <br /><span className="ml-[30px]">Работаем по всей России и Миру.</span></p>
                    </div>
                </div>
                {showModal && <Menu closeModal={() => setShowModal(false)} />}
            </header>
            <main className="bg-black pt-[134px]">
                <div className='px-[80px] max-w-[1440px] mx-auto flex flex-col'>
                    <section className="mb-[300px] relative z-[2]">
                        <h2 className="text-h3 leading-h3 font-normal uppercase mb-[100px] z-[4] relative text-white">
                            <span className="ml-[170px]">Наша сильная сторона</span> <br />
                            это создание дизайна <br />
                            <span className="ml-[170px]">сайтов и приложений.</span>
                        </h2>
                        <div onClick={() => setOpen(true)} className={`z-[2] mb-[100px] text-[#FFFFFFB2] ${open ? 'opacity-0' : 'opacity-100'} transition-opacity cursor-pointer mx-auto rounded-[100%] border-[1px] border-white text-center px-[140px] py-[230px] block w-[500px] h-[500px]`}>Наведите, чтобы увидеть <br /> фотку основателя
                        </div>
                        <section onClick={() => setOpen(false)} className={`absolute top-0 ${open ? 'hover_anim_on' : 'hover_anim_off'} w-[1440px]`}>
                            <img className='absolute top-[496px]' src="public\main page\gr_metball_1.png" alt="" />
                            <img className='absolute top-[5px] left-[120px]' src="public\main page\gr_metball_2.png" alt="" />
                            <img className='absolute top-[86px] right-[80px]' src="public\main page\gr_metball_3.png" alt="" />
                            <img className='absolute top-[445px] right-[80px]' src="public\main page\gr_metball_4.png" alt="" />
                            <div className="pb-[40px] mb-[250px] mt-[364px] ml-[-80px] mix-blend-difference absolute w-[1440px] mx-auto">
                                <div className="bg-[#D2FE67] rounded-[10px] w-[414px] h-[500px] absolute left-[0] right-0 mx-auto">
                                    <img src="public\main page\yuadaev.png" alt="" />
                                </div>
                                <Run_stroke_12_2 title='Никита'/>
                                <Run_stroke_13 title='Юдаев' desk='Основатель Студии'/>
                            </div>
                        </section>
                        <ul className="grid gap-x-[60px] ml-[170px] grid-cols-3 gap-y-[62px]">
                            <li className="w-[330px]">
                                <h4 className="text-h7 leading-h7 text-[#FFFFFF66]">(ПЕРВОЕ)</h4>
                                <p>Думаем об удобстве пользователя.</p>
                            </li>
                            <li className="w-[330px]">
                                <h4 className="text-h7 leading-h7 text-[#FFFFFF66]">(ВТОРОЕ)</h4>
                                <p>Проектируем интерфейсы понятные для аудитории вашего бизнеса.</p>
                            </li>
                            <li className="w-[330px]">
                                <h4 className="text-h7 leading-h7 text-[#FFFFFF66]">(ТРЕТЬЕ)</h4>
                                <p>Изучаем вашу нишу, аудиторию, конкурентов и тренды, чтобы сделать обдуманный дизайн и донести пользователю ценность вашего продукта.</p>
                            </li>
                            <li className="w-[330px] col-end-4">
                                <h4 className="text-h7 leading-h7 text-[#FFFFFF66]">(ЧЕТВЕРТОЕ)</h4>
                                <p>Разрабатываем дизайн с нуля и обновляем уже существующие.</p>
                            </li>
                        </ul>
                    </section>
                    <Run_stroke />
                    <Accord />
                    <Run_stroke_2 />
                    <Cards />
                    <Run_stroke_3 />
                </div>
                <Designs />
            </main>
            <Footer />
        </div>
    </>
)}



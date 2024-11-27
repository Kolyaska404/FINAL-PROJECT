import { Footer } from '../Footer'
import { Service_block } from './service_item'
import { useState, useEffect } from 'react'
import { Menu } from '../menu'
import '/src/App.css'

export function Service() {
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-black'>
                <header className="uppercase text-black h-[820px] bg-white">
                    <div className="px-[80px] relative max-w-[1440px] h-[820px] mx-auto pb-[47px] pt-[20px] flex flex-col w-full">
                        <nav className="flex items-center font-medium">
                            <h2 className="flex items-center gap-x-[10px] text-h7 leading-h7 mr-[354px]"><img src="public/portfolio/LOGO.png" alt="" /> Yudaev branding</h2>
                            <button onClick={() => setShowModal(true)} className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black text-h9 leading-h9 mr-[445px]"><img src="/public/main page/icons/mn_icn.svg" alt="" />МЕНЮ</button>
                            <button className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black text-h9 leading-h9">Заполнить бриф</button>
                        </nav>
                        <img className="absolute left-0 top-[50px]" src='public\portfolio\metaball_1.png' alt="" />
                        <img className="absolute top-0 left-[532px]" src='public\portfolio\metaball_2.png' alt="" />
                        <img className="absolute top-[418px] left-[338px]" src='public\portfolio\metaball_3.png' alt="" />
                        <img className="absolute bottom-[50px] right-0" src='public\portfolio\metaball_4.png' alt="" />
                        <h1 className='font-medium text-h1 leading-h1 mt-[473px] text-white mix-blend-difference'>Услуги<span className="ml-[176px]">(6)</span></h1>
                        <div className="absolute bottom-[70px]">
                            <div className='mt-[266px] ml-[630px] text-white mix-blend-difference font-medium normal-case'>
                                <p className='ml-[25px]'>Ведем проекты от идеи до публикации в Интернете.</p>
                                <p className=''>Можем подключится к проекту на любом этапе.</p>
                            </div>
                        </div>
                    </div>
                    {showModal && <Menu closeModal={() => setShowModal(false)} />}
                </header>
                <main className="bg-black pt-[150px] pb-[300px] border-b-[1px] border-[#FFFFFFB2]">
                    <Service_block/>
                </main>
                <Footer/>
            </div>
        </>
    )
}
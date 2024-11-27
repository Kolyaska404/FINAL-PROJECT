import { useState } from 'react'
import { Menu } from './menu'
import { Link } from 'react-router-dom'

export function Notfound() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative'>
                <header className="bg-white text-black relative h-[820px]">
                    <div className='px-[80px] max-w-[1440px] relative mx-auto pb-[30px] pt-[20px] flex flex-col w-full'>
                        <div className="flex text-h9 leading-h9 font-medium relative uppercase">
                            <h2 className="flex items-center gap-x-[10px] text-h7 leading-h7 mr-[354px]"><img src="public/portfolio/LOGO.png" alt="" /> Yudaev branding</h2>
                            <button onClick={() => setShowModal(true)} className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black mr-[445px]"><img src="/public/main page/icons/mn_icn.svg" alt="" />МЕНЮ</button>
                            <Link to='/' className="absolute right-0 hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black">Заполнить бриф</Link>
                        </div>
                        <img className="absolute top-[50px] hd_img left-[70px] object-cover" src='public\notfound\not_found_img.png'></img>
                        <div className='mix-blend-difference'>
                            <div className="relative flex font-bold  text-white">
                                <h1 className="text-[160px] leading-[160px] uppercase mt-[60px] ml-[170px]">404 <span className='ml-[50px]'>страница</span> <br /> <span className='ml-[100px]'>не найдена</span></h1>
                            </div>
                        </div>
                    </div>
                    {showModal && <Menu closeModal={() => setShowModal(false)} />}
                </header>
            </div>
        </>
    )
}
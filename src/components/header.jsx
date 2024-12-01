import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "./menu"
export function Header( {title, title2, title3, year, desk, kind1, kind2, img1='public/homyes/metaball1.png', img2='public/homyes/metaball3.png', img3='public/homyes/metaball2.png'} ) {
    const [showModal, setShowModal] = useState(false)
    return (
        <header className="uppercase bg-[#F5F5F7] text-black h-[820px] relative">
            <div className="px-[80px] relative max-w-[1440px] h-[820px] mx-auto pb-[47px] pt-[20px] flex flex-col w-full">
                <nav className="flex items-center font-medium">
                    <h2 className="flex items-center gap-x-[10px] text-h7 leading-h7 mr-[354px]"><img src="public/portfolio/LOGO.png" alt="" /> Yudaev branding</h2>
                    <button onClick={() => setShowModal(true)} className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black text-h9 leading-h9 mr-[445px]"><img src="/public/main page/icons/mn_icn.svg" alt="" />МЕНЮ</button>
                    <Link to='/Breef' className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black text-h9 leading-h9">Заполнить бриф</Link>
                </nav>
                <img className="absolute left-0 top-0 fill-[#D6CFCA]" src={img1} alt="" />
                <img className="absolute top-0 left-[778px] fill-[#D6CFCA]" src={img2} alt="" />
                <img className="absolute top-[418px] left-[286px] fill-[#D6CFCA]" src={img3} alt="" />
                <h1 className='font-medium text-h1 leading-h1 my-auto mx-auto text-white mix-blend-difference'>{title} <br /><span className="ml-[137px]">{title2}</span> <br /><span className="ml-[-100px]">{title3}</span></h1>
                <Link to='/' className='absolute right-[80px] top-[325px] border-[0.5px] border-black rounded-[100%] flex items-center justify-center px-[18px] py-[78px] w-[170px] h-[170px] text-h9 leading-h9 whitespace-nowrap'><p href="#" className="bt_line relative pb-[2px]">Перейти на сайт</p></Link>
                <div className="absolute bottom-[70px]">
                    <div className='mt-[266px] w-[1280px] text-white mix-blend-difference font-medium'>
                        <p className='text-right'>{kind1}</p>
                        <div className='flex justify-between'>
                            <p>{year}</p>
                            <p>{desk}</p>
                            <p className='text-right'>{kind2}</p>
                        </div>
                    </div>
                </div>
                {showModal && <Menu closeModal={() => setShowModal(false)} />}
            </div>
        </header>
    )
} 
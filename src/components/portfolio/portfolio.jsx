import { Footer } from "/src/components/Footer.jsx"
import { PRODUCTS } from "./products_list"
import { useState, useEffect } from "react"
import { Menu } from "../menu"
import { Link } from "react-router-dom"
import '/src/App.css'

export function Portfolio() {
    const [showModal, setShowModal] = useState(false)
    const [popular, setPopular] = useState([])
    const [filtered, setFiltered] = useState([])
    const [active, setActive] = useState([])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    useEffect(() => {
        if (active === 0) {
            setFiltered(PRODUCTS)
            return
        }
        const filtered = PRODUCTS.filter((type) => type.type.includes(active))
        setFiltered(filtered)
    }, [active])
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative'>
                <header className="uppercase bg-[#F5F5F7] text-black h-[820px]">
                    <div className="px-[80px] relative max-w-[1440px] mx-auto pb-[181px] pt-[20px] flex flex-col w-full">
                        <nav className="flex items-center font-medium">
                            <h2 className="flex items-center gap-x-[10px] text-h7 leading-h7 mr-[354px]"><img src="public/portfolio/LOGO.png" alt="" /> Yudaev branding</h2>
                            <button onClick={() => setShowModal(true)} className="mr-[445px] hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black text-h9 leading-h9"><img src="/public/main page/icons/mn_icn.svg" alt="" />МЕНЮ</button>
                            <button className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black text-h9 leading-h9">Заполнить бриф</button>
                        </nav>
                        <img className="absolute left-0 top-[50px] fill-black" src="public/portfolio/metaball_1.png" alt="" />
                        <img className="absolute top-0 left-[532px] fill-black" src="public/portfolio/metaball_2.png" alt="" />
                        <img className="absolute top-[418px] left-[338px] fill-black" src="public/portfolio/metaball_3.png" alt="" />
                        <img className="absolute right-0 top-[199px] fill-black" src="public/portfolio/metaball_4.png" alt="" />
                        <h1 className="font-medium text-h1 leading-h1 mt-[394px] text-white mix-blend-difference">Порт — <br /><span className="ml-[396px] mr-[100px]">фолио</span><span>(12)</span></h1>
                        <p className="absolute desk_text text-h8 leading-h8 font-normal bottom-[100px] right-[378px] mix-blend-difference text-white normal-case">За 4 года мы реализовали более 50 проектов.</p>
                    </div>
                    {showModal && <Menu closeModal={() => setShowModal(false)} />}
                </header>
                <main className="pt-[150px] pb-[300px] border-b-[1px] border-[#F5F5F7B2] bg-black">
                    <div className="px-[80px] relative max-w-[1440px] mx-auto pb-[47px] pt-[20px] flex flex-col w-full">
                        <nav className="mb-[60px]">
                            <ul className="uppercase flex gap-x-[25px]">
                                <li className={`text-[#F5F5F766] flex gap-x-[10px] hover:text-white transition-colors delay-25 ${active === 0 ? 'active' : ''}`}><button onClick={() => setActive(0)} href="" className="relative headr_a">Все</button><span>(12)</span></li>
                                <li className={`text-[#F5F5F766] flex gap-x-[10px] hover:text-white transition-colors delay-25 ${active === 'landing' ? 'active' : ''}`}><button onClick={() => setActive('landing')} href="" className="relative headr_a">Лендинги</button><span>(5)</span></li>
                                <li className={`text-[#F5F5F766] flex gap-x-[10px] hover:text-white transition-colors delay-25 ${active === 'multi_page' ? 'active' : ''}`}><button onClick={() => setActive('multi_page')} href="" className="relative headr_a">Многостраничные сайты</button><span>(5)</span></li>
                                <li className={`text-[#F5F5F766] flex gap-x-[10px] hover:text-white transition-colors delay-25 ${active === 'application' ? 'active' : ''}`}><button onClick={() => setActive('application')} href="" className="relative headr_a">Приложения</button><span>(1)</span></li>
                                <li className={`text-[#F5F5F766] flex gap-x-[10px] hover:text-white transition-colors delay-25 ${active === 'branding' ? 'active' : ''}`}><button onClick={() => setActive('branding')} href="" className="relative headr_a">Брендинг</button><span>(3)</span></li>
                            </ul>
                        </nav>
                        <ul className="grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
                            {filtered.map((block) => {
                                return (
                                    <a href="https://tailwindcss.com/docs/grid-template-columns" >
                                        <Link to={block.link} key={block.id} className='flex flex-col items-center uppercase justify-center cursor-pointer'>
                                            <div className='flex flex-col items-center overflow-hidden rounded-[10px] border-[1px] border-white font-medium'>
                                                <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                                                    <h3 className=''>{block.title}</h3>
                                                    <h3 className=''>{block.desk}</h3>
                                                </div>
                                                <img src={block.img} alt="" />
                                                <div className='flex items-center py-[10px] px-[17px] border-t-[1px] bg-black text-white w-full text-h8 leading-h8 justify-between'>
                                                    <h2 className=''>{block.name}</h2>
                                                    <h3 className=''>{block.year}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </a>
                                )
                            })}
                        </ul>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}
import { useState } from "react";
import { Footer } from "./Footer";
import { Menu } from "./menu";

export function Contacts() {
    const [over, setOver] = useState(false);
    const nhover  = 'public/main page/icons/mn_wh_icn.svg'
    const hover = 'public/main page/icons/mn_icn.svg'
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-black'>
                <section className="conteiner px-0">
                    <nav className="flex items-center font-medium py-[20px] border-b-[1px] border-[#FFFFFFB2] text-white bg-black px-[80px]">
                        <h2 className="flex items-center gap-x-[10px] text-h7 leading-h7 font-medium uppercase mr-[354px]"><img className="z-[1]" src="public\main page\icons\LOGO_wh.png" alt="" /> Yudaev branding</h2>
                        <button onClick={() => setShowModal(true)} className="hover:bg-gr hover:text-black active:bg-sal active:text-[#00000099] transition-all delay-50 z-[1] flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] mr-[445px] border-white text-h9 leading-h9" 
                            onMouseOver={() => setOver(true)}
                            onMouseOut={() => setOver(false)}
                            >
                            <img src={over ? hover : nhover} alt=""/>
                            МЕНЮ
                        </button>
                        <button className="hover:bg-gr hover:border-transparent hover:text-black active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-white text-h9 leading-h9">Заполнить бриф</button>
                    </nav>
                    {showModal && <Menu closeModal={() => setShowModal(false)} />}
                    <Footer/>
                </section>
            </div>
        </>
    )
}
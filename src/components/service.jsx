import { Footer } from './Footer'
import '/src/App.css'
export function Service() {
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-black'>
                <header className="uppercase text-black h-[820px] bg-white">
                    <div className="px-[80px] relative max-w-[1440px] h-[820px] mx-auto pb-[47px] pt-[20px] flex flex-col w-full">
                        <nav className="flex justify-between items-center font-medium">
                            <h2 className="flex items-center gap-x-[10px] text-h7 leading-h7"><img src="public/portfolio/LOGO.png" alt="" /> Yudaev branding</h2>
                            <button className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-10 flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black text-h9 leading-h9"><img src="/public/main page/icons/mn_icn.svg" alt="" />МЕНЮ</button>
                            <button className="hover:bg-gr active:bg-sal active:text-[#00000099] transition-all delay-25 z-10 uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-black text-h9 leading-h9">Заполнить бриф</button>
                        </nav>
                        <img className="absolute left-0 top-[50px]" src='public\portfolio\metaball_1.png' alt="" />
                        <img className="absolute top-0 left-[532px]" src='public\portfolio\metaball_2.png' alt="" />
                        <img className="absolute top-[418px] left-[338px]" src='public\portfolio\metaball_3.png' alt="" />
                        <img className="absolute bottom-[50px] right-0" src='public\portfolio\metaball_4.png' alt="" />
                        <h1 className='font-medium text-h1 leading-h1 mt-[473px] text-white mix-blend-difference'>Услуги<span className="ml-[176px]">(6)</span></h1>
                        <div className="absolute bottom-[70px]">
                            <div className='mt-[266px] ml-[630px] text-white mix-blend-difference font-medium'>
                                <p className='ml-[25px]'>Ведем проекты от идеи до публикации в Интернете.</p>
                                <p className=''>Можем подключится к проекту на любом этапе.</p>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="bg-black pt-[150px] pb-[300px] border-b-[1px] border-[#FFFFFFB2]">
                    <section className="conteiner ">
                        <ul className='flex flex-col gap-y-[40px]'>
                            <li className='border-[1px] rounded-[10px] pt-[20px] px-[25px] uppercase'>
                                <h3 className='flex justify-between text-white'>Лендинг <span className='flex gap-x-[119px] text-[#FFFFFF66]'>От 100 000 ₽<span>14-21 день</span></span></h3>
                            </li>
                            <li className='border-[1px] rounded-[10px] pt-[20px] px-[25px] uppercase'>
                                <h3 className='flex justify-between text-white'>Многостраничный сайт <span className='flex gap-x-[119px] text-[#FFFFFF66]'>От 300 000 ₽<span>14-21 день</span></span></h3>
                            </li>
                            <li className='border-[1px] rounded-[10px] pt-[20px] px-[25px] uppercase'>
                                <h3 className='flex justify-between text-white'>Интернет магазин <span className='flex gap-x-[119px] text-[#FFFFFF66]'>От 500 000 ₽<span>14-21 день</span></span></h3>
                            </li>
                            <li className='border-[1px] rounded-[10px] pt-[20px] px-[25px] uppercase'>
                                <h3 className='flex justify-between text-white'>Новостной сайт <span className='flex gap-x-[119px] text-[#FFFFFF66]'>От 500 000 ₽<span>14-21 день</span></span></h3>
                            </li>
                            <li className='border-[1px] rounded-[10px] pt-[20px] px-[25px] uppercase'>
                                <h3 className='flex justify-between text-white'>Дизайн приложений <span className='flex gap-x-[119px] text-[#FFFFFF66]'>От 500 000 ₽<span>14-21 день</span></span></h3>
                            </li>
                            <li className='border-[1px] rounded-[10px] pt-[20px] px-[25px] uppercase'>
                                <h3 className='flex justify-between text-white'>Брендинг <span className='flex gap-x-[119px] text-[#FFFFFF66]'>От 500 000 ₽<span>14-21 день</span></span></h3>
                            </li>
                        </ul>
                    </section>
                </main>
                <Footer/>
            </div>
        </>
    )
}
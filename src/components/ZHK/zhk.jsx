import { Footer } from "../Footer";
import { Header } from "../header";
import { Rate } from "../rate";
import { useEffect } from "react";
import '/src/App.css'

export function ZHK() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-[#F5F5F7]'>
                <Header title='Жить' title2='Комфортно' desk='Хедж Фонд' kind2='Одностраничный сайт'/>
                <main>
                    <div className="bg-black">
                        <section className="conteiner relative pt-[185px] pb-[195px]">
                            <h2 className="absolute mx-auto right-0 left-[76px] top-[161px] text-[415px] leading-[498px] tracking-[40px] monument font-normal text-[#80DEABCC]">ZHK</h2>
                            <ul className="flex items-center ml-[9px]">
                                <li className="mr-[-5px] z-[1] mt-[40px]"><img src="public\ZHK\header_img1.png" alt="" /></li>
                                <li className="z-0"><img src="public\ZHK\header_img2.png" alt="" /></li>
                                <li className="ml-[-5px] z-[1] mt-[40px]"><img src="public\ZHK\header_img3.png" alt="" /></li>
                            </ul>
                        </section>
                        <div className="bg-[#F5F5F7]">
                            <section className='conteiner pt-[150px] text-black'>
                                <ul className='flex gap-x-[170px]'>
                                    <li className='mt-[286px] w-[390px] pt-[10px]'>
                                        <h4 className='uppercase text-h7 leading-h7 mb-[30px] desk_text'>Виды работ</h4>
                                        <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                            <li className='font-medium text-h8 leading-h8 pb-[5px] flex justify-between'>Одностраничный сайт</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                        <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Компания по ремонту квартир, офисов, домов в Москве и Московской области.</p>
                                        <img src="public\ZHK\about_client.png" alt="" />
                                    </li>
                                </ul>
                            </section>
                            <section className='conteiner pt-[250px] text-black'>
                                <ul className='flex'>
                                    <li className="mt-[356px]">
                                        <img src="public\ZHK\task.png" alt="" />
                                    </li>
                                    <li className="pr-[80px]">
                                        <div>
                                            <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Задача</h3>
                                            <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Цель руководства — упрощение восприятия бренда для его использования, с помощью расшифровки технических аспектов предполагается раскрыть потенциал фирменного стиля компании и повысить эффективность.</p>
                                        </div>
                                        <div className="flex flex-col h-full">
                                            <h4 className="uppercase ml-[315px] mb-[30px] text-h7 leading-h7 font-medium">Этапы сайта</h4>
                                            <ol className="flex flex-col list tracking-tight desk_text text-[#000000B2] ml-[275px] gap-y-[10px]">
                                                <li className="nums2 flex gap-x-[23px] whitespace-nowrap font-normal">Анализ потребностей ЦА</li>
                                                <li className="nums2 flex gap-x-[20px] whitespace-nowrap font-normal">Функционал и структура сайта</li>
                                                <li className="nums2 flex gap-x-[20px] font-normal">Прототип</li>
                                                <li className="nums2 flex gap-x-[20px] font-normal">Дизайн</li>
                                                <li className="nums2 flex gap-x-[20px] whitespace-nowrap font-normal">UI-Kit</li>
                                            </ol>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                            <section className="conteiner mt-[250px] text-black">
                                <div className="ml-[560px]">
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Сайт</h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                                </div>
                                <div className="relative">
                                    <img className="mx-auto relative z-[1] mb-[250px]" src="public\ZHK\site.png" alt="" />                                    
                                    <ul>
                                        <li className="absolute top-[225px] right-0"><img src="public\ZHK\site_ph1.png" alt="" /></li>
                                        <li className="absolute top-[984px] left-0"><img src="public\ZHK\site_ph2.png" alt="" /></li>
                                        <li className="absolute top-[1440px] right-0 z-[1]"><img src="public\ZHK\site_ph3.png" alt="" /></li>
                                    </ul>
                                    <div className="flex absolute bg-[#80DEAB] h-[980px] w-[1440px] left-[-80px] bottom-0 z-0">
                                        <img className="w-[709px] absolute left-0 bottom-[-1px]" src="public\ZHK\site_bg1.png" alt="" />
                                        <img className="w-[709px] absolute right-0 bottom-[-1px]" src="public\ZHK\site_bg2.png" alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="bg-black">
                            <section className="conteiner pt-[250px]">
                                <div className="ml-[560px]">
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium text-[#80DEAB]'>Дизайн<span>Система</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                                </div>
                                <div className="flex flex-col mb-[150px]">
                                    <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[770px] font-medium pt-[10px] pb-[7px] uppercase text-[#80DEAB]">
                                        <h4>Типографика</h4>
                                        <h4 className="mr-[305px]">1 шрифт</h4>
                                    </div>
                                    <div className="font-normal uppercase">
                                        <div className="basis-1/2 flex flex-col items-center justify-center border-[#FFFFFF33]">
                                            <h2 className="text-[70px] leading-[77px] py-[121px] gilroy font-normal text-[#80DEAB]">Gotham Pro</h2>
                                            <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                                <li className="mr-[233px]">Начертания</li>
                                                <li className="mr-[96px]">Light</li>
                                                <li className="mr-[160px]">Regular</li>
                                                <li className="mr-[236px]">Medium</li>
                                                <li>SemiBold</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="flex flex-col pt-[80px] pb-[40px] gap-y-[10px] uppercase font-medium">
                                        <li className="bg-gradient-to-tr to-[#80BC51] from-[#80DEAB] p-[20px] flex flex-col gap-y-[178px] w-full rounded-[15px]">
                                            <p className="text-right">#80BC51</p>
                                            <p className="text-center">Градиент</p>
                                            <p className="text-left">#80DEAB</p>
                                        </li>
                                        <li className="w-full rounded-[10px] bg-[#141414] p-[20px] pt-[56px] text-[#FFFFFF] border-[1px] border-[#FFFFFF33] flex flex-col gap-y-[18px]">
                                            <p className="text-center">Цвет Плашек</p>
                                            <p>#141414</p>
                                        </li>
                                        <li className="w-full rounded-[10px] bg-[#020202] p-[20px] pt-[56px] text-[#FFFFFF] border-[1px] border-[#FFFFFF33] flex flex-col gap-y-[18px]">
                                            <p className="text-center">Фон</p>
                                            <p>#020202</p>
                                        </li>
                                    </ul>
                                    <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[768px] font-medium pt-[10px] pb-[7px] uppercase mb-[80px]">
                                        <h4 className="text-[#80DEAB]">Колористика</h4>
                                        <h4 className="mr-[305px] text-[#FFFFFF66]">3 цвета</h4>
                                    </div>
                                    <ul className="flex gap-x-[110px] mb-[40px] text-[#80DEAB]">
                                        <li>
                                            <ul className="uppercase w-[280px] font-medium">
                                                <li className="py-[10px] border-t-[0.5px] border-b-[0.5px] border-[#FFFFFF33]">
                                                    <p className="flex justify-between leading-[17px]">Размер Полей<span className="text-[#FFFFFF66]">135</span></p>
                                                </li>
                                                <li className="py-[10px] border-b-[0.5px] border-[#FFFFFF33]">
                                                    <p className="flex justify-between leading-[17px]">Размер колонок<span className="text-[#FFFFFF66]">80</span></p>
                                                </li>
                                                <li className="py-[10px] border-b-[0.5px] border-[#FFFFFF33]">
                                                    <p className="flex justify-between leading-[17px]">между колонок<span className="text-[#FFFFFF66]">20</span></p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="border-[3px] border-[#80DEAB] w-[890px] rounded-[20px] flex gap-x-[11px] justify-center">
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[507px] w-[51px]"></div>
                                        </li>
                                    </ul>
                                    <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[336px] font-medium pt-[10px] pb-[7px] uppercase mb-[80px]">
                                        <h4 className="text-[#80DEAB]">Сетка</h4>
                                        <ul className="flex text-[#FFFFFF66]">
                                            <li className="mr-[254px]">Десктоп</li>
                                            <li>12 колонок</li>
                                        </ul>
                                    </div>
                                    <ul className="flex gap-x-[250px] mb-[40px] text-[#80DEAB]">
                                        <li>
                                            <ul className="uppercase w-[280px] font-medium">
                                                <li className="py-[10px] border-t-[0.5px] border-b-[0.5px] border-[#FFFFFF33]">
                                                    <p className="flex justify-between leading-[17px]">Размер Полей<span className="text-[#FFFFFF66]">135</span></p>
                                                </li>
                                                <li className="py-[10px] border-b-[0.5px] border-[#FFFFFF33]">
                                                    <p className="flex justify-between leading-[17px]">Размер колонок<span className="text-[#FFFFFF66]">80</span></p>
                                                </li>
                                                <li className="py-[10px] border-b-[0.5px] border-[#FFFFFF33]">
                                                    <p className="flex justify-between leading-[17px]">между колонок<span className="text-[#FFFFFF66]">20</span></p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="border-[3px] border-[#80DEAB] w-[220px] rounded-[30px] flex gap-x-[11px] justify-center">
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                            <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        </li>
                                    </ul>
                                    <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[336px] font-medium pt-[10px] pb-[7px] uppercase">
                                        <h4 className="text-[#80DEAB]">Сетка</h4>
                                        <ul className="flex text-[#FFFFFF66]">
                                            <li className="mr-[254px]">Мобильная</li>
                                            <li>5 колонок</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <img className="mx-auto" src="public\ZHK\design_bottom.png" alt="" />
                        <div>
                            <section className="conteiner pt-[250px] pb-[150px]">
                                <div className="mb-[345px]">
                                    <img className="mx-auto z-[1] relative" src="public\ZHK\big_site.png"/>
                                    <div className="absolute z-[0] top-[368px] mx-auto right-0 left-0 w-[1112px] h-[748px] bg-gradient-to-tr from-[#80DEAB] to-[#80BC51] blur-[200px] rounded-[20px]"/>
                                    <div className="absolute z-[0] top-[2304px] left-[125px] w-[643px] h-[428px] bg-gradient-to-tr from-[#80DEAB] to-[#80BC51] blur-[140px] rounded-[20px]"/>
                                    <div className="absolute z-[0] top-[2905px] right-[125px] w-[643px] h-[428px] bg-gradient-to-tr from-[#80DEAB] to-[#80BC51] blur-[140px] rounded-[20px]"/>
                                </div>
                                <div className="relative w-full h-[720px] bg-[#80DEAB] mx-auto mb-[801px]">
                                    <img className="z-[0]" src="public\ZHK\circle.png" alt="" />
                                    <ul className="flex gap-x-[20px] absolute right-[410px] top-[-195px]">
                                        <li className="flex flex-col gap-y-[20px] ">
                                            <img src="public\ZHK\main_ph1.png" alt="" />
                                            <img src="public\ZHK\main_ph3.png" alt="" />
                                        </li>
                                        <li className="mt-[150px] flex flex-col gap-y-[20px]">
                                            <img src="public\ZHK\main_ph2.png" alt="" />
                                            <img src="public\ZHK\main_ph4.png" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
                <Rate/>
                <Footer/>
            </div>
        </>
    )
}
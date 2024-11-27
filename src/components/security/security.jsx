import { Header } from "../header";
import { Rate } from "../rate" 
import { Footer } from "../Footer"
import { useEffect } from "react";

export function Security() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative'>
                <Header title='Global' title2='Secure' title3='Invest' desk='Хедж Фонд' kind2='Многостраничный сайт'/>
                <main className="bg-white text-black">
                    <img className="mx-auto" src="public\security\header_img.png" alt="" />
                    <div className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[150px]'>
                        <section className='mb-[250px]'>
                            <ul className='flex gap-x-[170px]'>
                                <li className='mt-[319px] border-t-[1px] w-[390px] pt-[10px]'>
                                    <h4 className='uppercase text-h7 leading-h7 mb-[135px] desk_text'>Виды работ</h4>
                                    <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                        <li className='font-medium text-h8 leading-h8 border-b-[1px] pb-[5px] flex justify-between'>Многостраничный сайт<span>01</span></li>
                                        <li className='font-medium text-h8 leading-h8 border-b-[1px] pb-[5px] flex justify-between'>Платформа <span>02</span></li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Хэдж-фонд, который занимается инвестициями в технологические компании и технологии на стадиях IPO и Pre-IPO. $23,6 млн капитал под управлением.</p>
                                    <img src="public\security\client_img.png" alt="" />
                                </li>
                            </ul>
                        </section>
                        <section className='mb-[250px]'>
                            <ul className='flex flex-col caret-slate-50 border-[1px] border-[#00000033] w-[1280px] rounded-[20px]'>
                                <li className="border-b-[1px] border-[#00000033] pl-[560px] pt-[80px] pr-[80px]">
                                    <div>
                                        <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Задача</h3>
                                        <p className='w-[640px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Цель руководства — упрощение восприятия бренда для его использования, с помощью расшифровки технических аспектов предполагается раскрыть потенциал фирменного стиля компании и повысить эффективность.</p>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <div className="flex flex-col gap-y-[200px] basis-1/2 w-[560px] border-r-[1px] border-[#00000033] h-full p-[40px]">
                                        <h4 className="uppercase whitespace-nowrap text-h7 leading-h7">Этапы Сайт</h4>
                                        <ol className="flex flex-col list tracking-tight desk_text text-[#000000B2]">
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[23px] whitespace-nowrap">Анализ потребностей ЦА</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px] whitespace-nowrap">Функционал и структура сайта</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px]">Прототип</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px]">Дизайн</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px]">UI-Kit</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] border-b-[1px] justify-between gap-x-[20px]">Адаптив</li>
                                        </ol>
                                    </div>
                                    <div className="flex flex-col gap-y-[200px] basis-1/2 w-[560px] h-full p-[40px]">
                                        <h4 className="uppercase whitespace-nowrap text-h7 leading-h7">Этапы Платформа</h4>
                                        <ol className="flex flex-col list tracking-tight gap-x-[159px] desk_text text-[#000000B2]">
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[23px] whitespace-nowrap">Анализ потребностей ЦА</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px] whitespace-nowrap">Функционал и структура сайта</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px]">Прототип</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px]">Дизайн</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px]">UI-Kit</li>
                                            <li className="nums2 flex border-t-[1px] border-[#00000033] pt-[15px] p-[5px] border-b-[1px] justify-between gap-x-[20px]">Адаптив</li>
                                        </ol>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Прототип</h3>
                                <p className='w-[640px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Цель руководства — упрощение восприятия бренда для его использования, с помощью расшифровки технических аспектов предполагается раскрыть потенциал фирменного стиля компании и повысить эффективность.</p>
                            </div>
                        </section>
                    </div>
                    <div className='relative mx-auto flex flex-col w-full pt-[150px] bg-[#191919] pb-[250px]'>
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pb-[112px] px-[80px] text-right border-b-[0.5px] border-[#FFFFFF33]">
                            <ul className="flex gap-x-[5px]">
                                <li><img src="public\security\prototipe1.png" alt="" /></li>
                                <li><img src="public\security\prototipe2.png" alt="" /></li>
                                <li><img src="public\security\prototipe3.png" alt="" /></li>
                                <li><img src="public\security\prototipe4.png" alt="" /></li>
                                <li><img src="public\security\prototipe5.png" alt="" /></li>
                                <li><img src="public\security\prototipe6.png" alt="" /></li>
                                <li><img src="public\security\prototipe7.png" alt="" /></li>
                                <li><img src="public\security\prototipe8.png" alt="" /></li>
                                <li><img src="public\security\prototipe9.png" alt="" /></li>
                            </ul>
                            <h4 className="text-[#FFFFFF80] uppercase">Сайт</h4>
                        </section>
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pt-[150px] px-[80px]">
                            <ul className="flex gap-x-[219px]">
                                <li className="flex flex-col gap-y-[7px]">
                                    <div className="flex gap-x-[220px]">
                                        <img className="w-[208px]" src="public\security\prototipe10.png" alt="" />
                                        <img className="w-[208px]" src="public\security\prototipe15.png" alt="" />
                                    </div>
                                    <img className="w-[208px]" src="public\security\prototipe11.png" alt="" />
                                    <div className="flex gap-x-[7px]">
                                        <img className="w-[208px]" src="public\security\prototipe12.png" alt="" />
                                        <img className="w-[208px]" src="public\security\prototipe13.png" alt="" />
                                        <img className="w-[208px]" src="public\security\prototipe14.png" alt="" />
                                    </div>
                                </li>
                                <li className="flex items-end flex-col gap-y-[7px]">
                                    <div className="flex gap-x-[7px]">
                                        <img className="w-[208px]" src="public\security\prototipe16.png" alt="" />
                                        <img className="w-[208px]" src="public\security\prototipe17.png" alt="" />
                                    </div>
                                    <img className="w-[208px]" src="public\security\prototipe18.png" alt="" />
                                    <h4 className="text-[#FFFFFF80] uppercase mt-[9px] font-medium">Платформа</h4>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="bg-white">
                        <section className="flex max-w-[1440px] mx-auto w-full">
                            <div className="flex items-center justify-center basis-1/2 bg-[#FFFFFF]">
                                <img src="public\security\prototipe_ph.png" alt="" />
                            </div>
                            <img className="w-[720px] basis-1/2" src="public\security\prototipe_img.png" alt="" />
                        </section>
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pt-[250px] px-[80px] pb-[250px]">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Сайт</h3>
                                <p className='w-[640px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                            </div>
                            <img className="mx-auto" src="public\security\site.png" alt="" />
                        </section>
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full">
                            <img className="absolute mx-auto right-0 left-0 z-[0]" src="public\security\site_ph_bg.png" alt="" />
                            <ul className="flex mt-[90px] z-[1] mx-auto mb-[90px]">
                                <li className="mr-[250px] mt-[194px]"><img src="public\security\site_ph1.png" alt="" /></li>
                                <li className="mr-[29px] mt-[194px]"><img src="public\security\site_ph2.png" alt="" /></li>
                                <li><img src="public\security\site_ph3.png" alt="" /></li>
                            </ul>
                        </section>
                    </div>
                    <div className="bg-black text-white">
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pt-[250px] px-[80px] pb-[150px]">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Дизайн<span>Система</span></h3>
                                <p className='w-[640px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[770px] font-medium pt-[10px] pb-[7px] uppercase">
                                    <h4>Типографика</h4>
                                    <h4 className="mr-[305px]">1 шрифта</h4>
                                </div>
                                <div className="font-normal uppercase">
                                    <div className="basis-1/2 flex flex-col items-center justify-center border-[#FFFFFF33]">
                                        <h2 className="text-[70px] leading-[77px] py-[121px] montserrat">Montserrat</h2>
                                        <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                            <li className="mr-[386px]">Начертания</li>
                                            <li className="mr-[287px]">Medium</li>
                                            <li className="mr-[176px]">SemiBold</li>
                                            <li>Bold</li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="flex gap-x-[25px] font-medium justify-center py-[30px]">
                                    <li className="border-[1px] border-[#FFFFFF33] flex flex-col text-center w-[410px]">
                                        <div className="w-full h-[368px] bg-[#E10404]"></div>
                                        <p className="py-[20px]">#E10404</p>
                                    </li>
                                    <li className="border-[1px] border-[#FFFFFF33] flex flex-col text-center w-[410px]">
                                        <div className="w-full h-[368px] bg-[#FFFFFF]"></div>
                                        <p className="py-[20px]">#FFFFFF</p>
                                    </li>
                                    <li className="border-[1px] border-[#FFFFFF33] flex flex-col text-center w-[410px]">
                                        <div className="w-full h-[368px] bg-[#1C1C1C]"></div>
                                        <p className="py-[20px]">#1C1C1C</p>
                                    </li>
                                </ul>
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[768px] font-medium pt-[10px] pb-[7px] uppercase mb-[250px]">
                                    <h4>Колористика</h4>
                                    <h4 className="mr-[305px]">3 цвета</h4>
                                </div>
                                <ul className="flex gap-x-[20px]">
                                    <li className="mt-[144px]"><img src="\security\robinhood.png" alt="" /></li>
                                    <li className="mt-[144px]"><img src="\security\apple.png" alt="" /></li>
                                    <li><img src="\security\google.png" alt="" /></li>
                                    <li className="mt-[144px]"><img src="\security\tesla.png" alt="" /></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pt-[250px] px-[80px] pb-[250px]">
                            <ul className="flex">
                                <li className="">
                                    <h4 className="w-full border-t-[1px] border-[#00000033] border-b-[1px] uppercase pt-[10px] pb-[7px]">Портфельное инвестирование</h4>
                                    <div className="pr-[20px] mt-[80px]"><img src="public\security\invest_bag.png" alt="" /></div>
                                </li>
                                <li className="text-right border-l-[1px] border-b-[1px] border-[#00000033] pb-[80px]">
                                    <h4 className="w-full border-t-[1px] border-[#00000033] border-b-[1px] uppercase pt-[10px] pb-[7px]">Венчурные инвестиции</h4>
                                    <div className="pl-[20px] mt-[80px]"><img src="public\security\vench_invest.png" alt="" /></div>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div>
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pt-[250px] px-[80px]">
                            <div className="flex w-[1440px] absolute mx-auto right-0 left-0 z-[0]">
                                <img className="" src="public\security\hadge_fond_bg2.png" alt="" />
                                <img className="" src="public\security\hadge_fond_bg.png" alt="" />
                            </div>
                            <ul className="z-[1] relative flex gap-x-[160px]">
                                <li className="mt-[58px]"><img src="public\security\hadge_fond.png" alt="" /></li>
                                <li className="mt-[664px] mb-[240px]"><img src="public\security\questions.png" alt="" /></li>
                            </ul>
                        </section>
                    </div>
                    <div className="bg-black text-white">
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pt-[250px] px-[80px] pb-[250px]">
                            <div className="ml-[560px]">
                                <h3 className='flex flex-col gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Инвестиционная<span className="ml-[329px]">Платформа</span></h3>
                                <p className='w-[640px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.</p>
                            </div>
                            <div className="border-[1px] border-[#FFFFFF33]">
                                <ul className="flex justify-center border-b-[1px] border-[#FFFFFF33]">
                                    <li className="flex items-center justify-center border-r-[1px] border-[#FFFFFF33] pt-[30px] pb-[40px] pr-[18px]"><img src="public\security\platform1.png" alt="" /></li>
                                    <li className="px-[171px] flex items-center uppercase text-[#FFFFFF66] font-medium">Портфель</li>
                                    <li className="flex border-l-[1px] border-[#FFFFFF33] pt-[30px] pb-[40px] pl-[18px]"><img src="public\security\platform2.png" alt="" /></li>
                                </ul>
                                <ul className="flex border-b-[1px] border-[#FFFFFF33]">
                                    <li className="py-[293px] px-[116.5px] uppercase text-[#FFFFFF66] border-r-[1px] border-[#FFFFFF33] font-medium">Документы и Отчеты</li>
                                    <li className="flex gap-x-[36px] pt-[40px] pl-[18px]">
                                        <img className="w-[390px] h-[279px]" src="public\security\platform3.png" alt="" />
                                        <img className="w-[390px] h-[205px] mt-[319px]" src="public\security\platform4.png" alt="" />
                                    </li>
                                </ul>
                                <ul className="flex border-b-[1px] border-[#FFFFFF33]">
                                    <li className="pt-[40px] px-[18px] border-r-[1px] border-[#FFFFFF33] pb-[40px]"><img src="public\security\platform5.png" alt="" /></li>
                                    <li className="px-[338px] py-[165px] whitespace-nowrap uppercase text-[#FFFFFF66] font-medium">Операции по счету</li>
                                </ul>
                                <ul className="flex">
                                    <li className="px-[18px] border-r-[1px] border-[#FFFFFF33] py-[50px]"><img src="public\security\platform6.png" alt="" /></li>
                                    <li className="px-[18px] border-r-[1px] border-[#FFFFFF33] py-[50px]"><img src="public\security\platform7.png" alt="" /></li>
                                    <li className="px-[18px] py-[50px]"><img src="public\security\platform8.png" alt="" /></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="bg-white">
                        <img className="absolute mx-auto right-0 left-0 " src="public\security\menu_bg.png" alt="" />
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full px-[80px] z-[0]">
                            <ul className="flex gap-x-[165px] py-[150px] z-[1]">
                                <li className="mt-[189px]"><img src="public\security\small_menu.png" alt="" /></li>
                                <li><img src="public\security\big_menu.png" alt="" /></li>
                            </ul>
                        </section>
                    </div>
                </main>
                <Rate/>
                <Footer/>
            </div>
        </>
    )
}
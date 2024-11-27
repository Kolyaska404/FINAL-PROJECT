import { Header } from "../header"
import { Rate } from "../rate" 
import { Footer } from "../Footer"
import { useEffect } from "react"
import '/src/App.css'

export function Dubai() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-[#F5F5F7]'>
                <Header title='Dubai' desk='Курс по трудоустройству' kind2='Одностраничный сайт'/>
                <main>
                    <img className="mx-auto" src="public\dubai\header_img.png" alt="" />
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
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Мобильное приложение по составлению сметы онлайн.</p>
                                    <img src="public\dubai\about_client.png" alt="" />
                                </li>
                            </ul>
                        </section>
                        <section className='conteiner pt-[250px] text-black'>
                            <ul className='flex'>
                                <li className="pr-[80px]">
                                    <ul className='flex flex-col '>
                                        <li className="ml-[560px] pt-[80px] pr-[80px]">
                                            <div>
                                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Задача</h3>
                                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Цель руководства — упрощение восприятия бренда для его использования, с помощью расшифровки технических аспектов предполагается раскрыть потенциал фирменного стиля компании и повысить эффективность.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col gap-y-[30px] h-full pt-[16px] pb-[5px]">
                                                <h4 className="uppercase whitespace-nowrap text-h7 leading-h7">Этапы Сайт</h4>
                                                <ol className="flex flex-col list tracking-tight desk_text text-[#000000B2] text-left">
                                                    <li className="nums2 flex pt-[15px] p-[5px] justify-between gap-x-[23px] whitespace-nowrap font-normal">Анализ потребностей ЦА</li>
                                                    <li className="nums2 flex pt-[15px] p-[5px] justify-between gap-x-[20px] whitespace-nowrap font-normal">Функционал и структура сайта</li>
                                                    <li className="nums2 flex pt-[15px] p-[5px] justify-between gap-x-[20px] font-normal">Прототип</li>
                                                    <li className="nums2 flex pt-[15px] p-[5px] justify-between gap-x-[20px] font-normal">Дизайн</li>
                                                    <li className="nums2 flex pt-[15px] p-[5px] justify-between gap-x-[20px] font-normal">UI-Kit</li>
                                                </ol>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                        <div className="relative">
                            <img className="absolute bottom-[996px] z-0 w-[1440px] mx-auto right-0 left-0" src="public\dubai\site_bg.png" alt="" />
                            <section className="conteiner mt-[250px] text-black mb-[250px]">
                                <div className="ml-[560px]">
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Сайт</h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                                </div>
                                <div className="relative">
                                    <img className="mx-auto z-[1] relative" src="public\dubai\site.png" alt="" />
                                    <img className="absolute top-[150px] right-0" src="public\dubai\site_ph1.png" alt="" />
                                    <img className="absolute left-0 top-[745px]" src="public\dubai\site_ph2.png" alt="" />
                                    <img className="absolute right-0 top-[1327px]" src="public\dubai\site_ph3.png" alt="" />
                                    <img className="absolute bottom-[839px] right-0 z-[1]" src="public\dubai\site_ph4.png" alt="" />
                                    <img className="absolute bottom-0 z-[1]" src="public\dubai\site_ph5.png" alt="" />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="bg-black">
                        <section className="conteiner pt-[250px]">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium text-[#FFD744]'>Дизайн<span>Система</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                            </div>
                            <div className="flex flex-col mb-[150px]">
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[770px] font-medium pt-[10px] pb-[7px] uppercase text-[#FFD744]">
                                    <h4>Типографика</h4>
                                    <h4 className="mr-[305px]">1 шрифт</h4>
                                </div>
                                <div className="font-normal uppercase">
                                    <div className="basis-1/2 flex flex-col items-center justify-center border-[#FFFFFF33]">
                                        <h2 className="text-[70px] leading-[77px] py-[121px] montserrat font-normal text-[#FFD744]">Montserrat</h2>
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
                                    <li className="bg-gradient-to-l to-[#FF3025] from-[#FFD744] p-[20px] flex justify-between items-center py-[216px] w-full rounded-[15px]">
                                        <p className="text-right">#FF3025</p>
                                        <p className="text-center">Градиент</p>
                                        <p className="text-left">#FFD744</p>
                                    </li>
                                    <li className="w-full rounded-[10px] bg-[#070707] px-[20px] py-[56px] text-[#FFFFFF] border-[1px] border-[#FFFFFF33] flex gap-x-[518px]">
                                        <p>#070707</p>
                                        <p className="text-center">Текст</p>
                                    </li>
                                    <li className="w-full rounded-[10px] bg-[#F3F1F5] px-[20px] py-[56px] text-black border-[1px] border-[#FFFFFF33] flex gap-x-[524px]">
                                        <p>#F3F1F5</p>
                                        <p className="text-center">Фон</p>
                                    </li>
                                    <li className="w-full rounded-[10px] bg-[#FFFFFF] px-[20px] py-[56px] text-black border-[1px] border-[#FFFFFF33] flex gap-x-[495px]">
                                        <p>#FFFFFF</p>
                                        <p className="text-center">Акцентный</p>
                                    </li>
                                </ul>
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[485px] font-medium pt-[10px] pb-[7px] uppercase mb-[80px]">
                                    <h4 className="text-[#FFD744]">Колористика</h4>
                                    <h4 className="mr-[305px] text-[#FFFFFF66]">4 цвета</h4>
                                </div>
                                <ul className="flex gap-x-[110px] mb-[40px] text-[#FFD744]">
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
                                    <li className="border-[3px] border-[#FFD744] w-[890px] rounded-[20px] flex gap-x-[11px] justify-center">
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
                                    <h4 className="text-[#FFD744]">Сетка</h4>
                                    <ul className="flex text-[#FFFFFF66]">
                                        <li className="mr-[254px]">Десктоп</li>
                                        <li>12 колонок</li>
                                    </ul>
                                </div>
                                <ul className="flex gap-x-[250px] mb-[40px] text-[#FFD744]">
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
                                    <li className="border-[3px] border-[#FFD744] w-[220px] rounded-[30px] flex gap-x-[11px] justify-center overflow-hidden">
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                    </li>
                                </ul>
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[336px] font-medium pt-[10px] pb-[7px] uppercase">
                                    <h4 className="text-[#FFD744]">Сетка</h4>
                                    <ul className="flex text-[#FFFFFF66]">
                                        <li className="mr-[254px]">Мобильная</li>
                                        <li>6 колонок</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="bg-[#F5F5F7] text-black relative">
                        <img className="absolute top-[200px] z-0 w-[1440px] mx-auto right-0 left-0" src="public\dubai\DUBAI_bg_lines.png" alt="" />
                        <img className="absolute top-[250px] z-0 w-[1440px] mx-auto right-0 left-0" src="public\dubai\DUBAI_bg.png" alt="" />
                        <section className="conteiner pt-[412px]">
                            <div className="relative pb-[62px] mb-[413px]">
                                <h2 className="uppercase inter text-[450px] leading-[545px] tracking-[-20px] text-[#FFD744] relative z-[1]">Dubai</h2>
                            </div>
                            <div className="mb-[237px]">
                                <ul className="flex gap-x-[91px]">
                                    <li><img src="public\dubai\lp_dubai.png" alt="" /></li>
                                    <li className="flex gap-x-[60px] relative mt-[515px]">
                                        <div className="absolute z-[0] w-[633px] h-[633px] bg-[#FF9B39] rounded-[100%] top-[183px] left-[-67px]"></div>
                                        <img className="z-[1] w-[220px] h-[470px] mt-[235px]" src="public\dubai\lp_dubai_ph1.png" alt="" />
                                        <div className="flex flex-col z-[1] gap-y-[60px]">
                                            <img className="w-[220px] h-[470px]" src="public\dubai\lp_dubai_ph2.png" alt="" />
                                            <img className="w-[220px] h-[838px]" src="public\dubai\lp_dubai_ph3.png" alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-[400px]">
                                <ul className="flex relative pt-[150px]">
                                    <li className="absolute right-[110px] top-0"><img src="public\dubai\small_img2.png" alt="" /></li>
                                    <li className="mx-auto"><img src="public\dubai\big_img.png" alt="" /></li>
                                    <li className="absolute left-[110px] bottom-[-150px]"><img src="public\dubai\small_img1.png" alt="" /></li>
                                </ul>
                            </div>
                            <div>
                                <img className="mx-auto mb-[150px]" src="public\dubai\big_bottom_site.png" alt="" />
                                <div className="relative">
                                    <ul className="flex gap-x-[160px] relative z-[1] ml-[100px]">
                                        <li className="flex gap-x-[20px]">
                                            <img className="w-[220px] h-[470px]" src="public\dubai\phone1.png" alt="" />
                                            <img className="mt-[235px] w-[220px] h-[470px]" src="public\dubai\phone2.png" alt="" />
                                        </li>
                                        <li className="flex gap-x-[20px] mt-[235px]">
                                            <img className="w-[220px] h-[470px]" src="public\dubai\phone3.png" alt="" />
                                            <img className="mt-[235px] w-[220px] h-[470px]" src="public\dubai\phone4.png" alt="" />
                                        </li>
                                    </ul>
                                    <div className="absolute top-[41px] z-0 mx-auto right-0 left-0 w-[857px] h-[857px] bg-gradient-to-br to-[#FF3025] from-[#FFD744] rounded-[100%] border-[3px] border-[#FFD744]"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <Rate/>
                <Footer/>
            </div>
        </>
    )
}
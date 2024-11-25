import { Header } from "../header"
import { Rate } from "../rate" 
import { Footer } from "../Footer"
import '/src/App.css'
export function Vlaston() {
    return (
        <div className='w-full flex flex-col min-h-full mx-auto relative'>
            <Header title='vlaston' desk='Агенство недвижимости' kind2='Одностраничный сайт'/>
            <main className="bg-white text-black">
                <img className="mx-auto w-[1440px]" src="public\vlaston\header_img.png" alt="" />
                <div className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[150px]'>
                    <section className='mb-[250px]'>
                        <ul className='flex gap-x-[40px]'>
                            <li className='mt-[286px]'>
                                <h4 className='uppercase text-h7 leading-h7 mb-[30px]'>Виды работ</h4>
                                <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                    <li className='font-medium text-h8 leading-h8'>Одностраничный сайт</li>
                                </ol>
                                <img className='ml-[260px] mt-[379px]' src="public\vlaston\small_img.png" alt="" />
                            </li>
                            <li>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Компания по строительству деревяных домов премиум-сегмента в Москве.</p>
                                <img src="public\vlaston\big_img.png" alt="" />
                            </li>
                        </ul>
                    </section>
                    <section className='mb-[250px]'>
                        <ul className='flex flex-col caret-slate-50 border-[1px] border-[#00000033] w-full rounded-[20px]'>
                            <li className="border-b-[1px] border-[#00000033] pl-[560px] pt-[80px] pr-[80px]">
                                <div>
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Задача</h3>
                                    <p className='w-[640px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Цель руководства — упрощение восприятия бренда для его использования, с помощью расшифровки технических аспектов предполагается раскрыть потенциал фирменного стиля компании и повысить эффективность.</p>
                                </div>
                            </li>
                            <li className="ml-[110px] flex items-center py-[156px] gap-x-[161px]">
                                <h4 className="uppercase whitespace-nowrap text-h7 leading-h7">Этапы Сайт</h4>
                                <ol className="flex list grid-flow-col tracking-tight gap-x-[159px] desk_text text-[#000000B2]">
                                    <li>
                                        <div className="nums2 flex gap-x-[23px] whitespace-nowrap">Анализ потребностей ЦА</div>
                                        <div className="nums2 flex gap-x-[20px] whitespace-nowrap">Функционал и структура сайта</div>
                                    </li>
                                    <li>
                                        <div className="nums2 flex gap-x-[20px]">Прототип</div>
                                        <div className="nums2 flex gap-x-[20px]">Дизайн</div>
                                    </li>
                                    <li>
                                        <div className="nums2 flex gap-x-[20px]">UI-Kit</div>
                                        <div className="nums2 flex gap-x-[20px]">Адаптив</div>
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="relative max-w-[1440px] mx-auto flex flex-col w-full">
                    <section className="mb-[250px] flex">
                        <div className="w-[720px] flex justify-center items-center bg-[#EDEAE8]">
                            <div className="px-[115px] py-[102px] rounded-[100%] border-[0.5px] border-[#00000033]"><img src="public\vlaston\task1.png" alt="" /></div>
                            </div>
                        <img src="public\vlaston\task2.png" alt="" />
                    </section>
                </div>
                <div className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full'>
                    <section className='relative max-w-[1440px] mx-auto flex flex-col w-full mb-[306px]'>
                        <div className="ml-[560px]">
                            <h3 className="flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium">Сайт</h3>
                            <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">Разработали дизайн сайта, где можно узнать о компании, её услуги и воспользоваться калькулятором, чтобы узнать условия ипотеки: сумму кредита, ставку и ежемесячный платеж.</p>
                        </div>
                        <img className="mx-auto" src="public\vlaston\site.png" alt="" />
                    </section>
                </div>
                <div className="bg-[#EDEAE8] relative pt-[182px] mx-auto flex flex-col w-full">
                    <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px]'>
                        <h2 className="big_img_text absolute mx-auto w-[1280px] z-[0] bebas">Vlaston</h2>
                        <div className="flex mx-auto mt-[247px] mb-[325px] z-[1]">
                            <img className="w-[220px] h-[446px] mr-10" src="public\vlaston\vlaston_ph1.png" alt="" />
                            <div className="flex flex-col gap-y-10 mt-[-486px] mr-[240px]">
                                <img className="w-[220px] h-[446px]" src="public\vlaston\vlaston_ph2.png" alt="" />
                                <img className="w-[220px] h-[446px]" src="public\vlaston\vlaston_ph3.png" alt="" />
                            </div>
                            <img className="w-[220px] h-[446px]" src="public\vlaston\vlaston_ph4.png" alt="" />
                        </div>
                        <section className="relative">
                            <ul className="relative mb-[325px] ml-[85px] grid grid-cols-slider_col grid-rows-slider_row gap-y-5 gap-x-5 z-[2]">
                                <li className="w-[545px] h-[313px]">
                                    <img src="public\vlaston\slide1.png" alt="" />
                                </li>
                                <li>
                                    <div className="w-[545px] h-[313px] flex items-center justify-center font-medium uppercase text-[#00000066]">Слайдер первого экрана</div>
                                </li>
                                <li className="w-[545px] h-[313px]">
                                    <img src="public\vlaston\slide2.png" alt="" />
                                </li>
                                <li className="w-[545px] h-[313px]">
                                    <img src="public\vlaston\slide3.png" alt="" />
                                </li>
                                <li className="w-[545px] h-[313px] col-start-2">
                                    <img src="public\vlaston\slide4.png" alt="" />
                                </li>
                            </ul>
                        </section>
                        <img className="mx-auto flex absolute left-0 bottom-0 z-[1]" src="public\vlaston\slides_bg.png" alt="" />
                    </section>
                </div>
                <div className="bg-[#191919] text-white relative pt-[250px] mx-auto flex flex-col w-full">
                    <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px]'>
                        <div className="ml-[560px]">
                            <h3 className="flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium">Дизайн<span>Система</span></h3>
                            <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[770px] font-medium pt-[10px] pb-[7px] uppercase">
                                <h4>Типографика</h4>
                                <h4 className="mr-[305px]">2 шрифта</h4>
                            </div>
                            <div className="flex font-normal uppercase">
                                <div className="basis-1/2 flex flex-col items-center justify-center border-r-[1px] border-[#FFFFFF33]">
                                    <h2 className="text-[58px] leading-[63.8px] py-[129px] bebas">Bebas Neue</h2>
                                    <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                        <li className="mr-[245px]">Для заголовков</li>
                                        <li>Bold</li>
                                    </ul>
                                </div>
                                <div className="basis-1/2 flex flex-col items-center justify-center">
                                    <h2 className="text-[58px] leading-[63.8px] py-[129px]">PF Bague Sans</h2>
                                    <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                        <li className="mr-[122px] ml-[30px]">Для текста</li>
                                        <li className="mr-[78px]">Regular</li>
                                        <li className="mr-[127px]">Medium</li>
                                        <li>Bold</li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="flex">
                                <li className="border-r-[1px] border-[#FFFFFF33]">
                                    <div className="p-[73px] rounded-[100%] border-[1px] border-[#FFFFFF33]">
                                        <div className="text-black py-[131px] px-[101px] rounded-[100%] bg-[#FACD7F] font-medium">#FACD7F</div>
                                    </div>
                                </li>
                                <li className="border-r-[1px] border-[#FFFFFF33]">
                                    <div className="p-[73px] rounded-[100%] border-[1px] border-[#FFFFFF33]">
                                        <div className="text-black py-[131px] px-[101px] rounded-[100%] bg-[#FFFFFF] font-medium">#FFFFFF</div>
                                    </div>
                                </li>
                                <li className="border-[#FFFFFF33]">
                                    <div className="p-[73px] rounded-[100%] border-[1px] border-[#FFFFFF33]">
                                        <div className="text-white py-[131px] px-[101px] rounded-[100%] bg-[#121212] font-medium">#121212</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[768px] font-medium pt-[10px] pb-[7px] uppercase mb-[250px]">
                                <h4>Колористика</h4>
                                <h4 className="mr-[305px]">3 цвета</h4>
                            </div>
                            <div className="flex border-b-[1px] border-[#ffffffcb]">
                                <div className="flex flex-col justify-center items-center basis-1/2 mb-24">
                                    <img className="w-[220px] h-[446px] z-[2]" src="public\vlaston\calc_ph1.png" alt="" />
                                    <img className="w-[196px] h-[424px] z-[1] mt-[-143px]" src="public\vlaston\calc_ph2.png" alt="" />
                                </div>
                                <div className="basis-1/2 bg-white px-20 pt-[122px] pb-[150px] text-right">
                                    <p className="uppercase font-medium text-black mb-[10px]">Калькулятор ипотеки</p>
                                    <img className="" src="public\vlaston\calculator.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bg-white text-black relative pt-[250px] mx-auto flex flex-col w-full">
                    <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px] mb-[250px]'>
                        <div className="relative z-[1]">
                            <div className="border-[1px] border-[#00000033] absolute rounded-[100%] w-[1280px] h-[1280px] mx-auto right-0 left-0 flex flex-col gap-y-[150px] rotation_big">
                                <div className="bg-[#FACD7F] w-[20px] h-[20px] rounded-[100%] top-[100px] right-[270px] absolute"></div>
                                <div className="bg-[#FACD7F] w-[20px] h-[20px] rounded-[100%] top-[600px] right-[-9px] absolute"></div>
                                <div className="bg-[#FACD7F] w-[20px] h-[20px] rounded-[100%] bottom-[108px] right-[1000px] absolute"></div>
                            </div>
                            <div className="border-[1px] border-[#00000033] rounded-[100%] w-[940px] h-[940px] absolute mx-auto right-0 left-0 top-[170px] rotation_mid">
                                <div className="bg-[#FACD7F] w-[45px] h-[45px] rounded-[100%] top-[100px] right-[130px] absolute"></div>
                                <div className="bg-[#FACD7F] w-[45px] h-[45px] rounded-[100%] bottom-[50px] right-[195px] absolute"></div>
                                <div className="bg-[#FACD7F] w-[45px] h-[45px] rounded-[100%] top-[200px] left-[45px] absolute"></div>
                            </div>
                            <div className="border-[1px] border-[#00000033] rounded-[100%] w-[600px] h-[600px] absolute mx-auto right-0 left-0 top-[340px] rotation_big">
                                <div className="bg-[#FACD7F] w-[20px] h-[20px] rounded-[100%] top-[37px] right-[130px] absolute"></div>
                                <div className="bg-[#FACD7F] w-[20px] h-[20px] rounded-[100%] bottom-[10px] right-[185px] absolute"></div>
                                <div className="bg-[#FACD7F] w-[20px] h-[20px] rounded-[100%] top-[250px] left-[-8px] absolute"></div>
                            </div>
                        </div>
                        <div className="flex mt-[24px] z-[2]">
                            <img className="w-[630px] h-[1231px] mr-[90px]" src="public\vlaston\ipoteka_vid1.png" alt="" />
                            <img className="w-[220px] h-[446px] mt-[236px] mr-[60px]" src="public\vlaston\ipoteka_vid2.png" alt="" />
                            <img className="w-[220px] h-[446px] mt-[549px]" src="public\vlaston\ipoteka_vid3.png" alt="" />
                        </div>
                    </section>
                    <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px] mb-[250px]'>
                        <img className="mx-auto absolute right-0 left-0 z-[1]" src="public\vlaston\pig.png" alt="" />
                        <div className="mx-auto flex flex-col z-[2] mt-[459px]">
                            <img className="w-[630px] z-[1]" src="public\vlaston\big_site1.png" alt="" />
                            <img className="w-[629px] mt-[-3px] ml-[1px] z-[2]" src="public\vlaston\big_site2.png" alt="" />
                        </div>
                        <img className="absolute top-[872px] left-[140px]" src="public\vlaston\phone1.png" alt="" />
                        <img className="absolute top-[2304px] right-[140px]" src="public\vlaston\phone2.png" alt="" />
                        <div className="flex flex-col justify-center items-center absolute top-[2665px] left-[140px]">
                            <img className="z-[2]" src="public\vlaston\phone3.png" alt="" />
                            <img className="w-[196px] h-[397px] mt-[-12px] z-[1]" src="public\vlaston\phone4.png" alt="" />
                        </div>
                        <img className="absolute top-[3346px] right-[140px]" src="public\vlaston\phone5.png" alt="" />
                    </section>
                </div>
                <div className="bg-white text-black relative mx-auto flex flex-col w-full">
                    <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px]'>
                        <img className="absolute mx-auto right-0 left-0 z-[1]" src="public\vlaston\main_b_bg.png" alt="" />
                        <div className="flex gap-x-[280px] mt-[140px] mb-[140px] ml-[60px]">
                            <img className="z-[2] mt-[128px] w-[] h-[]" src="public\vlaston\main_b_ph.png" alt="" />
                            <img className="z-[2] w-[720px] h-[416px]" src="public\vlaston\main_b_list.png" alt="" />
                        </div>
                    </section>
                </div>
                <Rate/>
            </main>
            <Footer/>
        </div>
    )
}
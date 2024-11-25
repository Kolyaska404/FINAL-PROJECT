import { Run_stroke_4 } from "../main_page/run_stroke"
import { Run_stroke_5 } from "../main_page/run_stroke"
import { Run_stroke_6 } from "../main_page/run_stroke"
import { Header } from "../header"
import { Rate } from "/src/components/rate.jsx"
import { Footer } from "/src/components/Footer.jsx"
import '/src/App.css'

export function Marsel() {
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-[#F5F5F7]'>
                <Header title='Marsel' desk='Мебельная фабрика' kind1='Брендинг' kind2='Многостраничный сайт' img1='public\marsel\head_metball_1.png' img2='public\marsel\head_metball_3.png' img3='public\marsel\head_metball_2.png'/>
                <main className='bg-white text-black'>
                    <img className="mx-auto w-[1440px]" src="/public/marsel/room.png" alt="" />
                    <div className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full'>
                        <section className='pt-[150px] gap-x-[40px] flex mb-[250px]'>
                            <div className='flex gap-x-[113px] mt-[766px]'>
                                <div className='mt-[62px]'>
                                    <h4 className='uppercase mb-[30px] text-h7 leading-h7 font-medium'>Виды работ</h4>
                                    <ul className='flex flex-col gap-y-[10px] text-[#000000B2]'>
                                        <li><p className='font-normal text-h8 leading-h8 whitespace-nowrap'>Логотип</p></li>
                                        <li><p className='font-normal text-h8 leading-h8 whitespace-nowrap'>Нейминг</p></li>
                                        <li><p className='font-normal text-h8 leading-h8 whitespace-nowrap'>Айдентика</p></li>
                                        <li><p className='font-normal text-h8 leading-h8 whitespace-nowrap'>Брендинг</p></li>
                                        <li><p className='font-normal text-h8 leading-h8 whitespace-nowrap'>Презентации</p></li>
                                        <li><p className='font-normal text-h8 leading-h8 whitespace-nowrap'>Дизайн атрибутики</p></li>
                                        <li><p className='font-normal text-h8 leading-h8 whitespace-nowrap'>Фирменный стиль</p></li>
                                        <li><p className='font-normal text-h8 leading-h8 whitespace-nowrap'>Дизайн сайта</p></li>
                                    </ul>
                                </div>
                                <img className='w-[260px] h-[350px]' src="/public/marsel/cabinet.png" alt="" />
                            </div>
                            <div className=''>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Компания по производству премиальной мебели на заказ с 2008 года в Москве. Открыто 6 шоурумов по России. Многократный номинант в категории “Мебель года”.</p>
                                <img src="/public/marsel/kitchen.png" alt="" />
                            </div>
                        </section>
                        <section className='flex gap-x-[40px] mb-[250px]'>
                            <img className='mt-[286px]' src="/public/marsel/hallway.png" alt="" />
                            <div>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Задача</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.</p>
                                <div className='ml-[330px] mb-[60px] font-medium'>
                                    <h4 className='uppercase mb-[30px] text-h7 leading-h7'>Этапы Брендинг</h4>
                                    <ol className='text-[#000000B2] list desk_text flex flex-col gap-y-[10px]'>
                                        <li className="nums2 flex gap-x-[23px]">Исследование</li>
                                        <li className="nums2 flex gap-x-[20px]">Создание мудборда</li>
                                        <li className="nums2 flex gap-x-[20px]">Разработка логотипа</li>
                                        <li className="nums2 flex gap-x-[20px]">Разработка брендбук</li>
                                        <li className="nums2 flex gap-x-[20px]">Разработка каталога изделий</li>
                                    </ol>
                                </div>
                                <div className='ml-[550px] mb-[60px] text-right font-medium'>
                                    <h4 className='uppercase mb-[30px] text-h7 leading-h7'>Этапы Сайт</h4>
                                    <ol className='text-[#000000B2] list desk_text flex flex-col gap-y-[10px] items-end font-normal leading-h7'>
                                        <li className="nums3 relative">Анализ потребностей ЦА</li>
                                        <li className="nums3 relative">Функционал и структура сайта</li>
                                        <li className="nums3 relative">Прототип</li>
                                        <li className="nums3 relative">Дизайн</li>
                                        <li className="nums3 relative">UI-Kit</li>
                                        <li className="nums3 relative">Адаптив</li>
                                    </ol>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className='ml-[580px]'>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Нейминг</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Название компании было проработано индивидуально, что означает использование леттеринга - вручную разработанную надпись. </p>
                            </div>
                            <img className='mb-[250px]' src="/public/marsel/big_naming.png" alt="" />
                            <div className='ml-[580px]'>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>логотип</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Для образа логотипа компании мы использовали самую сильную ассоциацию — дерево. Потому как мебель — это дерево, а значит, становится сразу же ясно, чем занимается компания.</p>
                                <p className='w-[720px] text-h8 leading-h8 mb-[20px] font-medium desk_text uppercase'>Процесс ассоцитивного восприятия</p>
                            </div>
                            <div className='mx-auto px-[358px] py-[290px] rounded-[10px] border-[#00000033] border-[1px] mb-[100px]'><img src="/public/marsel/logotip.png" alt="" /></div>
                            <p className='ml-[558px] w-[720px] text-h5 leading-h5 mb-[150px] font-normal desk_text tracking-[-1%]'>За основу использовали букву М, как ссылку на название компании и имя владельца компании, что решает конфликт брендов.
                            <br />
                            <br />
                            Также преимущество такого знака в универсальности и прозрачности для клиентов.</p>
                        </section>
                    </div>
                    <div className="px-[80px] relative mx-auto flex flex-col w-full bg-[#EBEAE9]">
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full">
                            <div className="flex mb-[250px]">
                                <div className="mt-[466px]">
                                    <img className="border-[#00000033] border-[1px] w-[560px] h-[740px]" src="/public/marsel/full_logo.png" alt="" />
                                    <p className="uppercase font-medium text-h8 leading-[18px] mt-[20px]">Полный логотип</p>
                                </div>
                                <div className="relative">
                                    <h3 className="uppercase flex gap-x-[19px] pt-[150px] text-h4 leading-h4 mb-[60px] font-medium">Вариации <span className="ml-[19px]">Логотипов</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Для разных случаев мы подготовили несколько вариантов логотипов. Чтобы была вариативность и бренд ощущался объемнее для аудитории.</p>
                                    <div className="uppercase ml-[550px]">
                                        <img className="px-[25px] py-[40px] border-[1px] border-[#00000033]" src="/public\marsel\sign.svg" alt="" />
                                        <p className="mt-[20px] font-medium text-h8 leading-[18px]">Знак</p>
                                    </div>
                                    <div className="uppercase ml-[80px] mt-[532px]">
                                        <img className="" src="/public\marsel\naming.png" alt="" />
                                        <p className="mt-[20px] font-medium text-h8 leading-[18px]">Нейминг</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="ml-[560px]">
                                    <h3 className="uppercase flex gap-x-[19px] pt-[150px] text-h4 leading-h4 mb-[60px] font-medium">Дизайн <span className="ml-[164px]">Система</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Чтобы сформировать атмосферу изысканности, чистоты и премиальности, использовали минималистиный шрифт и приглушенные цвета: песочный, серо-голубой и льняной.</p>
                                </div>
                                <ul className="mb-[150px]">
                                    <li className="border-t-[1px] border-b-[1px] boreder-[#00000033] py-[10px]">
                                        <h4 className="ml-[170px] uppercase font-medium text-h8 leading-[18px]">Типографика<span className="ml-[185px]">2 шрифта</span></h4>
                                        <h2 className="text-[88px] leading-h3 uppercase mt-[102px] ml-[720px] font-normal constanta">Constantia</h2>
                                        <ul className="flex items-center uppercase mt-[30px] text-[#00000066]">
                                            <li className="mr-[485px]">Для заголовков</li>
                                            <li className="mr-[186px]">Regular</li>
                                            <li>Bold</li>
                                        </ul>
                                    </li>
                                    <li className="border-t-[1px] border-b-[1px] boreder-[#00000033] py-[10px]">
                                        <h3 className="mt-[160px] uppercase ml-[720px] font-normal text-h4 leading-h4 whitespace-nowrap bague">PF Bague Sans Pro</h3>
                                        <ul className="flex items-center uppercase mt-[30px] text-[#00000066]">
                                            <li className="mr-[411px]">Для текста</li>
                                            <li className="mr-[70px]">Light</li>
                                            <li className="mr-[186px]">Regular</li>
                                            <li className="mr-[152px]">Medium</li>
                                            <li>Bold</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div>
                                    <div className="mb-[100px] flex gap-x-[200px] ml-[170px] uppercase font-medium">
                                        <p>Колористика</p>
                                        <p>3 цвета</p>
                                    </div>
                                    <ul className="flex gap-x-[170px] mb-[170px]">
                                        <li>
                                            <div className="bg-[#D6C29D] w-[390px] h-[390px] rounded-[100%] flex items-center justify-center text-white mb-[30px]">Акцентный</div>
                                            <ul>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">HEX <span className="text-[#00000066]">D0C1A4</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">RGB <span className="text-[#00000066]">208.193.164</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">HSL <span className="text-[#00000066]">40.32.73</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">CMYK <span className="text-[#00000066]">0.7.21.18</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">RAL <span className="text-[#00000066]">1014</span></h4></li>
                                            </ul>
                                        </li>
                                        <li className="mt-[210px]">
                                            <div className="bg-[#BBC0CA] w-[330px] h-[330px] rounded-[100%] flex items-center justify-center text-white mb-[30px]">Альтернативный</div>
                                            <ul>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">HEX <span className="text-[#00000066]">B6BFD0</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">RGB <span className="text-[#00000066]">182.191.208</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">HSL <span className="text-[#00000066]">219.22.76</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">CMYK <span className="text-[#00000066]">12.8.0.18</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">RAL <span className="text-[#00000066]">5014</span></h4></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="bg-[#D6CFCA] w-[220px] h-[220px] rounded-[100%] flex items-center justify-center text-white mb-[30px]">Фоновый</div>
                                            <ul>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">HEX <span className="text-[#00000066]">D6CFCA</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">RGB <span className="text-[#00000066]">239.236.234</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">HSL <span className="text-[#00000066]">24.14.93</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">CMYK <span className="text-[#00000066]">0.1.2.6</span></h4></li>
                                                <li className="border-b-[1px] bprder-[#00000033] pt-[15px] pb-[5px]"><h4 className="flex justify-between">RAL <span className="text-[#00000066]">9010</span></h4></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="px-[80px] relative mx-auto flex flex-col w-full">
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[250px]">
                            <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium ml-[560px]'>Брендбук</h3>
                            <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text ml-[560px]'>Подготовили для клиента брендбук, со всей атрибутикой фирменого стиля и правилами его использования. Чтобы клиент понимал как правильно его применять в разных ситуациях.</p>
                            <Run_stroke_4/>
                            <Run_stroke_5/>
                            <Run_stroke_6/>
                            <div className="ml-[560px]">
                                <h3 className="uppercase flex gap-x-[19px] pt-[150px] text-h4 leading-h4 mb-[60px] font-medium">Каталог</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали каталог для шоурумов, выставок и работы с клиентами оффлайн, где указали информацию о компании, проекты и список материалов и образцов, с которыми работает компания.</p>
                            </div>
                            <img src="public\marsel\ready.png" alt="" />
                            <div className="ml-[560px]">
                                <h3 className="uppercase flex gap-x-[19px] pt-[150px] text-h4 leading-h4 mb-[60px] font-medium">Сайт</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн лендинга, где можно узнать о компании, какие услуги предоставляет, их выполненные работы и продукцию, которую можно купить на сайте.</p>
                            </div>
                            <div className="relative h-[3580px]">
                                <p className="absolute right-0 uppercase text-[#00000066]">Landing page</p>
                                <img className="w-[940px] mx-auto z-[1] relative" src="public\marsel\site.png" alt="" />
                                <img className="absolute bottom-0 z-[0] w-[1718px]" src="public\marsel\site_bg.png" alt="" />
                            </div>
                            <div className="mt-[250px] mb-[250px]">
                                <ul className="uppercase flex flex-col justify-center w-[1280px] relative gap-y-[20px]">
                                    <li className="flex items-center gap-x-[20px]">
                                        <img className="shadoww" src="public\marsel\portfolio.png" alt="" />
                                        <div className="flex w-[630px] h-[354px] items-center justify-center text-[#00000066] font-medium border-[0.5px] border-[#00000033]">Портфолио</div>
                                    </li>
                                    <li className="flex items-center gap-x-[20px]">
                                        <div className="flex w-[630px] h-[354px] items-center justify-center text-[#00000066] font-medium border-[0.5px] border-[#00000033]">Карточка товара</div>
                                        <img className="shadoww" src="public\marsel\tovar_card.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                            <div className="relative mb-[250px]">
                                <h2 className="uppercase text-[235px] leading-[260px] tracking-[-0.03em] font-medium absolute top-[258px] text-[#0000001A]">Адаптивы</h2>
                                <ul className="flex relative gap-x-[60px]">
                                    <li className="shadow_phone mt-[220px] phone_1 flex justify-center"><img className="w-[144px] h-[21px]" src="public\marsel\phone\monobrov.png" alt=""/></li>
                                    <li className="shadow_phone phone_2 flex justify-center"><img className="w-[144px] h-[21px]" src="public\marsel\phone\monobrov.png" alt=""/></li>
                                    <li className="shadow_phone mt-[220px] phone_3 flex justify-center"><img className="w-[144px] h-[21px]" src="public\marsel\phone\monobrov.png" alt=""/></li>
                                    <li className="shadow_phone phone_4 flex justify-center"><img className="w-[144px] h-[21px]" src="public\marsel\phone\monobrov.png" alt=""/></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="px-[80px] relative mx-auto flex flex-col w-full bg-black text-white">
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[250px]">
                                <h3 className="flex flex-col uppercase text-h4 leading-h4 mb-[60px] font-medium ml-[560px]">Другие<span className="ml-[90px]">Маркетинговые</span><span className="ml-[330px]">Материалы</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text ml-[560px]'>Также разработали дизайн для печатных материалов: визитки, документы,  буклеты, каталог.</p>
                                <img className="ml-[170px] w-[390px] h-[292px] mb-[32px]" src="public\marsel\B cards 1.png" alt="" />
                                <div className="uppercase ml-[650px] font-medium text-[#FFFFFF66] mb-8">
                                    <p className="mb-[10px]">логотип на документах</p>
                                    <img src="public\marsel\Paper logo 1.png" alt="" />
                                </div>
                                <div className="uppercase font-medium text-right text-[#FFFFFF66] mb-[60px] w-[560px]">
                                    <p className="mb-[10px]">Каталог</p>
                                    <img src="public\marsel\Catalogue.png" alt="" />
                                </div>
                                <div className="uppercase font-medium text-[#FFFFFF66] mb-[150px]">
                                    <p className="mb-[10px] ml-[494px]">Бланки</p>
                                    <img src="public\marsel\Blanks 1.png" alt="" />
                                </div>
                        </section>
                    </div>
                    <Rate/>
                </main>
                <Footer/>
            </div>
        </>
    )
}
import { Header } from '/src/components/header.jsx'
import { Footer } from '/src/components/Footer.jsx'
import { Rate } from '../rate' 

export function Starkwood() {
    return (
        <div className='w-full flex flex-col min-h-full mx-auto relative'>
            <Header title='Starkwood' desk='Строительство домов' kind1='Брендинг' kind2='Многостраничный сайт'/>
            <main className="bg-white text-black">
                <img className="mx-auto" src="/public\starkwood\header_img.png" alt="" />
                <div className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[150px]'>
                    <section className='mb-[250px] '>
                        <ul className='flex gap-x-[40px]'>
                            <li className='mt-[286px]'>
                                <h4 className='uppercase text-h7 leading-h7 mb-[30px]'>Виды работ</h4>
                                <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                    <li className='font-medium text-h8 leading-h8'>Логотип</li>
                                    <li className='font-medium text-h8 leading-h8'>Брендинг</li>
                                    <li className='font-medium text-h8 leading-h8'>Сайт</li>
                                </ol>
                                <img className='ml-[260px] mt-[320px]' src="public\starkwood\main_top_little.png" alt="" />
                            </li>
                            <li>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Компания по строительству деревяных домов премиум-сегмента в Москве.</p>
                                <img src="public\starkwood\main_top_big.png" alt="" />
                            </li>
                        </ul>
                    </section>
                    <section className='mb-[250px]'>
                        <ul className='flex'>
                            <li className='mt-[356px]'>
                                <img src="public\starkwood\home_plan.png" alt="" />
                            </li>
                            <li>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Задача</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Цель руководства — упрощение восприятия бренда для его использования, с помощью расшифровки технических аспектов предполагается раскрыть потенциал фирменного стиля компании и повысить эффективность.</p>
                                <div className='ml-[266px] mb-[60px] font-normal'>
                                    <h4 className='uppercase ml-[40px] mb-[30px]'>Этапы Брендинг</h4>
                                    <ol className='desk_text text-[#000000B2] list'>
                                        <li className='flex gap-x-[23px] nums2'>Исследование</li>
                                        <li className='flex gap-x-[20px] nums2'>Создание мудборда</li>
                                        <li className='flex gap-x-[20px] nums2'>Разработка логотипа</li>
                                        <li className='flex gap-x-[20px] nums2'>Разработка брендбук</li>
                                        <li className='flex gap-x-[20px] nums2'>Разработка каталога изделий</li>
                                    </ol>
                                </div>
                                <div className='ml-[550px] text-right font-normal'>
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
                            </li>
                        </ul>
                    </section>
                    <section className="mb-[250px]">
                        <div className="ml-[560px]">
                            <h3 className="flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium">логотип</h3>
                            <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">
                                Общая стилистика бренда компании определяется через принцип минимализма — меньше значит больше. Данный выбор основан на ценностях компании, при которых выбранная стилистика коррелирует с изысканностью, простотой и качеством. 
                            </p>
                        </div>
                        <div className="uppercase mb-[80px]">
                            <img className="mx-auto mb-[20px]" src="public\starkwood\big_logo1.png" alt="" />
                            <p className="ml-[170px]">логотип</p>
                        </div>
                        <div className="uppercase">
                            <img className="mx-auto mb-[20px]" src="public\starkwood\big_logo2.png" alt="" />
                            <p className="ml-[170px]">логотип с декодером</p>
                        </div>
                    </section>
                </div>
                <div className="bg-[#455476] relative mx-auto flex flex-col w-full text-white">
                    <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full mb-[150px]">
                        <img className="mx-auto" src="public\starkwood\main_purp_img.png" alt="" />
                        <div className="ml-[560px] pt-[250px]">
                            <h3 className="flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium">Дизайн<span>Система</span></h3>
                            <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">
                                Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.                            
                            </p>
                        </div>
                        <ul className="mb-[150px]">
                            <li className="border-t-[1px] border-b-[1px] boreder-[#00000033] py-[10px]">
                                <h4 className="ml-[170px] uppercase font-medium text-h8 leading-[18px]">Типографика<span className="ml-[185px]">2 шрифта</span></h4>
                                <h2 className="text-[110px] leading-[121px] uppercase ml-[246px] mt-[122px] mb-[80px] font-normal montserrat">Montserrat</h2>
                                <ul className="flex items-center uppercase text-[#FFFFFF66] whitespace-nowrap">
                                    <li className="mr-[171px]">Для заголовков</li>
                                    <li className="mr-[170px]">Regular</li>
                                    <li className="mr-[262px]">Regular</li>
                                    <li className="mr-[134px]">Regular</li>
                                    <li>Bold</li>
                                </ul>
                            </li>
                            <li className="border-t-[1px] border-b-[1px] boreder-[#00000033] py-[10px] text-center">
                                <h3 className="mt-[150px] mb-[80px] uppercase font-normal text-h4 leading-h4 whitespace-nowrap littera">Littera Text</h3>
                                <ul className="flex items-center uppercase text-[#FFFFFF66]">
                                    <li className="mr-[292px]">Для текста</li>
                                    <li className="mr-[284px]">Book</li>
                                    <li>Regular</li>
                                </ul>
                            </li>
                        </ul>
                        <h4 className="font-medium text-h8 leading-[18px] flex uppercase gap-x-[200px] ml-[170px] mb-[100px]">Колористика<span>3 цвета</span></h4>
                    </section>
                </div>
                <div className="relative mx-auto flex flex-col w-full">
                    <section className='relative max-w-[1440px] mx-auto flex flex-col w-full'>
                        <div className='bg-[#F6D59B] h-[560px] p-[40px] relative uppercase leading-[18px] font-medium w-full text-[#000000]'>
                            <h4 className='absolute left-[120px] top-[345px]'>Акцентный</h4>
                            <ul className='text-h8 leading-[18px] pt-[290px] pl-[760px] pb-[40px] mr-[120px]'>
                                <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>HEX<span className='text-[#00000066]'>F9C37F</span></p></li>
                                <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>RGB<span className='text-[#00000066]'>249.195.127</span></p></li>
                                <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>HSL<span className='text-[#00000066]'>33.91.74</span></p></li>
                                <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>CMYK<span className='text-[#00000066]'>0.22.49.2</span></p></li>
                                <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>RAL<span className='text-[#00000066]'>1017</span></p></li>
                            </ul>
                        </div>
                        <div className="flex">
                            <div className='bg-[#FAFAFA] w-[640px] h-[420px] p-[40px] relative uppercase leading-[18px] font-medium'>
                                <h4 className='absolute left-[45px] top-[205px] text-black'>Альтернативный</h4>
                                <ul className='mt-[145px] ml-[268px]'>
                                    <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px] text-[#000000]'><p className='flex justify-between'>HEX<span className='text-[#00000066]'>FAF6F3</span></p></li>
                                    <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px] text-[#000000]'><p className='flex justify-between'>RGB<span className='text-[#00000066]'>233.223.218</span></p></li>
                                    <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px] text-[#000000]'><p className='flex justify-between'>HSL<span className='text-[#00000066]'>20.25.88</span></p></li>
                                    <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px] text-[#000000]'><p className='flex justify-between'>CMYK<span className='text-[#00000066]'>0.4.6.9</span></p></li>
                                    <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px] text-[#000000]'><p className='flex justify-between'>RAL<span className='text-[#00000066]'>1013</span></p></li>
                                </ul>
                            </div>
                            <div className='bg-[#323137] text-white w-[800px] h-[420px] p-[40px] relative uppercase leading-[18px] font-medium'>
                                <h4 className='absolute left-[40px] top-[205px]'>Фоновый</h4>
                                <ul className='ml-[250px] mt-[145px] pr-[120px]'>
                                    <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>HEX<span className='text-[#FFFFFF66]'>242424</span></p></li>
                                    <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>RGB<span className='text-[#FFFFFF66]'>36.36.36</span></p></li>
                                    <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>HSL<span className='text-[#FFFFFF66]'>0.0.14</span></p></li>
                                    <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>CMYK<span className='text-[#FFFFFF66]'>0.0.0.86</span></p></li>
                                    <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>RAL<span className='text-[#FFFFFF66]'>9017</span></p></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className="bg-white relative mx-auto flex flex-col w-full text-black">
                        <img className="w-[1440px] mx-auto mb-[250px]" src="public\starkwood\main_mid_home.png" alt="" />
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full mb-[250px]">
                            <div className="ml-[560px]">
                                <h3 className="flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium">Стилистика</h3>
                                <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">Задача была показать сформировать атмосферу премиальность, современность, изысканность и чистоту. Под это лучше всего подоходит минимализм.</p>
                            </div>
                            <div className="flex">
                                <img src="/public\starkwood\stilistic1.png" alt="" />
                                <div className='ml-[330px] mb-[60px] font-normal'>
                                    <h4 className='uppercase ml-[40px] mb-[30px]'>Мы опирались на следующие принципы:</h4>
                                    <ol className='desk_text text-[#000000B2] list flex flex-col gap-y-[10px]'>
                                        <li className='flex gap-x-[23px] nums2'>Не использовать лишние декоративные элементы.</li>
                                        <li className='flex gap-x-[20px] nums2'>Использовать темные и светлые цвета.</li>
                                        <li className='flex gap-x-[20px] nums2'>Большие изображения</li>
                                    </ol>
                                </div>
                            </div>
                            <img className="ml-[560px]" src="public\starkwood\stilistik2.png" alt="" />
                            <div className="flex mb-[250px]">
                                <img src="public\starkwood\stilistik3.png" alt="" />
                                <img className="mt-[290px] ml-[330px]" src="public\starkwood\stilistik4.png" alt="" />
                            </div>
                            <div className="ml-[560px]">
                                <h3 className="flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium">Сайт</h3>
                                <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">Разработали дизайн сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                            </div>
                            <div className="flex gap-x-[86px]">
                                <div>
                                    <h4 className="nums2 flex gap-x-[286px] uppercase whitespace-nowrap">Главная страница</h4>
                                    <img className="mt-[702px] ml-[170px]" src="public\starkwood\small_site.png" alt="" />
                                    <img className="mt-[2287px] ml-[170px]" src="public\starkwood\small_site2.png" alt="" />
                                </div>
                                <img src="public\starkwood\big_site.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div className="bg-white relative mx-auto flex flex-col w-full text-black">
                        <img className="w-[1440px] left-0 right-0 mx-auto mb-[250px] absolute" src="public\starkwood\catalog_bg.png" alt="" />
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full mb-[-285px]">
                            <h4 className="absolute top-[172px] left-[80px] text-white flex flex-col"><span className="text-[#FFFFFF66]">02</span>Каталог</h4>
                            <img className="w-[940px] mx-auto pt-[150px]" src="public\starkwood\catalog.png" alt="" />
                        </section>
                    </div>
                    <div className="bg-[#323138] mx-auto flex flex-col w-full text-black">
                        <section className="relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px] pb-[150px]">
                            <img className="w-[1280px] h-[208.7px] absolute top-[863px] z-[1]" src="public\starkwood\Лого.png" alt="" />
                            <div className="flex mt-[534px] gap-x-[140px] ml-[170px] z-[3]">
                                <img className="w-[220px] h-[887px]" src="public\starkwood\phone1.png" alt="" />
                                <img className="w-[220px] h-[498px] mt-[556px]" src="public\starkwood\phone2.png" alt="" />
                                <img className="w-[220px] h-[498px] mt-[307px]" src="public\starkwood\phone3.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div className="bg-white relative mx-auto flex flex-col w-full text-black mt-[250px]">
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full mb-[250px]">
                            <span className="text-[#00000066] absolute">03</span>
                            <img className="mx-auto z-[3]" src="/public\starkwood\president.png" alt="" />
                            <h4 className="uppercase absolute right-0">Страница проекта</h4>
                            <img className="w-[512px] h-[324px] absolute top-[767px] left-[-55px] z-[5]" src="public\starkwood\president_slide1.png" alt="" />
                            <img className="w-[512px] h-[324px] absolute top-[767px] right-[-55px] z-[5]" src="public\starkwood\president_slide2.png" alt="" />
                        </section>
                    </div>
                    <div>
                        <img className="mx-auto" src="public\starkwood\red_home.png" alt="" />
                    </div>
                    <div className="bg-[#CFD1D6] relative mx-auto flex flex-col w-full text-black">
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[250px] pb-[150px]">
                            <h4 className="uppercase absolute flex gap-x-[278px] right-[80px]"><span className="text-[#00000066]">04</span>О компании</h4>
                            <img className="w-[550px] absolute ml-[170px] z-[1]" src="public\starkwood\command1.png" alt="" />
                            <img className="w-[550px] ml-[560px] mt-[1125px] z-[2] mb-[150px]" src="public\starkwood\command2.png" alt="" />
                            <div className="relative">
                                <img className="w-[940px] mx-auto absolute right-0 left-0 z-[1] top-[236px]" src="public\starkwood\full_team.png" alt="" />
                                <div className="flex">
                                    <img className="w-[220px] h-[488px] ml-[60px] mr-[110px] z-[5]" src="public\starkwood\team_ph1.png" alt="" />
                                    <img className="w-[220px] h-[453px] mr-[110px] z-[5] mt-[487px]" src="public\starkwood\team_ph2.png" alt="" />
                                    <img className="w-[220px] h-[447px] mr-[110px] z-[5] mt-[780px]" src="public\starkwood\team_ph3.png" alt="" />
                                    <img className="w-[220px] h-[638px] mr-[60px] z-[5]" src="public\starkwood\team_ph4.png" alt="" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Rate />
            </main>
            <Footer />
        </div>
    )
}
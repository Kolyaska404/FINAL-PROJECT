import { Header } from '/src/components/header.jsx'
import { Footer } from '/src/components/Footer'
import { Run_stroke_8 } from '../main_page/run_stroke'
import { Run_stroke_9 } from '../main_page/run_stroke'
import { Run_stroke_10 } from '../main_page/run_stroke'
import { Run_stroke_11 } from '../main_page/run_stroke'
import { Rate } from '../rate'
import { useEffect } from 'react'
import '/src/App.css'

export function Homyes() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-[#F5F5F7]'>
                <Header title='HOMYES' desk='Строительсвто домов' kind2='Брендинг'/>
                <main className='bg-white text-black'>
                    <img className='mx-auto' src="/public\homyes\header_img.png" alt="" />
                    <div className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[150px]'>
                        <section className='mb-[250px]'>
                            <ul className='flex gap-x-[40px]'>
                                <li className='mt-[286px]'>
                                    <h4 className='uppercase text-h7 leading-h7 mb-[30px]'>Виды работ</h4>
                                    <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                        <li className='font-medium text-h8 leading-h8'>Логотип</li>
                                        <li className='font-medium text-h8 leading-h8'>Нейминг</li>
                                        <li className='font-medium text-h8 leading-h8'>Айдентика</li>
                                        <li className='font-medium text-h8 leading-h8'>Брендинг</li>
                                        <li className='font-medium text-h8 leading-h8'>Презентации</li>
                                        <li className='font-medium text-h8 leading-h8'>Дизайн атрибутики</li>
                                        <li className='font-medium text-h8 leading-h8'>Фирменный стиль</li>
                                    </ol>
                                    <img className='ml-[260px] mt-[200px]' src="public\homyes\sphere.png" alt="" />
                                </li>
                                <li>
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Компания по строительству частных домов премиум-сегмента.</p>
                                    <img src="public\homyes\swpool.png" alt="" />
                                </li>
                            </ul>
                        </section>
                        <section className='mb-[250px]'>
                            <ul className='flex gap-x-[40px]'>
                                <li className='mt-[356px]'>
                                    <div className='bg-[#242424]'><img src="public\homyes\branding.png" alt="" /></div>
                                </li>
                                <li>
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Задача</h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Цель руководства — упрощение восприятия бренда для его использования, с помощью расшифровки технических аспектов предполагается раскрыть потенциал фирменного стиля компании и повысить эффективность.</p>
                                    <div className='ml-[266px]'>
                                        <h4 className='uppercase ml-[40px] mb-[30px]'>Этапы Брендинг</h4>
                                        <ol className='desk_text text-[#00000066] list'>
                                            <li className='flex gap-x-[23px] nums2'>Исследование</li>
                                            <li className='flex gap-x-[20px] nums2'>Создание мудборда</li>
                                            <li className='flex gap-x-[20px] nums2'>Разработка логотипа</li>
                                            <li className='flex gap-x-[20px] nums2'>Разработка брендбук</li>
                                            <li className='flex gap-x-[20px] nums2'>Разработка каталога изделий</li>
                                        </ol>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section className='mb-[250px]'>
                            <div className='flex gap-x-[40px] flex-col'>
                                <div className='ml-[560px]'>
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Нейминг</h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Название компании звучит как Homyes, что указывает на соседство, близость, родственность, вход в круг доверия и доверительные отношения.</p>
                                </div>
                                <Run_stroke_8/>
                                <p className='w-[720px] ml-[560px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>В названии присутствуют слова home и yes, что является игрой слов, указывающей на утвердительный образ дома.
                                <br />
                                <br />
                                В контексте деятельности компании, это формирует необходимый настрой.</p>
                            </div>
                        </section>
                    </div>
                    <div className='relative mx-auto flex flex-col w-full bg-black text-white'>
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full mt-[150px] mb-[150px]">
                            <div className='ml-[560px]'>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Слоган</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Фраза, отражающая подход компании к реализации своей деятельности, должна способствовать вовлечению зрителя в концепцию бренда.
                                <br />
                                <br />
                                Из всех вариантов слогана был выбран вариант Humans. Homes. Happiness.</p>
                            </div>
                            <ol className='uppercase list gap-y-[30px] flex flex-col list'>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Пора домой</li>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Новая жизнь в доме с душой</li>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Строим дома с душой</li>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Дом ставший родным</li>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Дом, который вас достоин</li>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Дом, достойный вас</li>
                                <li className='text-[#F9C37F] text-h4 leading-h4 flex gap-x-[52px] nums1'><span className='ml-[185px] whitespace-nowrap'>Humans. Homes. Happiness.</span></li>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Достоинство вашего дома</li>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Дом, в котором счастье</li>
                                <li className='text-[#FFFFFF33] text-h6 leading-h6 font-normal ml-[560px] flex gap-x-[52px] nums1'>Строим дома с достоинством</li>
                            </ol>
                        </section>
                    </div>
                    <img className='w-[1440px] mx-auto bg-white' src="public\homyes\AQUARIUS006 2.png" alt="" />
                    <div>
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full mt-[150px] mb-[250px]">
                            <div className='ml-[560px]'>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>логотип</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Общая стилистика бренда компании определяется через принцип минимализма — меньше значит больше. Данный выбор основан на ценностях компании, при которых выбранная стилистика коррелирует с изысканностью, простотой и качеством. 
                                </p>
                            </div>
                            <img className='mb-[100px] ml-[170px] w-[1009px]' src="public\homyes\biggest_logo.png" alt="" />
                            <div className='ml-[170px] flex gap-x-[161px] font-medium'>
                                <div className='w-[389px]'>
                                    <h4 className='uppercase mb-[30px] text-h7 leading-h7 '>Знак</h4>
                                    <p className='text-[#000000B2] text-h8 leading-h8'>Символ знака указывает на абстракцию с солнцем, которая связана с айдентикой компании, поскольку новый дом от компании Homyes является новым этап в жизни каждого клиента, новым днем и эта отсылка является связующим звеном между деятельностью и знаком компании.</p>
                                </div>
                                <div className='w-[389px]'>
                                    <h4 className='uppercase mb-[30px] text-h7 leading-h7 '>леттеринг</h4>
                                    <p className='text-[#000000B2] text-h8 leading-h8'>Леттеринг (текстовая надпись названия компании) оформили в виде слова с засечками в верхнем регистре, что придает утонченности.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='bg-[#ECEBE9] text-black relative mx-auto flex flex-col w-full'>
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full mt-[150px]">
                            <div className='mb-[250px]'>
                                <div className='ml-[560px]'>
                                    <h3 className='flex gap-x-[19px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Вариации<span>Логотипов</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Для разных случаев мы подготовили несколько вариантов логотипов. Чтобы была вариативность и бренд ощущался объемнее для аудитории.</p>
                                </div>
                                <div className='uppercase'>
                                    <div className='flex gap-x-[330px]'>
                                        <div>
                                            <img className='px-[45px] py-[136px] border-[0.5px] border-[#00000033] mb-[20px]' src="public\homyes\big_logo.png" alt="" />
                                            <p className='font-medium text-h8 leading-h8'>Полный логотип по вертикали</p>
                                        </div>
                                        <div className='flex justify-center flex-col'>
                                            <div className='border-[0.5px] border-[#00000033] px-[75px] pt-[43px]'><img className='w-[240px]' src="public\homyes\half1.png" alt="" /></div>
                                            <p className='w-[390px] text-center font-medium text-h8 leading-h8 py-[20px]'>Сокращенный знак для брендирования на развороте или границах формата</p>
                                            <div className='border-[0.5px] border-[#00000033] px-[75px] pb-[43px]'><img className='w-[240px]' src="public\homyes\half2.png" alt="" /></div>
                                        </div>
                                    </div>
                                    <div className='ml-[650px] mb-[20px]'>
                                        <div className='px-[45px] py-[48px] border-[0.5px] border-[#00000033] mb-[20px] w-[460px]'><img className='w-[370px]' src="public\homyes\logo1.png" alt="" /></div>
                                        <p className='font-medium text-h8 leading-h8'>Полный логотип по горизонтали</p>
                                    </div>
                                    <div className='ml-[170px]'>
                                        <div className='px-[45px] py-[48px] border-[0.5px] border-[#00000033] mb-[20px] w-[460px] '><img src="public\homyes\logo2.png" alt="" /></div>
                                        <p className='font-medium text-h8 leading-h8'>логотип по горизонтали без слогана</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-[150px]'>
                                <div className='ml-[560px]'>
                                    <h3 className='flex gap-x-[161px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Дизайн<span>Система</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Чтобы сформировать атмосферу теплоты, уюта, изысканности и премиальность, использовали шрифт с засечками и комбинацию светло-бронзового оттенка и черного цвета.</p>
                                </div>
                                <ul>
                                    <li className="border-t-[1px] border-b-[1px] boreder-[#00000033] py-[10px]">
                                        <h4 className="ml-[170px] uppercase font-medium text-h8 leading-[18px]">Типографика<span className="ml-[185px]">2 шрифта</span></h4>
                                        <h2 className="text-[110px] leading-[121px] uppercase ml-[400px] mt-[122px] mb-[80px] font-normal playfair">Playfair</h2>
                                        <ul className="flex items-center uppercase text-[#00000066]">
                                            <li className="mr-[341px]">Для заголовков</li>
                                            <li className="mr-[186px]">Regular</li>
                                            <li>Bold</li>
                                        </ul>
                                    </li>
                                    <li className="border-t-[1px] border-b-[1px] boreder-[#00000033] py-[10px] text-center">
                                        <h3 className="mt-[150px] mb-[80px] uppercase font-normal text-h4 leading-h4 whitespace-nowrap bague">PF Bague Sans Pro</h3>
                                        <ul className="flex items-center uppercase text-[#00000066]">
                                            <li className="mr-[218px]">Для текста</li>
                                            <li className="mr-[170px]">Regular</li>
                                            <li className="mr-[262px]">Medium</li>
                                            <li className="mr-[134px]">Semibold</li>
                                            <li>Bold</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='mb-[150px]'>
                                <div className='flex gap-x-[200px] ml-[170px] uppercase font-medium leading-[18px] mb-[100px]'>
                                    <p>Колористика</p>
                                    <p>3 цвета</p>
                                </div>
                                <ul className='flex'>
                                    <li className='bg-[#F9C37F] w-[560px] h-[560px] p-[40px] relative uppercase leading-[18px] font-medium'>
                                        <h4 className='absolute right-[40px]'>Акцентный</h4>
                                        <ul className='mt-[305px]'>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>HEX<span className='text-[#00000066]'>F9C37F</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>RGB<span className='text-[#00000066]'>249.195.127</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>HSL<span className='text-[#00000066]'>33.91.74</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>CMYK<span className='text-[#00000066]'>0.22.49.2</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>RAL<span className='text-[#00000066]'>1017</span></p></li>
                                        </ul>
                                    </li>
                                    <li className='bg-[#FAF6F3] w-[330px] h-[420px] p-[40px] relative uppercase leading-[18px] font-medium mt-[560px]'>
                                        <h4 className='absolute right-[40px]'>Альтернативный</h4>
                                        <ul className='mt-[165px]'>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>HEX<span className='text-[#00000066]'>FAF6F3</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>RGB<span className='text-[#00000066]'>233.223.218</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>HSL<span className='text-[#00000066]'>20.25.88</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>CMYK<span className='text-[#00000066]'>0.4.6.9</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#00000033] border-b-[0.5px]'><p className='flex justify-between'>RAL<span className='text-[#00000066]'>1013</span></p></li>
                                        </ul>
                                    </li>
                                    <li className='bg-[#242424] text-white w-[390px] h-[420px] p-[40px] relative uppercase leading-[18px] font-medium mt-[140px]'>
                                        <h4 className='absolute right-[40px]'>Фоновый</h4>
                                        <ul className='mt-[165px]'>
                                            <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>HEX<span className='text-[#FFFFFF66]'>242424</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>RGB<span className='text-[#FFFFFF66]'>36.36.36</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>HSL<span className='text-[#FFFFFF66]'>0.0.14</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>CMYK<span className='text-[#FFFFFF66]'>0.0.0.86</span></p></li>
                                            <li className='pt-[15px] pb-[5px] border-b-[#FFFFFF33] border-b-[0.5px]'><p className='flex justify-between'>RAL<span className='text-[#FFFFFF66]'>9017</span></p></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <img className='mb-[250px] mx-auto' src="public\homyes\Флаг 2 1.png" alt="" />
                    <div className='mb-[250px] relative mx-auto flex flex-col w-full'>
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full">
                            <div className='ml-[560px]'>
                                <h3 className='flex gap-x-[19px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Брендбук</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Подготовили для клиента брендбук, со всей атрибутикой фирменого стиля и правилами его использования. Чтобы клиент понимал как правильно его применять в разных ситуациях.</p>
                            </div>
                            <Run_stroke_9 />
                            <Run_stroke_10 />
                            <Run_stroke_11 />
                        </section>
                    </div>
                    <div className='bg-black text-white pb-[150px] relative mx-auto flex flex-col w-full'>
                        <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full mt-[150px]">
                            <div>
                                <h3 className="flex flex-col uppercase text-h4 leading-h4 mb-[60px] font-medium ml-[560px]">Другие<span className="ml-[90px]">Маркетинговые</span><span className="ml-[330px]">Материалы</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text ml-[560px]'>Так же разработали дизайн для печатных материалов: визитки, документы,  буклеты, коробки, баннеры.</p>
                            </div>
                            <div className='flex flex-col gap-y-[60px]'>
                                <div className='flex gap-x-[500px] mb-[60px]'>
                                    <img className='w-[390px] h-[570px]' src="public\homyes\Коробка 1.png" alt="" />
                                    <img className='w-[390px] h-[262px]' src="public\homyes\flag.png" alt="" />
                                </div>
                                <img className='w-[330px] h-[248px] ml-[390px]' src="public\homyes\blank_koriz.png" alt="" />
                                <img className='w-[890px] h-[614px] ml-[390px]' src="public\homyes\3 Постера 1.png" alt="" />
                                <img className='w-[720px] h-[621px]' src="public\homyes\Poster 5 1.png" alt="" />
                                <img className='w-[560px] h-[420px] ml-[720px]' src="public\homyes\cards.png" alt="" />
                                <img className='w-[720px] h-[511px]' src="public\homyes\Poster 4 1.png" alt="" />
                                <img src="public\homyes\Billboard 1.png" alt="" />
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
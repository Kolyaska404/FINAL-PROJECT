import { Header } from "../header"
import { Rate } from "../rate" 
import { Footer } from "../Footer"
import { Block } from "../stroy_plan"
import '/src/App.css'

export function Stroy_app() {
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-[#F5F5F7]'>
                <Header title='Stroy App' desk='Хедж Фонд' kind2='Дизайн приложения'/>
                <main>
                    <img className="mx-auto" src="public\Stroy_App\header_img.png" alt="" />
                    <div className="bg-[#F5F5F7]">
                        <section className='conteiner pt-[150px] text-black'>
                            <ul className='flex gap-x-[170px]'>
                                <li className='mt-[286px] w-[390px] pt-[10px]'>
                                    <h4 className='uppercase text-h7 leading-h7 mb-[30px] desk_text'>Виды работ</h4>
                                    <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                        <li className='font-medium text-h8 leading-h8 pb-[5px] flex justify-between'>Дизайн мобильного приложения</li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Мобильное приложение по составлению сметы онлайн.</p>
                                    <img src="public\Stroy_App\about_client.png" alt="" />
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
                                        <li className="flex items-center border-t-[1px] border-b-[1px] border-[#00000033]">
                                            <div className="flex flex-col gap-y-[100px] h-full pt-[16px] pb-[5px]">
                                                <h4 className="uppercase whitespace-nowrap text-h7 leading-h7">Этапы Сайт</h4>
                                                <ol className="flex flex-col list tracking-tight w-[719px] desk_text text-[#000000B2] ml-[560px]">
                                                    <li className="nums2 flex border-b-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[23px] whitespace-nowrap font-normal">Анализ потребностей ЦА</li>
                                                    <li className="nums2 flex border-b-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px] whitespace-nowrap font-normal">Функционал и структура сайта</li>
                                                    <li className="nums2 flex border-b-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px] font-normal">Прототип</li>
                                                    <li className="nums2 flex border-b-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px] font-normal">Дизайн</li>
                                                    <li className="nums2 flex pt-[15px] p-[5px] justify-between gap-x-[20px] font-normal">UI-Kit</li>
                                                </ol>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                        <section className="conteiner mt-[250px] text-black mb-[250px]">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Структура</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                            </div>
                            <div className="uppercase w-full rounded-[7px] border-black border-[1px] text-center py-[20px] mb-[50px]">Приложение</div>
                            <div className="flex flex-col gap-y-[20px]">
                                <div className="relative w-full gap-x-[18px] flex">
                                    <img className="w-[730px]" src="public\Stroy_App\icons\arrow_left_bottom.svg" alt="" />
                                    <div className="relative flex gap-x-[190px]">
                                        <Block title1='Краткая' title2='Инструкция' num='02'/>
                                        <img className="absolute left-[190px]" src="public\Stroy_App\icons\arrow_left.svg" alt="" />
                                        <Block title1='Регистрация/' title2='вход' num='01'/>
                                    </div>
                                </div>
                                <div className="flex gap-x-[20px]">
                                    <Block title1='Главная' title2='страница' num='03'/>
                                    <div className="relative">
                                        <img src="public\Stroy_App\icons\arrow_right_bottom.svg" alt="" />
                                        <img className="absolute left-[200px] top-[2px]" src="public\Stroy_App\icons\arrow_bottom.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex gap-x-[50px] ml-[220px] relative">
                                    <Block title1='Создание' title2='проекта' num='04'/>
                                    <img className="absolute top-0 left-[175px]" src="public\Stroy_App\icons\arrow_right.svg" alt="" />
                                    <Block title1='Создание' title2='помещения' num='05'/>
                                    <img className="absolute top-0 left-[395px]" src="public\Stroy_App\icons\arrow_right.svg" alt="" />
                                    <Block title1='Редактор' title2='объекта' num='06'/>
                                    <img className="absolute top-0 right-[405px]" src="public\Stroy_App\icons\arrow_right.svg" alt="" />
                                    <div className="flex gap-x-[60px]">
                                        <Block title1='Экран итогов' num='07'/>
                                        <Block title1='Настройки' num='08'/>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <img src="public\Stroy_App\icons\arrow_up_down.svg" alt="" />
                                        <img className="absolute top-[120px] left-[170px]" src="public\Stroy_App\icons\arrow_bottom.svg" alt="" />
                                        <img className="absolute top-[120px] left-[390px]" src="public\Stroy_App\icons\arrow_bottom.svg" alt="" />
                                        <img className="absolute top-[120px] left-[610px]" src="public\Stroy_App\icons\arrow_bottom.svg" alt="" />
                                        <img className="absolute top-[120px] left-[830px]" src="public\Stroy_App\icons\arrow_bottom.svg" alt="" />
                                        <img className="absolute top-[120px] left-[1050px]" src="public\Stroy_App\icons\arrow_bottom.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex gap-x-[50px]">
                                    <Block title1='Поддержка' num='13'/>
                                    <Block title1='Управление' title2='сотрудниками' num='12'/>
                                    <Block title1='Редактор' title2='материалов' num='11'/>
                                    <Block title1='Редактор работ' num='10'/>
                                    <Block title1='Реквизиты' title2='компании' num='09'/>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="bg-black text-white">
                        <section className="conteiner pt-[250px]">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Дизайн<span>Система</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.</p>
                            </div>
                            <div className="flex flex-col w-[1280px]">
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[770px] font-medium pt-[10px] pb-[7px] uppercase">
                                    <h4>Типографика</h4>
                                    <h4 className="mr-[305px]">1 шрифт</h4>
                                </div>
                                <div className="flex font-normal uppercase">
                                    <div className="flex flex-col items-center justify-center w-[1280px]">
                                        <h2 className="text-[58px] leading-[63.8px] py-[129px] inter font-normal">inter</h2>
                                        <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                            <li className="mr-[233px]">Начертания</li>
                                            <li className="mr-[170px]">Light</li>
                                            <li className="mr-[256px]">Regular</li>
                                            <li>SemiBold</li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="flex pt-[80px] pb-[40px] flex-col">
                                    <li className="bg-[#007AFF] uppercase rounded-t-[15px] w-full p-[20px] pt-[412px] font-medium">
                                        #007AFF
                                    </li>
                                    <li className="flex uppercase font-medium rounded-b-[15px]">
                                        <div className="bg-[#FCFCFE] w-[640px] rounded-bl-[15px] p-[20px] text-black pt-[92px]">#FCFCFE</div>
                                        <div className="bg-[#999999] w-[320px] p-[20px] text-black pt-[92px]">#999999</div>
                                        <div className="bg-[#000000] w-[320px] border-r-[1px] border-b-[1px] rounded-br-[15px] p-[20px] text-white pt-[92px]">#000000</div>
                                    </li>
                                </ul>
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[599px] font-medium pt-[10px] pb-[7px] uppercase mb-[150px]">
                                    <h4>Колористика</h4>
                                    <h4 className="text-[#FFFFFF66]">4 цвета</h4>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="text-black">
                        <section className="conteiner pt-[250px]">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Приложение</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                            </div>
                            <div className="">
                                <div className="border-t-[1px] border-b-[1px] border-[#00000033] flex gap-x-[540px] font-medium pt-[10px] pb-[7px] uppercase">
                                    <h4>01</h4>
                                    <h4>приветствия</h4>
                                </div>
                                <img className="py-[80px] mx-auto" src="public\Stroy_App\app.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div className="bg-[#007AFF]">
                        <section className="conteiner relative pt-[80px] pb-[30px]">
                            <ul className="flex">
                                <li>
                                    <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF66] flex gap-x-[251px] font-medium pt-[10px] pb-[7px] uppercase w-[640px]">
                                        <p>02</p>
                                        <p>Регистрация</p>
                                    </div>
                                    <div className="flex pt-[80px] gap-x-[20px] mb-[50px]">
                                        <div className="flex flex-col gap-y-[20px]">
                                            <img src="public\Stroy_App\reg1.png" alt="" />
                                            <img src="public\Stroy_App\reg2.png" alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-[20px] mt-[466px]">
                                            <img src="public\Stroy_App\reg3.png" alt="" />
                                            <img src="public\Stroy_App\reg4.png" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <div className="w-[1px] h-[1543px] bg-[#FFFFFF66] mx-auto absolute right-0 left-0"></div>
                                <li className="flex flex-col">
                                    <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF66] flex font-medium pt-[10px] pb-[7px] uppercase w-[640px]">
                                        <p className="ml-[250px]">Вход</p>
                                    </div>
                                    <div className="mx-auto pt-[90px] flex flex-col gap-y-[20px]">
                                        <img className="w-[220px]" src="public\Stroy_App\sign1.png" alt="" />
                                        <img className="w-[220px]" src="public\Stroy_App\sign2.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="bg-[#FFDFDC]">
                        <section className="conteiner pt-[40px]">
                            <div className="border-y-[1px] border-[#BF3B3B66] flex gap-x-[242px] font-medium pt-[10px] pb-[7px] uppercase text-[#BF3B3B] mb-[80px] items-center">
                                <div className="w-[17px] h-[2px] bg-[#BF3B3B]"></div>
                                <h4>Ошибка входа</h4>
                            </div>
                            <div className="flex ml-[530px] gap-x-[20px] mb-[80px]">
                                <img src="public\Stroy_App\error1.png" alt="" />
                                <img src="public\Stroy_App\error2.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className="conteiner pt-[150px] pb-[250px]">
                            <div className="border-y-[1px] border-[#00000033] flex gap-x-[242px] font-medium pt-[10px] pb-[7px] uppercase text-black mb-[80px] items-center">
                                <h4>03</h4>
                                <h4>Краткая инструкция</h4>
                            </div>
                            <p className="w-[390px] text-[#000000B2] desk_text font-normal absolute right-[80px] top-[345px]">После регистрации пользователю показывается инструкция по функционалу.
                                <br />
                                <br />
                                Так как это техническое и нишевое приложение и для удобства пользователю ему нужно вкратце объяснить как им пользоваться и какие есть функции.
                            </p>
                            <ul className="flex flex-col gap-y-[40px] relative">
                                <div className="bg-[#007AFF] rounded-[100%] w-[498px] h-[498px] absolute mx-auto right-0 left-0 top-[446px] blur-[250px] z-[0]"></div>
                                <li className="mx-auto relative z-[1]">
                                    <img className="mx-auto " src="public\Stroy_App\manual1.png" alt="" />
                                </li>
                                <li className="flex gap-x-[360px] relative">
                                    <div className="flex gap-x-[20px]">
                                        <img src="public\Stroy_App\manual2.png" alt="" />
                                        <img src="public\Stroy_App\manual3.png" alt="" />
                                    </div>
                                    <div className="flex gap-x-[20px]">
                                        <img src="public\Stroy_App\manual6.png" alt="" />
                                        <img src="public\Stroy_App\manual7.png" alt="" />
                                    </div>
                                </li>
                                <li className="flex mx-auto gap-x-[20px] z-[1] relative">
                                    <img src="public\Stroy_App\manual4.png" alt="" />
                                    <img src="public\Stroy_App\manual5.png" alt="" />
                                </li>
                            </ul>
                        </section>
                    </div>
                    <img className="mx-auto" src="public\Stroy_App\scheme.png" alt="" />
                    <div className="text-black">
                        <section className="conteiner pt-[250px] pb-[150px]">
                            <div className="mb-[250px]">
                                <div className="border-y-[1px] border-[#00000033] flex gap-x-[524px] font-medium pt-[10px] pb-[7px] uppercase mb-[97px] items-center">
                                    <h4>04</h4>
                                    <h4>Главный экран</h4>
                                </div>
                                <div className="relative">
                                    <div className="animate-[pulse_2s_ease-in-out_infinite] bg-[#007AFF0D] w-[480px] h-[480px] rounded-[100%] mx-auto right-0 left-0 z-[0] absolute"></div>
                                    <div className="animate-[pulse_2s_ease-in-out_infinite] bg-[#007AFF1A] w-[440px] h-[440px] rounded-[100%] mx-auto right-0 left-0 top-5 z-[0] absolute"></div>
                                    <div className="animate-[pulse_2s_ease-in-out_infinite] bg-[#007AFF] w-[400px] h-[400px] rounded-[100%] mx-auto right-0 left-0 top-10 z-[1] absolute"></div>
                                </div>
                                <ul className="relative z-[1] pt-[20px]">
                                    <li><img className="mx-auto" src="public\Stroy_App\main_screen.png" alt="" /></li>
                                    <li className="absolute top-[132px] flex gap-x-[11px] right-[115px]">
                                        <img src="public\Stroy_App\slide1.png" alt="" />
                                        <img src="public\Stroy_App\slide2.png" alt="" />
                                        <img src="public\Stroy_App\slide3.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-[150px]">
                                <div className="border-y-[1px] border-[#00000033] flex gap-x-[537px] font-medium pt-[10px] pb-[7px] uppercase mb-[80px] items-center">
                                    <h4>05</h4>
                                    <h4 className="flex gap-x-[150px]">Создание проекта<span>и</span><span>сметы</span></h4>
                                </div>
                                <ul className="uppercase flex gap-x-[280px] mb-[150px]">
                                    <li className="flex gap-x-[47px] items-center">
                                        <div>
                                            <p className="text-[#00000066]">( 01 )</p>
                                            <p>ДАём название проекту и основные данные</p>
                                        </div>
                                        <img src="public\Stroy_App\project1.png" alt="" />
                                    </li>
                                    <li className="flex gap-x-[47px] items-center">
                                        <img src="public\Stroy_App\project2.png" alt="" />
                                        <div>
                                            <p className="text-[#00000066]">( 02 )</p>
                                            <p>Создаем комнаты,
                                            для просчёта</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="flex gap-x-[140px]">
                                    <li className="flex gap-x-[20px] ml-[50px]">
                                        <div className="flex flex-col gap-y-[20px]">
                                            <img src="public\Stroy_App\project3.png" alt="" />
                                            <img src="public\Stroy_App\project4.png" alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-[20px] mt-[150px]">
                                            <img src="public\Stroy_App\project5.png" alt="" />
                                            <img src="public\Stroy_App\project6.png" alt="" />
                                        </div>
                                        <img className="mt-[766px]" src="public\Stroy_App\project7.png" alt="" />
                                    </li>
                                    <li className="flex flex-col gap-y-[100px]">
                                        <div className="flex gap-x-[93px] uppercase">
                                            <p className="text-[#00000066]">( 03 )</p>
                                            <p className="w-[250px] text-right">Заполняем технические характеристики комнаты</p>
                                        </div>
                                        <ol className="list w-[389px] desk_text text-[#000000B2] font-normal leading-[21px]">
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Количество стен</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Высота потолка</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Дверные проемы</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Оконные проёмы</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Площадь пола</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Покрытие стен</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Монтаж электрики</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Демонтажные работы</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Стройматериалы</li>
                                            <li className="nums2 flex justify-between pb-[5px] pt-[15px] border-b-[1px] border-[#00000033]">Электрооборудование</li>
                                        </ol>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-[150px] relative">
                                <p className="flex gap-x-[204px] uppercase text-[#00000066] absolute top-0 right-0">( 04 )<span className="text-black">Рассчёт сметы</span></p>
                                <img className="mx-auto relative z-[1]" src="public\Stroy_App\project8.png" alt="" />
                                <ul className="absolute flex flex-col top-[225px] z-[0]">
                                    <li className="flex">
                                        <img className="mt-[] w-[170px] h-[157px]" src="public\Stroy_App\project8_img1.png" alt="" />
                                        <img className="mt-[331px] mr-[330px] w-[390px] h-[390px]" src="public\Stroy_App\project8_img3.png" alt="" />
                                        <img className="mt-[] w-[220px] h-[331px]" src="public\Stroy_App\project8_img2.png" alt="" />
                                    </li>
                                    <li className="flex">
                                        <img className="mt-[300px] mr-[350px] w-[210px] h-[172px]" src="public\Stroy_App\project8_img4.png" alt="" />
                                        <img className="mt-[140px] w-[330px] h-[332px] mr-[220px]" src="public\Stroy_App\project8_img5.png" alt="" />
                                        <img className="mt-[] w-[170px] h-[280px]" src="public\Stroy_App\project8_img6.png" alt="" />
                                    </li>
                                </ul>
                                <img className="absolute bottom-0 right-[170px]" src="public\Stroy_App\project9.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div className="relative mb-[250px]">
                        <div className="w-[450px] h-[450px] rounded-[100%] bg-[#007AFF] absolute mx-auto right-0 left-0 top-60 blur-[220px] z-0"></div>
                        <img className="mx-auto relative z-[1]" src="public\Stroy_App\main_mid_img.png" alt="" />
                    </div>
                    <div className="bg-[#007AFF0D]">
                        <section className="conteiner pt-[40px] text-black pb-[150px]">
                            <div className="border-y-[1px] border-[#00000033] flex gap-x-[537px] font-medium pt-[10px] pb-[7px] uppercase mb-[40px] items-center">
                                <h4>06</h4>
                                <h4>Настройки</h4>
                            </div>
                            <ul className="uppercase font-medium">
                                <li className="flex items-center gap-x-[297px] mb-[80px]">
                                    <p className="flex flex-col w-[233px] text-[#00000033] gap-y-[10px]">( 01 )<span className="text-black">ДАём название проекту и основные данные</span></p>
                                    <img src="public\Stroy_App\settings1.png" alt="" />
                                </li>
                                <li className="flex gap-x-[280px] mb-[150px]">
                                    <div className="flex items-center gap-x-[60px]">
                                        <p className="text-[#00000033] flex flex-col gap-y-[10px] w-[220px]">( 01 )<span className="text-black">Подтверждение удаления, через ввод специального слова</span></p>
                                        <img src="public\Stroy_App\settings2.png" alt="" />
                                    </div>
                                    <div className="flex items-center gap-x-[60px]">
                                        <img src="public\Stroy_App\settings3.png" alt="" />
                                        <p className="text-[#00000033] flex flex-col gap-y-[10px] w-[220px]">( 02 )<span className="text-black">Онлайн чат
                                        с поддержкой</span></p>
                                    </div>
                                </li>
                                <li className="flex gap-x-[20px] mb-[150px] relative justify-center">
                                    <p className="text-[#00000033] flex flex-col gap-y-[10px] w-[220px] absolute right-[170px] top-[71px]">( 03 )<span className="text-black">Управление сотрудниками</span></p>
                                    <img className="mt-[223px] w-[220px] h-[446px]" src="public\Stroy_App\settings4.png" alt="" />
                                    <div className="flex flex-col gap-y-[20px]">
                                        <img className="w-[220px] h-[446px]" src="public\Stroy_App\settings5.png" alt="" />
                                        <img className="w-[220px] h-[446px]" src="public\Stroy_App\settings6.png" alt="" />
                                    </div>
                                    <img className="mt-[223px] w-[220px] h-[446px]" src="public\Stroy_App\settings7.png" alt="" />
                                </li>
                                <li className="flex items-center ml-[290px]">
                                    <img className="mr-[20px]" src="public\Stroy_App\settings8.png" alt="" />
                                    <img className="mr-[140px]" src="public\Stroy_App\settings10.png" alt="" />
                                    <p className="text-[#00000033] flex flex-col gap-y-[10px] w-[212px]">( 04 )<span className="text-black">Управление подпиской</span></p>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <img className="mx-auto mt-[180px] mb-[109px]" src="public\Stroy_App\main_bottom_img.png" alt="" />
                </main>
                <Rate/>
                <Footer/>
            </div>
        </>
    )
}
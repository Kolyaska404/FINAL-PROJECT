import { Footer } from "../Footer";
import { Header } from "../header";
import { Rate } from "../rate";
import { useEffect } from "react";
import '/src/App.css'

export function Perf_group() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-[#F5F5F7]'>
                <Header title='Performance' title2='Group' desk='Сфера здорового питания' kind2='Многостраничный сайт'/>
                <main>
                    <img className="mx-auto" src="public\food\header_img.png" alt="" />
                    <div className='conteiner pt-[150px] text-black'>
                        <section className='mb-[250px]'>
                            <ul className='flex gap-x-[170px]'>
                                <li className='mt-[319px] w-[390px] pt-[10px]'>
                                    <h4 className='uppercase text-h7 leading-h7 mb-[30px] desk_text'>Виды работ</h4>
                                    <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                        <li className='font-medium text-h8 leading-h8 pb-[5px] flex justify-between'>Многостраничный сайт</li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Лидер по доставке еды здорового питания в России с собственным производством и оборотом более 1,5 млрд. рублей в год.</p>
                                    <img src="public\food\main_top_img.png" alt="" />
                                </li>
                            </ul>
                        </section>
                        <section className='mb-[250px]'>
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
                                            <li className="nums2 flex border-b-[1px] border-[#00000033] pt-[15px] p-[5px] justify-between gap-x-[20px] font-normal">UI-Kit</li>
                                            <li className="nums2 flex pt-[15px] p-[5px] justify-between gap-x-[20px] font-normal">Адаптив</li>
                                        </ol>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section className="mb-[250px]">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Сайт</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн корпоративного сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                            </div>
                            <img className="mx-auto" src="public\food\site.png" alt="" />
                        </section>
                        <section className="relative mb-[250px]">
                            <h2 className="bayshore text-[350px] leading-[385px] flex flex-col text-[#00000033] font-normal absolute left-[-61px] z-[0]">Performance<span className="ml-[800px]">Group</span></h2>
                            <ul className="flex gap-x-[20px] ml-[187px] z-[1]">
                                <li className="mt-[150px] bg-white w-[206px] h-[440px]"><img className="bg-white w-[206px] h-[440px]" src="public\food\site_ph1.png" alt="" /></li>
                                <li className="mt-[300px] bg-white w-[206px] h-[440px]"><img className="bg-white" src="public\food\site_ph2.png" alt="" /></li>
                                <li className=" bg-white w-[206px] h-[440px]"><img className="bg-white" src="public\food\site_ph3.png" alt="" /></li>
                                <li className="mt-[150px] bg-white w-[206px] h-[440px]"><img className="bg-white" src="public\food\site_ph4.png" alt="" /></li>
                            </ul>
                        </section>
                    </div>
                    <div className='bg-[#212121] text-white'>
                        <section className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[150px]'>
                            <div className="ml-[560px]">
                                <h3 className="uppercase flex gap-x-[141px] text-h4 leading-h4 mb-[60px] font-medium'">Дизайн<span>Система</span></h3>
                                <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[770px] font-medium pt-[10px] pb-[7px] uppercase">
                                    <h4>Типографика</h4>
                                    <h4 className="mr-[305px]">1 шрифта</h4>
                                </div>
                                <div className="font-normal uppercase">
                                    <div className="basis-1/2 flex flex-col items-center justify-center">
                                        <h2 className="text-[70px] leading-[77px] py-[121px] montserrat">Avenir Next Cyr</h2>
                                        <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                            <li className="mr-[386px]">Начертания</li>
                                            <li className="mr-[287px]">Medium</li>
                                            <li className="mr-[176px]">SemiBold</li>
                                            <li>Bold</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="h-[490px] relative">
                                    <ul className="flex flex-col font-medium justify-center mx-auto right-0 left-0 h-[390px] w-[368px] absolute -rotate-90 top-[70px]">
                                        <li className=" border-[#FFFFFF33] flex flex-col">
                                            <div className="h-[560px] w-[368px] bg-[#7CA652] relative rounded-t-[10px]"><p className="absolute left-[20px] bottom-[20px]">#7CA652</p></div>
                                        </li>
                                        <li className="flex flex-col">
                                            <div className="h-[224px] w-[368px] bg-[#FFFFFF] relative"><p className="absolute left-[20px] bottom-[20px] text-black">#FFFFFF</p></div>
                                        </li>
                                        <li className="flex flex-col">
                                            <div className="h-[200px] w-[368px] bg-[#FAFAFA] relative"><p className="absolute left-[20px] bottom-[20px] text-black">#FAFAFA</p></div>
                                        </li>
                                        <li className="flex flex-col">
                                            <div className="h-[100px] w-[368px] bg-[#F3F3F3] relative"><p className="absolute left-[20px] bottom-[20px] text-black">#F3F3F3</p></div>
                                        </li>
                                        <li className="flex flex-col">
                                            <div className="h-[80px] w-[368px] bg-[#AEAEAE] relative"><p className="absolute left-[20px] bottom-[20px] text-black">#AEAEAE</p></div>
                                        </li>
                                        <li className="flex flex-col">
                                            <div className="h-[58px] w-[368px] bg-[#2D2D2D] relative"><p className="absolute left-[20px] bottom-[20px]">#2D2D2D</p></div>
                                        </li>
                                        <li className="flex flex-col">
                                            <div className="h-[58px] w-[368px] bg-[#181818] relative rounded-b-[10px]"><p className="absolute left-[20px] bottom-[20px]">#181818</p></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex font-medium pt-[10px] pb-[7px] uppercase mb-[150px]">
                                    <h4 className="mr-[269px]">Колористика</h4>
                                    <ul className="flex text-[#FFFFFF66]">
                                        <li className="mr-[252px]">Зеленый</li>
                                        <li className="mr-[114px]">Белый</li>
                                        <li className="mr-[178px]">Черный</li>
                                        <li>Оттенки серого</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="bg-white text-black ">
                        <section className='relative max-w-[1440px] mx-auto flex flex-col w-full pt-[150px] mb-[250px] border-y-[1px] border-[#00000033]'>
                            <div className="uppercase text-h3 leading-h3 text-[#00000033] border-y-[1px] border-[#00000033] px-[80px]">
                                <h3 className="flex gap-x-[392px]">Компании<span>холдинга</span></h3>
                                <h3 className="flex gap-x-[102px] ml-[181px]">Performance<span>group</span></h3>
                            </div>
                            <ul className="flex relative">
                                <li className="ml-[238px]"><img src="public\food\company1.png" alt="" /></li>
                                <li className="mt-[236px] ml-[]"><img src="public\food\company2.png" alt="" /></li>
                                <li className="p-[100px] mt-[310px] border-[1px] border-b-0 w-[327px] h-[290px] ml-[134px]"><img src="public\food\company3.png" alt="" /></li>
                                <li className="px-[80px] py-[60px] border-[1px] border-b-0 w-[401px] h-[170px] absolute left-[80px] bottom-0"><img className="" src="public\food\company4.png" alt="" /></li>
                            </ul>
                        </section>
                        <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px]'>
                            <ul className="flex gap-x-[85px] z-[1]">
                                <li>
                                    <img src="public\food\holding.png" alt="" />
                                </li>
                                <li className="flex flex-col gap-y-[340px]">
                                    <img className="ml-[184px] w-[206px] h-[440px]" src="public\food\holding_ph1.png" alt="" />
                                    <img className=" w-[206px] h-[440px]" src="public\food\holding_ph2.png" alt="" />
                                    <img className="ml-[184px] w-[206px] h-[440px]" src="public\food\holding_ph3.png" alt="" />
                                </li>
                            </ul>
                        </section>
                        <img className="mt-[-275px] z-[0] mx-auto" src="public\food\salad.png" alt="" />
                    </div>
                    <div className="bg-[#7CA652] text-white">
                        <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px] pt-[212px] pb-[250px]'>
                            <ul className="flex gap-x-[40px]">
                                <li>
                                    <p className="uppercase mb-[20px] font-medium">Вакансии</p>
                                    <img className="p-[10px] border-[1px] border-white rounded-[25px]" src="public\food\vacancy.png" alt="" />
                                </li>
                                <li>
                                    <p className="uppercase mb-[20px] pl-[60px] font-medium">Светлая версия</p>
                                    <img className="p-[10px] border-[1px] border-white rounded-[25px]" src="public\food\vacancy_more.png" alt="" />
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="bg-[#212121] text-white">
                        <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px] pb-[250px]'>
                            <h2 className="flex gap-x-[161px] uppercase items-center font-bold text-h3 leading-h3 text-[#7CA652] py-[40px] border-b-[0.5px] border-[#7CA652] tracking-[-3px] avenir mb-[250px]">Performance<img src="public\food\logo.svg" alt="" /><span>group</span></h2>
                            <ul className="flex gap-x-[40px]">
                                <li>
                                    <p className="uppercase mb-[125px] font-medium">Вакансии</p>
                                    <img className="p-[10px] border-[1px] border-white rounded-[25px]" src="public\food\vacancy_bl.png" alt="" />
                                </li>
                                <li>
                                    <p className="uppercase mb-[20px] pl-[60px] font-medium">Светлая версия</p>
                                    <img className="p-[10px] border-[1px] border-white rounded-[25px]" src="public\food\vacancy_more_bl.png" alt="" />
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="povar_bg">
                        <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px] pb-[150px]'>
                            <ul className="flex gap-x-[117px] ml-[67px] mt-[150px]">
                                <li className="mt-[360px]"><img src="public\food\kitchen_ph.png" alt="" /></li>
                                <li><img src="public\food\kitchen_site.png" alt="" /></li>
                            </ul>
                        </section>
                    </div>
                    <div className="bg-[#F5F5F7]">
                        <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px] pt-[250px] pb-[250px]'>
                            <ul>
                                <li className="relative">
                                    <img className="mb-[265px]" src="public\food\news.png" alt="" />
                                    <img className="absolute bottom-[-335px] left-[560px]" src="public\food\healthy_food.png" alt="" />
                                </li>
                                <li className="flex">
                                    <img className="w-[206px] h-[440px] mr-[20px]" src="public\food\healthy_food_ph1.png" alt="" />
                                    <img className="w-[206px] h-[440px] mr-[385px] mt-[220px]" src="public\food\healthy_food_ph2.png" alt="" />
                                    <img className="w-[206px] h-[440px] mt-[220px]" src="public\food\healthy_food_ph3.png" alt="" />
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="bg-[#212121]">
                        <section className='relative max-w-[1440px] mx-auto flex flex-col w-full px-[80px] py-[150px]'>
                            <img className="absolute right-[740px] top-[150px]" src="public\food\contacts_ph1.png" alt="" />
                            <img className="absolute right-[494px] top-[230px]" src="public\food\contacts_ph2.png" alt="" />
                            <div className="mb-[270px] uppercase text-[#FFFFFF1A] text-[140px] leading-[140px] font-bold text-center mt-[120px]">
                                <h2>Performance</h2>
                                <h2>Group<span>Контакты</span></h2>
                            </div>
                            <img className="mx-auto" src="public\food\contacts_site.png" alt="" />
                        </section>
                    </div>
                </main>
                <Rate/>
                <Footer/>
            </div>
        </>
    )
}
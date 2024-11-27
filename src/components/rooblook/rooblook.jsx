import { Footer } from "../Footer";
import { Header } from "../header";
import { Rate } from "../rate";
import { useEffect } from "react";
import '/src/App.css'

export function Roblook() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-[#F5F5F7]'>
                <Header title='rooblook' desk='Хедж Фонд' kind2='Интернет магазин'/>
                <main>
                    <img className="mx-auto w-[1440px]" src="public\rooblook\header_img.png" alt="" />
                    <section className='conteiner pt-[150px] text-black'>
                        <ul className='flex gap-x-[170px]'>
                            <li className='mt-[319px] w-[390px] pt-[10px]'>
                                <h4 className='uppercase text-h7 leading-h7 mb-[30px] desk_text'>Виды работ</h4>
                                <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                    <li className='font-medium text-h8 leading-h8 pb-[5px] flex justify-between'>Многостраничный сайт</li>
                                </ol>
                            </li>
                            <li>
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Производитель дизайнерской мебели, светильников и предметов интерьера.</p>
                                <img src="public\rooblook\about_client.png" alt="" />
                            </li>
                        </ul>
                    </section>
                    <section className='conteiner pt-[250px] text-black'>
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
                    <section className="conteiner mt-[250px] text-black">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Сайт</h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Разработали дизайн корпоративного сайта, где можно узнать о компании, посмотреть их работы, услуги и продукцию, которую они производят.</p>
                            </div>
                            <ul className="flex gap-x-[60px]">
                                <li>
                                    <img src="public\rooblook\site.png" alt="" />
                                </li>
                                <li className="mt-[202px]">
                                    <img className="" src="public\rooblook\site_ph1.png" alt="" />
                                    <img className="mt-[220px] ml-[220px]" src="public\rooblook\site_ph2.png" alt="" />
                                    <img className="mt-[480px] ml-[220px]" src="public\rooblook\site_ph3.png" alt="" />
                                    <img className="mt-[220px]" src="public\rooblook\site_ph4.png" alt="" />
                                </li>
                            </ul>
                    </section>
                    <img className="mx-auto mt-[-682px]" src="public\rooblook\site_bg.png" alt="" />
                    <div className="bg-[#000000] text-white">
                        <section className="conteiner pt-[250px] pb-[150px]">
                            <div className="ml-[560px]">
                                <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>Дизайн<span>Система</span></h3>
                                <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[770px] font-medium pt-[10px] pb-[7px] uppercase">
                                    <h4>Типографика</h4>
                                    <h4 className="mr-[305px]">2 шрифта</h4>
                                </div>
                                <div className="font-normal uppercase">
                                    <div className="basis-1/2 flex flex-col items-center justify-center border-[#FFFFFF33]">
                                        <h2 className="text-[70px] leading-[77px] py-[121px] gilroy">Gilroy</h2>
                                        <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                            <li className="mr-[233px]">Начертания</li>
                                            <li className="mr-[96px]">Light</li>
                                            <li className="mr-[160px]">Regular</li>
                                            <li className="mr-[236px]">Medium</li>
                                            <li>SemiBold</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="font-normal uppercase">
                                    <div className="basis-1/2 flex flex-col items-center justify-center border-[#FFFFFF33]">
                                        <h2 className="text-[70px] leading-[77px] py-[121px] bague">PF Bague Sans Pro</h2>
                                        <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                            <li className="mr-[233px]">Начертания</li>
                                            <li className="mr-[96px]">Light</li>
                                            <li className="mr-[160px]">Regular</li>
                                            <li className="mr-[236px]">Medium</li>
                                            <li>SemiBold</li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="flex gap-x-[10px] font-medium pt-[80px] pb-[40px]">
                                    <li className="flex w-[635px] bg-[#C7AB95] px-[20px] pt-[410px] uppercase text-[#FFFFFF66] font-medium leading-[17px]">
                                        <p className="flex justify-between w-full">Акцентный<span>#C7AB95</span></p>
                                    </li>
                                    <li className="flex flex-col w-[635px] uppercase font-medium gap-y-[10px]">
                                        <div className="w-full bg-[#6B5344] pt-[67px] pb-[20px] px-5 text-[#FFFFFF66] font-medium leading-[17px]">
                                            <p className="flex justify-between">текста кнопок<span>#6B5344</span></p>
                                        </div>
                                        <div className="w-full bg-[#161716] pt-[67px] pb-[20px] px-5 justify-between text-[#FFFFFF66] font-medium leading-[17px]">
                                            <p className="flex justify-between">Основной текст<span>#161716</span></p>
                                        </div>
                                        <div className="w-full bg-[#F2EFED] pt-[67px] pb-[20px] px-5 justify-between text-[#00000066] font-medium leading-[17px]">
                                            <p className="flex justify-between">Цвет кнопки<span>#F2EFED</span></p>
                                        </div>
                                        <div className="w-full bg-[#FFFFFF] pt-[67px] pb-[20px] px-5 justify-between text-[#00000066] font-medium leading-[17px]">
                                            <p className="flex justify-between">Фон<span>#FFFFFF</span></p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[768px] font-medium pt-[10px] pb-[7px] uppercase mb-[80px]">
                                    <h4>Колористика</h4>
                                    <h4 className="mr-[305px] text-[#FFFFFF66]">5 цветов</h4>
                                </div>
                                <ul className="flex gap-x-[110px] mb-[40px]">
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
                                    <li className="border-[3px] border-[#FFFFFFCC] w-[890px] rounded-[20px] flex gap-x-[11px] justify-center">
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
                                    <h4>Сетка</h4>
                                    <ul className="flex text-[#FFFFFF66]">
                                        <li className="mr-[254px]">Десктоп</li>
                                        <li>12 колонок</li>
                                    </ul>
                                </div>
                                <ul className="flex gap-x-[250px] mb-[40px]">
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
                                    <li className="border-[3px] border-[#FFFFFFCC] w-[220px] rounded-[30px] flex gap-x-[11px] justify-center">
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                        <div className="border-x-[0.5px] border-[#FFFFFF66] h-[476px] w-[28px]"></div>
                                    </li>
                                </ul>
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[336px] font-medium pt-[10px] pb-[7px] uppercase">
                                    <h4>Сетка</h4>
                                    <ul className="flex text-[#FFFFFF66]">
                                        <li className="mr-[254px]">Мобильная</li>
                                        <li>5 колонок</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="relative">
                        <img className="mx-auto absolute right-0 left-0" src="public\rooblook\product_bg.png" alt="" />
                        <section className="conteiner pt-[250px]">
                            <div className="flex gap-x-[24px] mx-auto mb-[150px]">
                                <img className="h-[401px]" src="public\rooblook\product_1.png" alt="" />
                                <img src="public\rooblook\product_2.png" alt="" />
                            </div>
                            <div className="relative mb-[250px]">
                                <img className="absolute mx-auto right-0 left-0 top-[134px] z-[0]" src="public\rooblook\product_3_bg.png" alt="" />
                                <div className="">
                                    <img className="mx-auto z-[1] relative" src="public\rooblook\product_3.png" alt="" />
                                </div>
                            </div>
                        </section>
                        <section className="conteiner px-0">
                            <div className="flex border-y-[20px] border-white">
                                <div className=" px-[245px] py-[80px] border-r-[20px] border-white">
                                    <img src="public\rooblook\product_4.png" alt="" />
                                </div>
                                <div className="p-[80px] text-right">
                                    <p className="uppercase flex text-[#00000033] gap-x-[167px] mb-[130px]">Страница<span>товара</span></p>
                                    <img src="public\rooblook\product_5.png" alt="" />
                                </div>
                            </div>
                        </section>
                        <section className="conteiner text-right pt-[80px] mb-[170px]">
                            <img className="mx-auto mb-[100px]" src="public\rooblook\product_6.png" alt="" />
                            <p className="uppercase absolute right-0 top-[424px] text-[#00000033] font-medium">корзина</p>
                            <div className="relative">
                                <div className="flex gap-x-[40px] z-[1] relative ml-[530px]">
                                    <img className="h-[470px]" src="public\rooblook\product_7.png" alt="" />
                                    <img className="mt-[235px]" src="public\rooblook\product_8.png" alt="" />
                                </div>
                                <img className="absolute top-[220px] z-0" src="public\rooblook\product_78_bg.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div className="relative bg-black">
                        <img className="mx-auto absolute right-0 left-0" src="public\rooblook\order_bg.png" alt="" />
                        <section className="conteiner pt-[250px]">
                            <div className="flex gap-x-[170px] ml-[70px] mb-[250px]">
                                <p className="absolute right-[80px] top-[250px]">Изделия на заказ</p>
                                <img src="public\rooblook\order_1.png" alt="" />
                                <img className="mt-[212px] h-[807px]" src="public\rooblook\order_2.png" alt="" />
                            </div>
                            <div className="relative mb-[210px]">
                                <h2 className="flex flex-col gap-y-[296px] text-[440px] text-[#FFFFFFE5] leading-[396px] gilroy font-medium absolute mx-auto right-0 left-0 tracking-[-17px] z-[0]">EAMES<span>WHITE</span></h2>
                                <div className="flex gap-x-[20px] ml-[170px] pt-[111px] pb-[257px] z-[1] relative">
                                    <img src="public\rooblook\order_3.png" alt="" />
                                    <img src="public\rooblook\order_4.png" alt="" />
                                </div>
                            </div>
                            <div className="relative mb-[250px]">
                                <div className="absolute flex justify-between w-full uppercase text-[#FFFFFFCC]">
                                    <p>Страница</p>
                                    <p>проекта</p>
                                </div>
                                <img className="mx-auto mb-[150px]" src="public\rooblook\page.png" alt="" />
                                <ul className="flex">
                                    <li className="mr-[308px] mt-[235px]"><img src="public\rooblook\page_ph1.png" alt="" /></li>
                                    <li className="mr-[20px]"><img src="public\rooblook\page_ph2.png" alt="" /></li>
                                    <li className="mr-[20px]"><img src="public\rooblook\page_ph3.png" alt="" /></li>
                                    <li className="mt-[235px]"><img src="public\rooblook\page_ph4.png" alt="" /></li>
                                </ul>
                            </div>
                        </section>
                        <img className="mx-auto absolute right-0 left-0" src="public\rooblook\rooblook_bg.png" alt="" />
                        <section className="conteiner py-[96px]">
                            <div className="flex flex-col px-[146px] pt-[299px] pb-[30px] mx-auto gap-y-[284px] items-center border-[4px] rounded-[20px]">
                                <img className="w-[207px]" src="public\rooblook\rooblook_logo.png" alt="" />
                                <img className="w-[208px]" src="public\rooblook\Design-furniture.png" alt="" />
                            </div>
                        </section>
                        <section className="pt-[250px] conteiner pb-[250px]">
                            <p className="uppercase absolute left-[339px] top-[250px]">Блог</p>
                            <div className="flex gap-x-[240px] ml-[170px] mb-[250px]">
                                <img className="mt-[131px] h-[790px]" src="public\rooblook\blog_1.png" alt="" />
                                <img src="public\rooblook\blog_2.png" alt="" />
                            </div>
                            <ul>
                                <li className="flex">
                                    <img className="w-[170px] h-[157px]" src="public\rooblook\blog_3.png" alt="" />
                                    <img className="mr-[330px] mt-[325px] w-[390px] h-[390px]" src="public\rooblook\blog_5.png" alt="" />
                                    <img className="w-[220px] h-[325px]" src="public\rooblook\blog_4.png" alt="" />
                                </li>
                                <li className="flex">
                                    <img className="w-[220px] h-[182px] mr-[340px] mt-[285px]" src="public\rooblook\blog_6.png" alt="" />
                                    <img className="w-[330px] h-[330px] mr-[220px] mt-[137px]" src="public\rooblook\blog_7.png" alt="" />
                                    <img className="w-[170px] h-[274px] " src="public\rooblook\blog_8.png" alt="" />
                                </li>
                            </ul>
                        </section>
                        <section className="conteiner relative pb-[150px]">
                            <p className="uppercase font-medium absolute left-[80px]">Страница статьи</p>
                            <img className="mx-auto mb-[100px]" src="public\rooblook\article_1.png" alt="" />
                            <img className="absolute left-[80px] top-[620px]" src="public\rooblook\article_2.png" alt="" />
                            <div className="flex gap-x-[40px] ml-[745px]">
                                <img src="public\rooblook\article_3.png" alt="" />
                                <img src="public\rooblook\article_4.png" alt="" />
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
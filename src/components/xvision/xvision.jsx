import { Header } from "../header";
import { Rate } from "../rate" 
import { Footer } from "../Footer"

export function XVISION() {
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative'>
                <Header title='XVISION' desk='Агенство недвижимости' kind2='Одностраничный сайт'/>
                <main className="bg-white text-black">
                    <img className="mx-auto" src="public\XVision\header_img.png" alt="" />
                    <div className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[150px]'>
                        <section className='mb-[250px]'>
                            <ul className='flex gap-x-[40px]'>
                                <li className='mt-[320px]'>
                                    <h4 className='uppercase text-h7 leading-h7 mb-[30px]'>Виды работ</h4>
                                    <ol className='text-[#000000B2] font-normal flex flex-col gap-y-[10px]'>
                                        <li className='font-medium text-h8 leading-h8'>Одностраничный сайт</li>
                                    </ol>
                                    <img className='ml-[260px] mt-[404px]' src="public\XVision\small_img.png" alt="" />
                                </li>
                                <li>
                                    <h3 className='flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium'>О<span>Клиенте</span></h3>
                                    <p className='w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text'>Официальнный дистрибьютор голографических вентиляторов Dsee в РФ.
                                        <br />
                                        <br />
                                        Клиенты компании: Renault, Red Bull, Coca-Cola, Мегафон</p>
                                    <img src="public\XVision\big_img.png" alt="" />
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
                            <div className="w-[720px] flex justify-center items-center bg-[#C8CDDA]">
                                <img src="public\XVision\task_ph.png" alt="" />
                            </div>
                            <img src="public\XVision\task_2.png" alt="" />
                        </section>
                    </div>
                    <div className='px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full'>
                        <section className='relative max-w-[1440px] mx-auto flex flex-col w-full mb-[306px]'>
                            <div className="ml-[560px]">
                                <h3 className="flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium">Сайт</h3>
                                <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">Разработали дизайн сайта, где можно узнать о компании, её услуги и воспользоваться калькулятором, чтобы узнать условия ипотеки: сумму кредита, ставку и ежемесячный платеж.</p>
                            </div>
                            <img className="mx-auto" src="public\XVision\site.png" alt="" />
                        </section>
                        <section className="mb-[250px]">
                            <ul className="flex ml-[170px]">
                                <li className="mr-[40px]"><img src="public\XVision\site_ph1.png" alt="" /></li>
                                <li className="mr-[240px]"><img src="public\XVision\site_ph2.png" alt="" /></li>
                                <li className="mt-[150px]"><img src="public\XVision\site_ph3.png" alt="" /></li>
                            </ul>
                        </section>
                        <section className="relative mb-[250px]">
                            <h2 className="text-[296px] leading-[326px] font-medium text-[#40E3FD] uppercase tracking-[-10px]">XVision</h2>
                            <img className="absolute top-[-20px]  right-0" src="public\XVision\50S.png" alt="" />
                        </section>
                        <section className="mb-[250px]">
                            <div className="flex gap-x-[30px] ml-[280px]">
                                <img className="mt-[213px] w-[220px] h-[446px]" src="public\XVision\model_ph1.png" alt="" />
                                <img className="w-[220px] h-[446px]" src="public\XVision\model_ph2.png" alt="" />
                                <img className="mt-[356px] w-[220px] h-[446px]" src="public\XVision\model_ph3.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div className='relative mx-auto flex flex-col w-full bg-[#191919] text-white'>
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pt-[250px] px-[80px]">
                            <div className="ml-[560px]">
                                <h3 className="flex gap-x-[112px] uppercase text-h4 leading-h4 mb-[60px] font-medium">Дизайн<span>Система</span></h3>
                                <p className="w-[720px] text-h5 leading-h5 mb-[100px] font-normal desk_text">Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса.</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[770px] font-medium pt-[10px] pb-[7px] uppercase">
                                    <h4>Типографика</h4>
                                    <h4 className="mr-[305px]">1 шрифта</h4>
                                </div>
                                <div className="font-normal uppercase">
                                    <div className="basis-1/2 flex flex-col items-center justify-center border-[#FFFFFF33]">
                                        <h2 className="text-[70px] leading-[77px] py-[121px] bebas sf_pro">SF Pro Display</h2>
                                        <ul className="flex border-t-[1px] border-b-[1px] border-[#FFFFFF33] w-full py-[10px] font-medium text-[#FFFFFF66]">
                                            <li className="mr-[210px]">Начертания</li>
                                            <li className="mr-[260px]">Regular</li>
                                            <li className="mr-[129px]">Medium</li>
                                            <li className="mr-[176px]">SemiBold</li>
                                            <li>Bold</li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="flex font-medium justify-center">
                                    <li className="border-r-[1px] border-[#FFFFFF33] flex flex-col text-center px-[105px] pt-[93px] pb-[45px]">
                                        <h2 className="text-[350px] leading-[340px] text-[#40E3FD]">X</h2>
                                        <p>#40E3FD</p>
                                    </li>
                                    <li className="border-r-[1px] border-[#FFFFFF33] flex flex-col text-center px-[105px] pt-[93px] pb-[45px]">
                                        <h2 className="text-[350px] leading-[340px] text-white">X</h2>
                                        <p>#FFFFFF</p>
                                    </li>
                                    <li className="border-[#FFFFFF33] flex flex-col text-center px-[105px] pt-[93px] pb-[45px]">
                                        <h2 className="text-[350px] leading-[340px] text-black">X</h2>
                                        <p>#000000</p>
                                    </li>
                                </ul>
                                <div className="border-t-[1px] border-b-[1px] border-[#FFFFFF33] flex gap-x-[768px] font-medium pt-[10px] pb-[7px] uppercase mb-[250px]">
                                    <h4>Колористика</h4>
                                    <h4 className="mr-[305px]">3 цвета</h4>
                                </div>
                                <div className="flex border-b-[1px] border-t-[1px] border-[#F5F5F733]">
                                    <div className="flex flex-col justify-center items-center basis-1/2 mt-[87px]">
                                        <img className="w-[220px] h-[446px] z-[2]" src="public\XVision\rent_phone.png" alt="" />
                                        <img className="w-[196px] mt-[-17px] z-[1]" src="public\XVision\rent_phone2.png" alt="" />
                                    </div>
                                    <div className="basis-1/2 bg-white px-20 py-[80px]">
                                        <img className="" src="public\XVision\rent_site.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='relative mx-auto flex flex-col w-full bg-white'>
                        <section className="max-w-[1440px] mx-auto flex flex-col w-full pt-[250px] pb-[112px] px-[80px]">
                            <img className="mx-auto mb-[150px]" src="public\XVision\clients.png" alt="" />
                            <div className="flex mx-auto gap-x-[60px]">
                                <img className="h-[446px]" src="public\XVision\gift_ph.png" alt="" />
                                <img className="mt-[150px] h-[446px]" src="public\XVision\clients_ph.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div className='relative mx-auto flex flex-col w-full bg-white'>
                        <div className="bg-[#0B65FE] mx-auto right-0 left-0 w-[1440px] h-[918px] absolute z-[0]"><img className="mx-auto mb-[150px]" src="public\XVision\app_img.png" alt="" /></div>
                        <section className="max-w-[1440px] relative mx-auto flex flex-col w-full pt-[459px] pb-[250px] px-[80px] z-[1]">
                            <img className="mx-auto" src="public\XVision\xvision_app.png" alt="" />
                            <div className="flex">
                                <img className="absolute top-[872px] left-[120px]" src="public\XVision\phone_1.png" alt="" />
                                <img className="absolute top-[1948px] right-[120px]" src="public\XVision\phone_2.png" alt="" />
                                <img className="absolute top-[2576px] left-[120px]" src="public\XVision\phone_3.png" alt="" />
                            </div>
                        </section>
                    </div>
                    <div className='relative mx-auto flex flex-col w-full bg-white'>
                        <img className="mx-auto absolute right-0 left-0" src="public\XVision\Rectangle 198.png" alt="" />
                        <section className="max-w-[1440px] relative mx-auto flex flex-col w-full pt-[140px] px-[80px] z-[1]">
                            <div className="flex gap-x-[280px] ml-[60px] mb-[140px]">
                                <img className="mt-[128px]" src="public\XVision\categories_ph.png" alt="" />
                                <img className="w-[720px] h-[416px]" src="public\XVision\big_categories.png" alt="" />
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
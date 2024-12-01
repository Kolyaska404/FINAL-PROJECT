import { Link } from "react-router-dom"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
export function Designs() {
    return (
        <section className="bg-white text-black">
            <div className="flex w-full max-w-[1440px] relative px-[80px] mx-auto h-[820px]">
                <div className="flex">
                    <img className="absolute top-[25px] left-[124px] z-[5]" src="/public/main page/podhod.png" alt="" />
                    <div className='flex flex-col overflow-hidden rounded-[10px] w-[560px] border-[1px] border-black font-medium mt-[41px] mb-[41px] absolute right-[80px] z-[6]'>
                        <h4 className="w-full flex items-center justify-start px-[20px] py-[11px] bg-black text-white uppercase text-h7 leading-h7">Не срываем сроки</h4>
                        <div className="">
                            <div className="font-medium mt-[75px] mb-[71px] px-[20px]">
                                <h2 className="text-[30px] leading-[39px]">Мы обучили более</h2>
                                <h3 className="uppercase text-[52px] leading-[57px] tracking-[-3px]">4 000 дизайнеров</h3>
                            </div>
                            <ul className="w-full">
                                <li className="flex justify-between py-[25px] border-t-[1px] px-[20px] border-[">
                                    <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">И что?</h3>
                                    <p className="w-[295px] text-h8 leading-h8 font-normal">А это значит, что даже если ведущий вас дизайнер заболеет, то наши проект-менеджеры быстро найдут замену и работа продолжится.</p>
                                </li>
                                <li className="flex justify-between py-[25px] px-[20px] border-t-[1px] border-[">
                                    <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">Выстроенная система</h3>
                                    <p className="w-[295px] text-h8 leading-h8 font-normal">У нас своя система, по которой работают наши дизайнеры. И которой мы обучаем наших учеников, поэтому новый дизайнер может легко включиться в проект.</p>
                                </li>
                                <li className="flex justify-between py-[25px] px-[20px] border-y-[1px] border-[">
                                    <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">P.S.</h3>
                                    <p className="w-[295px] text-h8 leading-h8 font-normal">Дизайн этого сайта сделал наш ученик.</p>
                                </li>
                            </ul>
                            <Link to='/team' className="uppercase w-full flex items-center justify-center py-[25px] text-h8 leading-h8">Узнать о нашей команде</Link>
                        </div>
                    </div>
                    <div className="relative h-[820px] w-[1440px]">
                        <Parallax pages={2}>
                            <ParallaxLayer offset={1}>
                                <div className='flex flex-col overflow-hidden rounded-[10px] w-[560px] border-[1px] bg-white z-[8000] border-black font-medium mb-[41px] absolute right-[80px] top-[84px]'>
                                    <h4 className="w-full flex items-center justify-start px-[20px] py-[11px] bg-black text-white uppercase text-h7 leading-h7">Не срываем сроки</h4>
                                    <div className="">
                                        <div className="font-medium mt-[75px] mb-[71px] px-[20px]">
                                            <h2 className="text-[30px] leading-[39px]">Мы делаем</h2>
                                            <h3 className="uppercase text-[52px] leading-[57px] flex flex-col">Обуманный,<span className="ml-[45px]">Нешаблонный</span><span className="ml-[302px]">дизайн</span></h3>
                                        </div>
                                        <ul className="w-full">
                                            <li className="flex justify-between py-[25px] border-t-[1px] px-[20px]">
                                                <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">Нешаблонный</h3>
                                                <p className="w-[295px] text-h8 leading-h8 font-normal">Шаблоны работают только на очень короткий срок. Для долгосрочной работы бизнесу нужен дизайн, который будет максимально показывать ценностье пользователям.</p>
                                            </li>
                                            <li className="flex justify-between py-[25px] px-[20px] border-y-[1px]">
                                                <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">Обдуманный</h3>
                                                <p className="w-[295px] text-h8 leading-h8 font-normal">Каждое визуальные решения мы делаем в зависимости от ЦА и задач бизнеса.</p>
                                            </li>
                                        </ul>
                                        <Link to='/Portfolio' className="uppercase w-full flex items-center justify-center py-[25px] text-h8 leading-h8">Посмотреть наши работы</Link>
                                    </div>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={2}>
                                <div className='flex flex-col overflow-hidden rounded-[10px] w-[560px] border-[1px] border-black font-medium mt-[41px] mb-[41px] absolute top-[127px] right-[80px] z-[10]'>
                                    <h4 className="w-full flex items-center justify-start px-[20px] py-[11px] bg-black text-white uppercase text-h7 leading-h7">Работаем по договору</h4>
                                    <div className="bg-white">
                                        <div className="font-medium  mt-[75px] mb-[71px]">
                                            <h2 className="text-[30px] leading-[39px] px-[20px] tracking-[-1px] font-normal">Нам важно, чтобы работа была</h2>
                                            <h3 className="uppercase text-[52px] leading-[57px] flex flex-col px-[20px] tracking-[-3px]">
                                                <span className="flex gap-x-[136px]">Прозрачной<span>и</span></span>
                                                <span className="flex gap-x-[67px] ml-[62px]">Без серых<span>зон</span></span>
                                            </h3>
                                        </div>
                                        <ul className="w-full">
                                            <li className="flex justify-between py-[25px] border-t-[1px] px-[20px]">
                                                <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">Перед началом работы</h3>
                                                <p className="w-[295px] text-h8 leading-h8 font-normal">
                                                    Определяем задачу и цель проекта, прописываем виды работ, этапы и сроки.
                                                    <br />
                                                    <br />
                                                    Приступаем к работе, после подписания договара с обеих сторон.</p>
                                            </li>
                                            <li className="flex justify-between py-[25px] border-y-[1px] px-[20px]">
                                                <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">Оплата</h3>
                                                <p className="w-[295px] text-h8 leading-h8 font-normal">После каждого этапа высылаем счет на оплату, после чего переходим к следующему.</p>
                                            </li>
                                        </ul>
                                        <Link to='/Service' className="uppercase w-full flex items-center justify-center py-[25px] text-h8 leading-h8">Посмотреть услуги и этапы работ</Link>
                                    </div>
                                </div>
                            </ParallaxLayer>
                        </Parallax>
                    </div>
                </div>
                <Parallax pages={3} style={{margin: '0 auto', right: '0', left: '0', top: '0', zIndex: '4'}}>
                    <ParallaxLayer offset={0} style={{top: '0'}}>
                        <div className="relative pl-[80px]">
                            <div className="uppercase tracking-[-4px] mt-[74px]">
                                <h1 className="text-[250px] leading-[250px] mt-[20px] mb-[30px]">40 <br /> <span className="ml-[303px]">00</span></h1>
                                <h1 className="text-h1 leading-h1 mb-[76px] font-medium">Дизай- <br /><span className="ml-[340px]">неров</span></h1>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} style={{height: '820px'}} sticky={0}>
                        <div className="flex relative pl-[80px]">
                            <div className="uppercase tracking-[-4px] mt-[54px]">
                                <h1 className="text-[100px] leading-[100px] mb-[30px] font-medium">обдуман-<br /><span className="ml-[431px]">ный</span></h1>
                                <h1 className="text-[250px] leading-[250px] mb-[76px] font-medium">Ди <br /><span>зайн</span></h1>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} style={{height: '820px'}}>
                        <div className="flex items-center relative pt-[54px] pl-[80px]">
                            <div className="font-medium uppercase tracking-[-5px] z-[1] relative">
                                <h1 className="text-[100px] leading-[100px] mb-[10px] font-medium">Главное</h1>
                                <h1 className="text-[250px] leading-[220px] font-medium">
                                    <span>Проз–</span>
                                    <span>рач–</span>
                                    <span>ность</span>
                                </h1>
                            </div>
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </section>
    )
}
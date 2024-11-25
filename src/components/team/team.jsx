import { Footer } from "../Footer";
import { Header } from "../header";
import { Run_stroke_13, Run_stroke_12, Run_stroke_14 } from "../main_page/run_stroke";
import '/src/App.css'

export function Team() {
    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative'>
                <Header title='Команда' title2='Yudaev' title3='branding' desk='Помогаем бизнесу решить задачи в интернете.' year=''/>
                <main className="bg-black">
                    <section className="conteiner pt-[150px] pb-[300px]">
                        <div className="border-y-[1px] border-[#FFFFFF66] text-white font-normal">
                            <div className="py-[80px] flex gap-x-[75px] border-b-[1px] border-[#FFFFFF66]">
                                <h3 className="flex flex-col text-[60px] leading-[66px] uppercase">Экпертность<span className="flex gap-x-[74px] ml-[170px]">в<span>дизайне</span></span></h3>
                                <ul className="flex gap-x-[50px] desk_text">
                                    <li className="flex flex-col gap-y-[25px]">
                                        <p>Мобильных приложений</p>
                                        <p>SaaS приложений</p>
                                        <p>Десктоп приложений</p>
                                    </li>
                                    <li className="flex flex-col gap-y-[25px]">
                                        <p>Лендингов</p>
                                        <p>Корпоративных сайтов</p>
                                        <p>Интернет магазинов</p>
                                    </li>
                                    <li>
                                        <p>Брендинг</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="py-[80px] flex gap-x-[75px]">
                                <h3 className="flex flex-col text-[60px] leading-[66px] uppercase"><span className="flex gap-x-[177px]">опыт<span>в</span></span><span className="ml-[170px]">индустриях</span></h3>
                                <ul className="flex gap-x-[] desk_text">
                                    <li className="flex flex-col gap-y-[25px] mr-[125px]">
                                        <p>Сферы услуг</p>
                                        <p>Финансов</p>
                                        <p>Недвижимости</p>
                                    </li>
                                    <li className="flex flex-col gap-y-[25px] mr-[75px]">
                                        <p>Интернет торговли</p>
                                        <p>Одежды</p>
                                        <p>IT</p>
                                    </li>
                                    <li className="flex flex-col gap-y-[25px]">
                                        <p>Строительства</p>
                                        <p>Доставки</p>
                                        <p>Питания</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="conteiner px-0">
                        <div className="relative pb-[70px] mb-[250px] mix-blend-difference bottom-[70px]">
                            <div className="bg-[#D2FE67] rounded-[10px] w-[480px] h-[600px] absolute left-[250px]">
                                <img src="public\team\yudaev.png" alt="" />
                            </div>
                            <Run_stroke_12 title='Никита'/>
                            <Run_stroke_13 title='Юдаев' desk='Основатель Студии'/>
                        </div>
                        <div className="relative pb-[70px] mb-[250px] mix-blend-difference">
                            <div className="bg-[#D2FE67] rounded-[10px] w-[480px] h-[600px] absolute right-[250px]">
                                <img src="" alt="" />
                            </div>
                            <Run_stroke_12 title='Андрей'/>
                            <Run_stroke_13 title='ТЕнов' desk='Сооснователь'/>
                        </div>
                        <div className="relative pb-[70px] mb-[300px] mix-blend-difference">
                            <div className="bg-[#D2FE67] rounded-[10px] w-[480px] h-[600px] absolute left-[250px]">
                                <img src="" alt="" />
                            </div>
                            <Run_stroke_12 title='Богдан'/>
                            <Run_stroke_13 title='Быков' desk='Арт Директор'/>
                        </div>
                        <Run_stroke_14 title='Команда' desk='которая будет работать над вашим проектом'/>
                    </section>
                    <section className="conteiner px-0 max-w-[1600px] ">
                        <div className="relative pb-[539px] mx-auto z-[1] text-white mix-blend-difference pointer-events-none">
                            <h3 className="text-[100px] leading-[110px] font-medium flex flex-col uppercase">
                                <span className="ml-[390px]">Мы обучили</span>
                                <span className="ml-[170px]">4 000 дизайнеров</span>
                                <span className="">И лучшие</span>
                                <span className="ml-[560px]">работают</span>
                                <span className="ml-[170px] flex gap-x-[244px]">у нас<span>в студии</span></span>
                            </h3>
                            <p className="absolute top-[245px] right-[349px] w-[301px] font-normal tracking-[-1px] text-center desk_text">(Наведите на эмодзи, чтобы посмотреть на работы наших учеников)</p>
                        </div>
                        <ul className="flex flex-col gap-y-[20px] absolute top-[259px] left-[25px] z-[0]">
                            <li className="flex gap-x-[20px]">
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img1.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img2.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden mr-[170px]"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img3.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img4.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img5.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img6.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img7.jpg" alt="" /></div>
                            </li>
                            <li className="flex gap-x-[20px]">
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden mr-[170px]"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img8.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img9.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden mr-[170px]"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img10.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img11.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img12.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img13.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img14.jpg" alt="" /></div>
                            </li>
                            <li className="flex gap-x-[20px]">
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img15.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img16.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img17.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img18.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img19.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden mr-[170px]"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img20.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img21.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img22.jpg" alt="" /></div>
                            </li>
                            <li className="flex gap-x-[20px]">
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden ml-[170px]"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img23.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img24.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden mr-[170px]"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img25.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img26.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img27.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img28.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img29.jpg" alt="" /></div>
                            </li>
                            <li className="flex gap-x-[20px]">
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img30.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden mr-[170px]"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img31.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img32.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img33.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img34.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden mr-[170px]"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img35.jpg" alt="" /></div>
                                <div className="w-[150px] h-[150px] bg-[#C4C4C4] rounded-[100%] overflow-hidden"><img className="opacity-0 hover:opacity-100 transition-opacity" src="public\team\img36.jpg" alt="" /></div>
                            </li>
                        </ul>
                    </section>
                </main>
                <Footer/>
            </div>
        </>
    )
}
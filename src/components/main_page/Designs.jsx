export function Designs() {
    return (
        <section className="bg-white text-black">
            <div className="flex w-full max-w-[1440px] relative px-[80px] mx-auto gap-x-[80px]">
                <div className="relative uppercase font-medium">
                    <h1 className="text-[250px] leading-[250px] mt-[20px] mb-[30px]">40 <br /> <span className="ml-[303px]">00</span></h1>
                    <img className="absolute top-[25px] left-[44px]" src="/public/main page/podhod.png" alt="" />
                    <h1 className="text-h1 leading-h1 mb-[76px]">Дизай- <br /><span className="ml-[340px]">неров</span></h1>
                </div>
                <div>
                    <div className='flex flex-col items-center overflow-hidden rounded-[10px] w-[560px] border-[1px] border-black font-medium mt-[41px] mb-[41px]'>
                        <h4 className="w-full flex items-center justify-start px-[20px] py-[11px] bg-black text-white uppercase text-h7 leading-h7">Не срываем сроки</h4>
                        <div className="">
                            <div className="font-medium mt-[75px] mb-[71px]">
                                <h2 className="text-[30px] leading-[39px]">Мы обучили более</h2>
                                <h3 className="uppercase text-[52px] leading-[57px]">4 000 дизайнеров</h3>
                            </div>
                            <ul className="w-full">
                                <li className="flex justify-between py-[25px] border-t-[1px]">
                                    <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">И что?</h3>
                                    <p className="w-[295px] text-h8 leading-h8 font-normal">А это значит, что даже если ведущий вас дизайнер заболеет, то наши проект-менеджеры быстро найдут замену и работа продолжится.</p>
                                </li>
                                <li className="flex justify-between py-[25px]">
                                    <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">Выстроенная система</h3>
                                    <p className="w-[295px] text-h8 leading-h8 font-normal">У нас своя система, по которой работают наши дизайнеры. И которой мы обучаем наших учеников, поэтому новый дизайнер может легко включиться в проект.</p>
                                </li>
                                <li className="flex justify-between py-[25px]">
                                    <h3 className="max-w-[190px] uppercase text-h7 leading-h8 font-medium">P.S.</h3>
                                    <p className="w-[295px] text-h8 leading-h8 font-normal">Дизайн этого сайта сделал наш ученик.</p>
                                </li>
                            </ul>
                            <button className="uppercase w-full flex items-center justify-center py-[25px] text-h8 leading-h8">Узнать о нашей команде</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
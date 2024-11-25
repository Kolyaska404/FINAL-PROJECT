export function Footer() {
    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval); 
        },15);
    }
    return (
        <section className="flex flex-col mx-auto w-full relative bg-black">
            <div className="w-full absolute top-[407px] left-0 h-[1px] bg-[#FFFFFFB2]"></div>
            <div className="px-[80px] max-w-[1440px] mx-auto text-white">
                <div className="flex relative justify-center gap-x-[160px] py-[150px] uppercase text-[#FFFFFF]">
                    <p className="mt-[60px] w-[280px] text-end">Можете связаться с нами или заполнить бриф</p>
                    <p className="">Хотите обсудить проект?</p>
                </div>
                <div className="py-[80px] flex relative uppercase">
                    <div className="basis-1/2">
                        <h2 className="text-h3 leading-h3 mb-[30px]">Контакты</h2>
                        <ul className="flex flex-col gap-y-[60px] text-h7 leading-h7 font-medium ml-[170px]">
                            <li>
                                <h3 className="text-[#FFFFFF66] mb-[10px]">Телефон</h3>
                                <p className="flex gap-x-[139px]">+7 999 999–99–99 <span className="text-[#FFFFFF66]">WA TG</span></p>
                            </li>
                            <li>
                                <h3 className="text-[#FFFFFF66] mb-[10px]">Почта</h3>
                                <p>design@yudaev.ru</p>
                            </li>
                            <li>
                                <ul className="flex gap-x-[134px]">
                                    <li>
                                        <h3 className="text-[#FFFFFF66] mb-[10px]">Мессенджеры</h3>
                                        <div className="flex flex-col gap-y-[10px]">
                                            <a href="">Telegram</a>
                                            <a href="">Whatsapp</a>
                                        </div>
                                    </li>
                                    <li className="text-right">
                                        <h3 className="text-[#FFFFFF66] mb-[10px]">Соц. сети</h3>
                                        <div className="flex flex-col gap-y-[10px]">
                                            <a href="">Vkontakte</a>
                                            <a href="">Instagram</a>
                                            <a href="">Behance</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-[#FFFFFF66] mb-[10px]">Другие наши проекты</h3>
                                <div className="flex flex-col gap-y-[10px]">
                                    <a href="">Школа дизайнеров</a>
                                    <a href="">Блог о дизайне</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="h-[770px] w-[1px] bg-[#FFFFFFB2] absolute top-0 mr-auto ml-auto right-0 left-0" />
                    <div className="basis-1/2">
                        <h2 className="text-h3 leading-h3 mb-[30px] ml-[80px]">Бриф</h2>
                        <p className="ml-[250px] text-h8 leading-h8 font-normal mb-[60px]">Ответьте на 10 вопросов, чтобы мы подсчитали стоимость вашего проекта.</p>
                        <a href="#" className="flex items-center justify-center ml-[250px] px-[120px] py-[186px] rounded-[100%] border-[#FFFFFF] border-[1px] w-[390px] h-[390px] whitespace-nowrap">Заполнить бриф</a>
                    </div>
                </div>
            </div>
            <div className="bg-[#F5F5F7]">
                <div className="flex w-full max-w-[1440px] relative h-[337px] px-[80px] mx-auto">
                    <img className="absolute left-0" src="public/main page/footer_metball_1.png" alt="" />
                    <img className="absolute right-0 left-0 mx-auto" src="public/main page/footer_metball_2.png" alt="" />
                    <img className="absolute right-0" src="public/main page/footer_metball_3.png" alt="" />
                    <div className="mix-blend-difference uppercase font-medium">
                        <h2 className="absolute left-[650px] uppercase top-[157px] flex gap-x-[10px] text-h7 leading-h7 font-medium text-white"><img src="public/main page/icons/footer_logo.png" alt="" /> Yudaev branding</h2>
                        <nav className="pt-[277px] text-h9 leading-h9 flex gap-x-[380px] items-center">
                            <button onClick={() => {scrollToTop(300)}} className="flex gap-x-[5px] uppercase px-[15px] py-[6px] rounded-[100px] border-[2px] border-white transition-colors delay-[0.09s] hover:text-black hover:bg-white hover:fill-black"><img src="public/main page/icons/footer_galka.svg" alt="" /> Вернуться наверх</button>
                            <ul className="flex gap-x-[40px]">
                                <li className="relative headr_a leading-h6"><a href="">Услуги (6)</a></li>
                                <li className="relative headr_a leading-h6"><a href="">Портфолио (12)</a></li>
                                <li className="relative headr_a leading-h6"><a href="">Команда</a></li>
                                <li className="relative headr_a leading-h6"><a href="">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}
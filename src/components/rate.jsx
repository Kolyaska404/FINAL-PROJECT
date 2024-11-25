import { Swiperr } from "./swiperr"

export function Rate() {
    return (
        <>
            <div className="relative mx-auto flex flex-col w-full bg-[#F5F5F7] text-black">
                <section className="px-[80px] relative max-w-[1440px] mx-auto flex flex-col w-full pt-[250px]">
                    <div className="mb-[250px]">
                        <h3 className="uppercase text-h4 leading-h4 mb-[80px] font-medium ml-[560px]">Как<span className="ml-[42px]">вам</span><span className="ml-[167px]">Проект?</span></h3>
                        <ul className="flex gap-x-[30px] ml-[560px]">
                            <li><button className="w-[220px] h-[220px] rounded-[100%] border-[0.5px] border-black hover:border-[#E9E9EB] hover:bg-[#E9E9EB] active:bg-[#F0F0F2] active:border-[#F0F0F2] focus:border-[#D9D9D9] focus:bg-[#D9D9D9] transition-colors delay-25">Не очень</button></li>
                            <li><button className="w-[220px] h-[220px] rounded-[100%] border-[0.5px] border-black hover:border-[#E7F9BD4D] hover:bg-[#E7F9BD4D] active:bg-[#EEF7DA] active:border-[#EEF7DA] focus:border-[#D2FE67] focus:bg-[#D2FE67] transition-colors delay-25">Хорошо</button></li>
                            <li><button className="w-[220px] h-[220px] rounded-[100%] border-[0.5px] border-black hover:border-[#F9F1BE4D] hover:bg-[#F9F1BE4D] active:bg-[#F7F3DB] active:border-[#DDFE8D] focus:border-[#FFEC69] focus:bg-[#FFEC69] transition-colors delay-25">Огонь</button></li>
                        </ul>
                    </div>
                </section>
                <Swiperr />
            </div>
        </>
    )
}
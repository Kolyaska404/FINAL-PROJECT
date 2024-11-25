export function Acc_card() {
    return (
        <div className="text-black">
            <h3 className="w-full bg-black text-right px-[20px] text-white py-[8px]">Лендинг</h3>
            <h2 className="text-black my-[36px] text-[89.5px] leading-h2 whitespace-nowrap font-medium tracking-[-3%]">Этапы работ</h2>
            <ul className="text-left text-h7 leading-h7">
                <li className="py-[25px] px-[20px] border-t-[1px] border-b-[1px] border-[#00000033] flex items-center whitespace-nowrap">
                    <h4 className="w-[152px] mr-[123px] text-h7 leading-h7">Брифинг</h4>
                    <p className=" text-[#00000066] w-[69px] mr-[73px]">1 день</p>
                    <p className=" text-[#00000066] w-[87px] mr-[70px]">0 ₽</p>
                    <button><img src="public/main page/icons/+_bl.svg" alt="" /></button>
                </li> 
                <li className="py-[25px] px-[20px] border-t-[1px] border-b-[1px] border-[#00000033] flex items-center whitespace-nowrap">
                    <h4 className="w-[152px] mr-[123px] text-h7 leading-h7">Исследования</h4>
                    <p className=" text-[#00000066] w-[69px] mr-[73px]">3 дня</p>
                    <p className=" text-[#00000066] w-[87px] mr-[70px]">10 000 ₽</p>
                    <button><img src="public/main page/icons/+_bl.svg" alt="" /></button>
                </li>
                <li className="py-[25px] px-[20px] border-t-[1px] border-b-[1px] border-[#00000033] flex items-center whitespace-nowrap">
                    <h4 className="w-[152px] mr-[123px] text-h7 leading-h7">Прототип</h4>
                    <p className="text-[#00000066] w-[69px] mr-[73px]">5 Дней</p>
                    <p className=" text-[#00000066] w-[87px] mr-[70px]">20 000 ₽</p>
                    <button><img src="public/main page/icons/+_bl.svg" alt="" /></button>
                </li>
                <li className="py-[25px] px-[20px] border-t-[1px] border-b-[1px] border-[#00000033] flex items-center whitespace-nowrap">
                    <h4 className="w-[152px] mr-[123px] text-h7 leading-h7">Дизайн</h4>
                    <p className=" text-[#00000066] w-[69px] mr-[73px]">5 Дней</p>
                    <p className=" text-[#00000066] w-[87px] mr-[70px]">30 000 ₽</p>
                    <button><img src="public/main page/icons/+_bl.svg" alt="" /></button>
                </li>
                <li className="py-[25px] px-[20px] border-t-[1px] border-b-[1px] border-[#00000033] flex items-center whitespace-nowrap">
                    <h4 className="w-[152px] mr-[123px] text-h7 leading-h7">Адаптивы</h4>
                    <p className=" text-[#00000066] w-[69px] mr-[73px]">2 дня</p>
                    <p className=" text-[#00000066] w-[87px] mr-[70px]">20 000 ₽</p>
                    <button><img src="public/main page/icons/+_bl.svg" alt="" /></button>
                </li>
                <li className="py-[25px] px-[20px] border-t-[1px] border-b-[1px] border-[#00000033] flex items-center whitespace-nowrap">
                    <h4 className="w-[152px] mr-[123px] text-h7 leading-h7">Анимация</h4>
                    <p className=" text-[#00000066] w-[69px] mr-[73px]">5 дней</p>
                    <p className=" text-[#00000066] w-[87px] mr-[70px]">20 000 ₽</p>
                    <button><img src="public/main page/icons/+_bl.svg" alt="" /></button>
                </li>
            </ul>
            <div className="flex gap-x-[58px] pt-[25px] pb-[18px] text-h7 leading-h7 text-[#00000066]">
                <p className="pl-[295px]">21 день*</p>
                <p>100 000 ₽*</p>
            </div>
            <p className="text-h10 leading-h10 font-normal pb-[21px]">* Конечная стоимость проекта зависит объема работы, сложности задачи и сроков.</p>
            <button className="uppercase text-h7 leading-h7 pt-[25px] border-t-[1px] border-[#00000033] w-full">Заполнить бриф</button>
        </div>
    )
}
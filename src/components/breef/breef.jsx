import { useState } from "react";
import { useEffect } from "react";
import { Menu } from '../menu';
import axios from 'axios';
import '/src/App.css';

export function Breef() {
    const [over, setOver] = useState(false);
    const nhover  = 'public/main page/icons/mn_wh_icn.svg'
    const hover = 'public/main page/icons/mn_icn.svg'
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        service: '',
        kind: '',
        goal: '',
        pages: '',
        functional: '',
        budget: '',
        material: '',
        url: '',
        yes_no: '',
        username: '',
        marketName: '',
        phone: ''
    })
    const btn_list = [
        {   
            id: 1,
            text: 'Дизайн лендинга'
        },
        {   
            id: 2,
            text: 'Дизайн многостраничного сайта'
        },
        {   
            id: 3,
            text: 'Дизайн интернет магазина'
        },
        {   
            id: 4,
            text: 'Дизайн новостного сайта / Блога'
        },
        {   
            id: 5,
            text: 'Дизайн приложения'
        },
        {   
            id: 6,
            text: 'Брендинг'
        },
    ]
    const [open, setOpen] = useState(false)
    const [btn_bg, setBtn_bg] = useState(null)
    const toggle = (i) => {
        if (btn_bg == i) {
            return setBtn_bg(null)
        }
        setBtn_bg(i)
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"})
    }, [])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ 
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4200/api/forms', formData);
            console.log(response.data);
            alert('Form submitted successfully!');
        } catch (error) {
            alert('There was an error submitting the form!', error);
        }
    };
    const checkboxHandleChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData((prev) => {
            const prevValues = prev[name] || [];
            
            const updated = checked
                ? [...prevValues, value]
                : prevValues.filter((item) => item !== value);
                
            return { ...prev, [name]: updated };
        });
    };


    return (
        <>
            <div className='w-full flex flex-col min-h-full mx-auto relative bg-black'>
                <header className="text-white conteiner px-0 border-b-[1px] border-[#FFFFFFB2]">
                    <nav className="flex px-[80px] items-center font-medium py-[20px] border-b-[1px] border-[#FFFFFFB2] text-white bg-black">
                        <h2 className="flex items-center gap-x-[10px] text-h7 leading-h7 font-medium uppercase mr-[354px]"><img className="z-[1]" src="public\main page\icons\LOGO_wh.png" alt="" /> Yudaev branding</h2>
                        <button onClick={() => setShowModal(true)} className="hover:bg-gr hover:text-black active:bg-sal active:text-[#00000099] transition-all delay-50 z-[1] flex items-center gap-x-[10px] px-[15px] py-[5.5px] rounded-[100px] border-[1px] mr-[445px] border-white text-h9 leading-h9" 
                            onMouseOver={() => setOver(true)}
                            onMouseOut={() => setOver(false)}
                            >
                            <img src={over ? hover : nhover} alt=""/>
                            МЕНЮ
                        </button>
                        <button className="hover:bg-gr hover:text-black active:bg-sal active:text-[#00000099] transition-all delay-25 z-[1] uppercase px-[15px] py-[5.5px] rounded-[100px] border-[1px] border-white text-h9 leading-h9">Заполнить бриф</button>
                    </nav>
                    <div className="mt-[123px] mb-[120px]">
                        <h1 className="text-h3 leading-h3 font-medium uppercase flex flex-col ml-[111px] tracking-[-2px] mb-[60px]">
                            <span className="flex gap-x-[138px]">Расскажите<span>о</span></span>
                            <span className="flex gap-x-[160px] ml-[427px]">своей<span>Задаче</span></span>
                        </h1>
                        <p className="ml-[640px] flex flex-col desk_text font-normal">
                            Ответьте на 10 вопросов, чтобы мы могли оценить объем и сложность
                            <span className="ml-[20px]">вашего проекта и сделать предварительный расчет стоимости.</span>
                        </p>
                    </div>
                    {showModal && <Menu closeModal={() => setShowModal(false)} />}
                </header>
                <main>
                    <section className="conteiner pt-[80px] pb-[150px]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-[80px]">
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">01</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase flex gap-x-[164px] mb-[60px]">Выберите<span>услугу?</span></label>
                                    <ul className="grid grid-cols-3 grid-rows-2 gap-y-[30px] ">
                                        <input id="serv_1" name="service" type="radio" checked={formData.service === 'Дизайн лендинга'} value='Дизайн лендинга' onChange={handleChange} className={`cursor-pointer service hover:text-black hover:bg-[#D2FE67] active:text-[#00000099] active:bg-[#DDFE8D] transition-colors flex w-[220px] h-[220px] rounded-[100%] justify-center items-center border-[0.5px] border-white text-center underline uppercase font-medium text-h9 leading-[15px] px-[20px]`}></input>
                                        <input id="serv_2" name="service" type="radio" checked={formData.service === 'Дизайн многостраничного сайта'} value='Дизайн многостраничного сайта' onChange={handleChange} className={`cursor-pointer service hover:text-black hover:bg-[#D2FE67] active:text-[#00000099] active:bg-[#DDFE8D] transition-colors flex w-[220px] h-[220px] rounded-[100%] justify-center items-center border-[0.5px] border-white text-center underline uppercase font-medium text-h9 leading-[15px] px-[20px]`}></input>
                                        <input id="serv_3" name="service" type="radio" checked={formData.service === 'Дизайн интернет магазина'} value='Дизайн интернет магазина' onChange={handleChange} className={`cursor-pointer service hover:text-black hover:bg-[#D2FE67] active:text-[#00000099] active:bg-[#DDFE8D] transition-colors flex w-[220px] h-[220px] rounded-[100%] justify-center items-center border-[0.5px] border-white text-center underline uppercase font-medium text-h9 leading-[15px] px-[20px]`}></input>
                                        <input id="serv_4" name="service" type="radio" checked={formData.service === 'Дизайн новостного сайта / Блога'} value='Дизайн новостного сайта / Блога' onChange={handleChange} className={`cursor-pointer service hover:text-black hover:bg-[#D2FE67] active:text-[#00000099] active:bg-[#DDFE8D] transition-colors flex w-[220px] h-[220px] rounded-[100%] justify-center items-center border-[0.5px] border-white text-center underline uppercase font-medium text-h9 leading-[15px] px-[20px]`}></input>
                                        <input id="serv_5" name="service" type="radio" checked={formData.service === 'Дизайн приложения'} value='Дизайн приложения' onChange={handleChange} className={`cursor-pointer service hover:text-black hover:bg-[#D2FE67] active:text-[#00000099] active:bg-[#DDFE8D] transition-colors flex w-[220px] h-[220px] rounded-[100%] justify-center items-center border-[0.5px] border-white text-center underline uppercase font-medium text-h9 leading-[15px] px-[20px]`}></input>
                                        <input id="serv_6" name="service" type="radio" checked={formData.service === 'Брендинг'} value='Брендинг' onChange={handleChange} className={`cursor-pointer service hover:text-black hover:bg-[#D2FE67] active:text-[#00000099] active:bg-[#DDFE8D] transition-colors flex w-[220px] h-[220px] rounded-[100%] justify-center items-center border-[0.5px] border-white text-center underline uppercase font-medium text-h9 leading-[15px] px-[20px]`}></input>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">02</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase flex flex-col ">
                                        Чем Занимается
                                        <span className="flex gap-x-[88px] ml-[90px]">Ваша<span>компания?</span></span>
                                    </label>
                                    <input onChange={handleChange} name="kind" type="text" placeholder="Строительство, продажа товаров, услуги..." className="inputt border-b-[1px] border-[#FFFFFF33] outline-none w-full bg-transparent pb-[15px] text-[30px] leading-[36px] mt-[60px]" />
                                </div>
                            </div>
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">03</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase flex flex-col mb-[60px]">
                                        <span className="flex gap-x-[129px]">Какая <span>цель</span></span>
                                        <span className="ml-[489px]">сайта?</span>
                                    </label>
                                    <ul className="flex gap-x-[69px] desk_text font-normal">
                                        <li className="flex flex-col gap-y-[15px]">
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} value='Привлечение новой аудитории' name="goal" type="checkbox" className="checkbox-input" id='check_1'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="check_1">Привлечение новой аудитории</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} value='Увеличение конверсии' name="goal" type="checkbox" className="checkbox-input" id='check_2'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="check_2">Увеличение конверсии</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} value='Увеличение продаж' name="goal" type="checkbox" className="checkbox-input" id='check_3'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="check_3">Увеличение продаж</label>
                                            </div>
                                        </li>
                                        <li className="flex flex-col gap-y-[15px]">
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} value='Повышение имиджа' name="goal" type="checkbox" className="checkbox-input" id='check_4'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="check_4">Повышение имиджа</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} value='Информирование пользователей' name="goal" type="checkbox" className="checkbox-input" id='check_5'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="check_5">Информирование пользователей</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} value='Увеличение вовлеченности' name="goal" type="checkbox" className="checkbox-input" id='check_6'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="check_6">Увеличение вовлеченности</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">04</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase">
                                        <span className="flex gap-x-[123px]">Какие<span>страницы</span></span>
                                        <span className="flex gap-x-[70px]">вы<span>хотите</span><span>видеть?</span></span>
                                    </label>
                                    <p className="font-normal mt-[30px] mb-[60px] leading-h7 tracking-[-1px] text-[#FFFFFF66]">Если вы не знаете, можете пропустить, вы вам поможем определиться в процессе работы</p>
                                    <form action="">
                                        <input onChange={handleChange} name="pages" type="text" placeholder="Блог, каталог, о компании..." className="inputt border-b-[1px] border-[#FFFFFF33] outline-none w-full bg-transparent pb-[15px] text-[30px] leading-[36px]" />
                                    </form>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">05</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase">
                                        <span className="flex gap-x-[95px]">Какой<span>функционал</span></span>
                                        <span className="ml-[305px]">нужен?</span>
                                    </label>
                                    <ul className="flex gap-x-[155px] desk_text font-normal mt-[60px]">
                                        <li className="flex flex-col gap-y-[15px]">
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_1'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_1">Форма для заявок</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_2'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_2">Квиз</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_3'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_3">Корзина</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_4'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_4">Платежная система</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_5'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_5">Фильтрация</label>
                                            </div>
                                        </li>
                                        <li className="flex flex-col gap-y-[15px]">
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_6'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_6">Личный кабинет</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_7'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_7">Комментарии</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_8'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_8">Поиск</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="functional" type="checkbox" className="checkbox-input" id='func_9'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="func_9">Не знаю, нужна помощь</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">06</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase">
                                        <span className="flex gap-x-[95px]">Какой<span>допустимый</span></span>
                                        <span className="ml-[151px]">бюджет?</span>
                                    </label>
                                    <ul className="flex gap-x-[69px] desk_text font-normal mt-[60px]">
                                        <li className="flex flex-col gap-y-[15px]">
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={handleChange} checked={formData.budget === '100 тыс. ₽'} value='100 тыс. ₽' type="radio" name="budget" className="radio-input" id='ratio_1'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="ratio_1">&lt;100 тыс. ₽</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={handleChange} checked={formData.budget === '100 - 500 тыс. ₽'} value='100 - 500 тыс. ₽' type="radio" name="budget" className="radio-input" id='ratio_2'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="ratio_2">100 - 500 тыс. ₽</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={handleChange} checked={formData.budget === '500 тыс. - 1млн. ₽'} value='500 тыс. - 1млн. ₽' type="radio" name="budget" className="radio-input" id='ratio_3'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="ratio_3">500 тыс. - 1млн. ₽</label>
                                            </div>
                                        </li>
                                        <li className="flex flex-col gap-y-[15px]">
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={handleChange} checked={formData.budget === '1 - 3 млн. ₽'} value='1 - 3 млн. ₽' type="radio" name="budget" className="radio-input" id='ratio_4'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="ratio_4">1 - 3 млн. ₽</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={handleChange} checked={formData.budget === '3 млн. ₽'} value='3 млн. ₽' type="radio" name="budget" className="radio-input" id='ratio_5'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="ratio_5">&gt;3 млн. ₽</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={handleChange} checked={formData.budget === 'Не знаю, но ваши цены меня устраивают'} value='Не знаю, но ваши цены меня устраивают' type="radio" name="budget" className="radio-input" id='ratio_6'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="ratio_6">Не знаю, но ваши цены меня устраивают</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">07</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase">
                                        <span className="flex gap-x-[123px]"><span>Какие </span>материалы </span>
                                        <span><span className="mr-[39px]">для</span>сайта<span className="ml-[185px]">есть?</span></span>
                                    </label>
                                    <ul className="flex gap-x-[155px] desk_text font-normal mt-[60px]">
                                        <li className="flex flex-col gap-y-[15px]">
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_1'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_1">Логотип</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_2'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_2">Фирменный стиль</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_3'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_3">Наброски текста</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_4'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_4">Текст для всех страниц</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_5'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_5">Сайт</label>
                                            </div>
                                        </li>
                                        <li className="flex flex-col gap-y-[15px]">
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_6'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_6">Презентации</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_7'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_7">Фото / Видео</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_8'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_8">Прототип сайта</label>
                                            </div>
                                            <div className="flex gap-x-[10px] items-center hover:text-[#D2FE67] active:text-[#DDFE8D] checked:text-[#D2FE67] transition-colors">
                                                <input onChange={checkboxHandleChange} name="material" type="checkbox" className="checkbox-input" id='material_9'/>
                                                <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="material_9">Ничего, материалы в плохом качестве</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">08</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase">
                                        <span className="flex gap-x-[69px]">Ссылка<span>на </span></span>
                                        <span className="ml-[160px] flex gap-x-[94px]">текущий<span>сайт</span></span>
                                    </label>
                                    <p className="font-normal  mt-[30px] mb-[60px] leading-h7 tracking-[-1px] text-[#FFFFFF66]">Если нет сайта, оставьте поле пустым</p>
                                    <input onChange={handleChange} name="url" type="url" placeholder="Ссылка..." className="inputt border-b-[1px] border-[#FFFFFF33] outline-none w-full bg-transparent pb-[15px] text-[30px] leading-[36px]" />
                                </div>
                            </div>
                            <div className="border-b-[1px] border-[#FFFFFF33] pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">09</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase">
                                        <span className="flex gap-x-[289px]">Есть<span>примеры</span></span>
                                        <span className="flex gap-x-[143px]">желаемого<span>Стиля</span></span>
                                        <span className="ml-[330px]">сайта?</span>
                                    </label>
                                    <ul className="flex gap-x-[155px]  mt-[60px]">
                                        <li className="flex gap-x-[10px] items-center">
                                            <input onChange={handleChange} type="radio" checked={formData.yes_no === 'Да, есть референсы'} value='Да, есть референсы' name="yes_no" className="radio-input" id='yes_no_1'/>
                                            <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="yes_no_1">Да, есть референсы</label>
                                        </li>
                                        <li className="flex gap-x-[10px] items-center">
                                            <input onChange={handleChange} type="radio" checked={formData.yes_no === 'Нет, нужна помощь'} value='Нет, нужна помощь' name="yes_no" className="radio-input" id='yes_no_2'/>
                                            <label className="hover:text-[#D2FE67] active:text-[#DDFE8D] focus:text-[#D2FE67] transition-colors" htmlFor="yes_no_2">Нет, нужна помощь</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pb-[80px] flex justify-between">
                                <h2 className="text-h4 leading-h4 font-normal tracking-[-2px]">10</h2>
                                <div className="w-[720px]">
                                    <label className="text-h4 leading-h4 font-medium tracking-[-2px] uppercase flex gap-x-[225px] mb-[60px]">Ваши<span>контакты</span></label>
                                    <div className="w-full flex flex-col gap-y-[40px]">
                                        <input onChange={handleChange} type="text" name="username" placeholder="Имя*" className="inputt border-b-[1px] border-[#FFFFFF33] text-[30px] leading-[36px] tracking-[-1px] pb-[15px] bg-transparent text-dec outline-none" />
                                        <input onChange={handleChange} type="text" name="marketName" placeholder="Название компании" className="inputt border-b-[1px] border-[#FFFFFF33] text-[30px] leading-[36px] tracking-[-1px] pb-[15px] bg-transparent text-dec outline-none" />
                                        <input onChange={handleChange} type="tel" name="phone" placeholder="Телефон*" className="inputt border-b-[1px] border-[#FFFFFF33] text-[30px] leading-[36px] tracking-[-1px] pb-[15px] bg-transparent text-dec outline-none" />
                                        <button type="submit" className="py-[21px] border-[0.5px] border-[#FFFFFF] rounded-[100px] uppercase font-normal leading-[18px]">Отправить</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        </>
    )
}
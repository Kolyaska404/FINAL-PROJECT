import { Link } from 'react-router-dom'
import '/src/App.css'

export function Cards() {
    return (
        <section className="pb-[300px] flex flex-col items-center uppercase">
            <section className='marsel_bg w-[1440px] h-[870px] pt-[80px] flex flex-col items-center uppercase'>
                <Link to='/Marsel' className='flex flex-col items-center overflow-hidden rounded-[10px] border-[1px] border-white font-medium'>
                    <div className='flex items-center justify-between px-[17px] py-[10px] bg-black text-white w-full text-h8 leading-h8'>
                        <h3>Брендинг, Дизайн сайта</h3>
                        <h3>Производство мебели</h3>
                    </div>
                    <img src="/public/main page/marsel_card.png" alt="" />
                    <div className='flex items-center justify-between px-[17px] py-[10px] bg-black text-white w-full text-h8 leading-h8'>
                        <h2 className='text-h6 leading-h6'>Marsel</h2>
                        <h3>2021</h3>
                    </div>
                </Link>
            </section>
            <Link to='/Homyes' className='homyes_bg w-[1440px] h-[870px] flex flex-col items-center uppercase justify-center'>
                <div className='flex flex-col items-center overflow-hidden rounded-[10px] border-[1px] border-white font-medium'>
                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                        <h3 className=''>Брендинг</h3>
                        <h3 className=''>Строительство</h3>
                    </div>
                    <img src="/public/main page/homyes_card.png" alt="" />
                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 justify-between'>
                        <h2 className=''>Homyes</h2>
                        <h3 className=''>2021</h3>
                    </div>
                </div>
            </Link>
            <Link to='/Starkwood' className='starkwood_bg w-[1440px] h-[870px] flex flex-col items-center uppercase justify-center'>
                <div className='flex flex-col items-center overflow-hidden rounded-[10px] border-[1px] border-white font-medium'>
                    <div className='flex items-center justify-between py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8'>
                        <h3>Многостраничный сайт</h3>
                        <h3>Строительство</h3>
                    </div>
                    <img src="/public/main page/starkwood_card.png" alt="" />
                    <div className='flex items-center justify-between py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8'>
                        <h2 className='text-h6 leading-h6'>Starkwood</h2>
                        <h3>2021</h3>
                    </div>
                </div>
            </Link>
            <Link to='/Security' className='security_bg w-[1440px] h-[870px] flex flex-col items-center uppercase justify-center'>
                <div className='flex flex-col items-center overflow-hidden rounded-[10px] border-[1px] border-white font-medium'>
                    <div className='flex items-center justify-between py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8'>
                        <h3>Многостраничный сайт, платформа</h3>
                        <h3>Финансы</h3>
                    </div>
                    <img src="/public/main page/secure_card.png" alt="" />
                    <div className='flex items-center justify-between py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8'>
                        <h2 className='text-h6 leading-h6'>Global Secure Invest</h2>
                        <h3>2021</h3>
                    </div>
                </div>
            </Link>
            <Link to='/portfolio' className='bg-black w-[1440px] h-[870px] flex flex-col items-center uppercase justify-center'>
                <div className='flex flex-col items-center overflow-hidden rounded-[10px] border-[1px] border-white font-medium'>
                    <div className='flex items-center justify-between py-[341px] px-[191px] bg-black text-white w-full text-h8 leading-h8'>
                        <p className='flex items-center gap-x-[10px]'>все работы (11) <img src="public\main page\icons\wh_arrow.svg" alt="" /> </p>
                    </div>
                </div>
            </Link>
            <section className=''></section>
        </section>
    )
}
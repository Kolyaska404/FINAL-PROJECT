import { Run_stroke_7 } from './main_page/run_stroke';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css/pagination';
import '/src/App.css'
import 'swiper/css';

export function Swiperr() {
    return (
        <>
            <Run_stroke_7/>
            <div className="relative flex flex-col w-full">
                <section className='overflow-hidden mb-[150px] mx-auto'>
                    <Swiper slidesPerView={3}
                            freeMode={true}
                            modules={[FreeMode]}
                            className="mySwiper"
                        >
                        <SwiperSlide>
                            <Link to="/Starkwood" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px] overflow-hidden'>
                                <div className='flex flex-col items-center font-medium'>
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                                        <h3 className=''>Многостраничный сайт</h3>
                                        <h3 className=''>Строительство домов</h3>
                                    </div>
                                    <img className="h-[580px]" src="public\marsel\starkwood.png" alt="" />
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 justify-between'>
                                        <h2 className=''>Starkwood</h2>
                                        <h3 className=''>2021</h3>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/Marsel" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px] overflow-hidden'>
                                <div className='flex flex-col items-center font-medium'>
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                                        <h3 className=''>Брендинг, Дизайн сайта</h3>
                                        <h3 className=''>Производство мебели</h3>
                                    </div>
                                    <img className="h-[580px]" src="public\marsel\marsel.png" alt="" />
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 justify-between'>
                                        <h2 className=''>Marsel</h2>
                                        <h3 className=''>2021</h3>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/Security" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px] overflow-hidden'>
                                <div className='flex flex-col items-center font-medium'>
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                                        <h3 className=''>Многостраничный сайт, платформа</h3>
                                        <h3 className=''>Финансы</h3>
                                    </div>
                                    <img className="h-[580px]" src="public\marsel\security.png" alt="" />
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 justify-between border-t-[1px] border-white'>
                                        <h2 className=''>Global Secure Invest</h2>
                                        <h3 className=''>2021</h3>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/Homyes" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px] overflow-hidden'>
                                <div className='flex flex-col items-center font-medium'>
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                                        <h3 className=''>Брендинг</h3>
                                        <h3 className=''>Строительство</h3>
                                    </div>
                                    <img className="h-[580px]" src="public\marsel\homyes.png" alt="" />
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 justify-between border-t-[1px] border-white'>
                                        <h2 className=''>Homyes</h2>
                                        <h3 className=''>2021</h3>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/portfolio" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px]'>
                                <h4 className="flex gap-x-[10px] items-center">все работы (11)<img src="public\marsel\arrow.svg" alt="" /></h4>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </div>
        </>
    )
}
import { Run_stroke_7 } from './main_page/run_stroke';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import '/src/App.css'

export function Swiperr() {
    return (
        <>
            <Run_stroke_7/>
            <div className="relative mx-auto flex flex-col w-full px-[80px]">
                <section className='w-[1560px] overflow-hidden mb-[150px] mx-auto'>
                    <Swiper slidesPerView={3}
                            freeMode={true}
                            modules={[FreeMode]}
                            className="mySwiper"
                        >
                        <SwiperSlide>
                            <a href="#" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px] overflow-hidden'>
                                <div className='flex flex-col items-center font-medium'>
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                                        <h3 className=''>Брендинг</h3>
                                        <h3 className=''>Строительство</h3>
                                    </div>
                                    <img className="h-[580px]" src="public\marsel\starkwood.png" alt="" />
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 justify-between'>
                                        <h2 className=''>Homyes</h2>
                                        <h3 className=''>2021</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px] overflow-hidden'>
                                <div className='flex flex-col items-center font-medium'>
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                                        <h3 className=''>Брендинг</h3>
                                        <h3 className=''>Строительство</h3>
                                    </div>
                                    <img className="h-[580px]" src="public\marsel\marsel.png" alt="" />
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 justify-between'>
                                        <h2 className=''>Homyes</h2>
                                        <h3 className=''>2021</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px] overflow-hidden'>
                                <div className='flex flex-col items-center font-medium'>
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 border-b-[1px] border-white relative justify-between'>
                                        <h3 className=''>Брендинг</h3>
                                        <h3 className=''>Строительство</h3>
                                    </div>
                                    <img className="h-[580px]" src="public\marsel\security.png" alt="" />
                                    <div className='flex items-center py-[10px] px-[17px] bg-black text-white w-full text-h8 leading-h8 justify-between border-t-[1px] border-white'>
                                        <h2 className=''>Homyes</h2>
                                        <h3 className=''>2021</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px] overflow-hidden'>
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
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className='h-[660px] w-[500px] flex flex-col items-center uppercase justify-center border-black border-[1px] rounded-[10px]'>
                                <h4 className="flex gap-x-[10px] items-center">все работы (11)<img src="public\marsel\arrow.svg" alt="" /></h4>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </div>
        </>
    )
}
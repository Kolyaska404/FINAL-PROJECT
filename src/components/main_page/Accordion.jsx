import { useState } from "react"
import '/src/App.css'


export function Accrdion({ id, title, price, days, text }) {
    const [accord, setAccord] = useState(false)
    if (accord == false) {
        return (
            <li key={id} className="border-[1px] border-white rounded-[10px] overflow-hidden animated">
                <div className="py-[25px] px-[20px]">
                    <h2 className="flex space-x-5 text-h7 leading-h7 uppercase mb-[20px] whitespace-nowrap relative">{title}<p className="absolute right-0 flex gap-x-[53px] text-[#FFFFFF66]">{price}<span>{days}</span></p></h2>
                    <p className="text-h8 leading-h8 text-[#FFFFFFB2]">{text}</p>
                </div>
                <button onClick={() => (setAccord(!accord), key = id)} className="btn_animated flex items-center justify-center gap-x-[10px] uppercase w-full py-[21px] border-t-[1px] border-white text-h7 leading-h7">Этапы работ <img className="w-[15px] h-[15px]" src="/public/main page/icons/+_wh.svg"/></button>
            </li>
            )
        } else {
        return (
            <li key={id} className="border-[1px] border-[#00000033] rounded-[10px] overflow-hidden bg-white text-black animated">
                <div className="py-[25px] px-[20px]">
                    <h2 className="flex space-x-5 text-h7 leading-h7 uppercase mb-[20px] whitespace-nowrap relative">{title}<p className="absolute right-0 flex gap-x-[53px] text-[#00000066]">{price}<span>{days}</span></p></h2>
                    <p className="text-h8 leading-h8 text-[#000000B2]">{text}</p>
                </div>
                <button onClick={() => (setAccord(!accord), key = id)} className="btn_animated flex items-center justify-center gap-x-[10px] uppercase w-full py-[21px] border-t-[1px] border-[#00000033] text-h7 leading-h7">Этапы работ <img className="w-[15px] h-[15px]" src="public/main page/icons/x.svg"/></button>
            </li>
            )
    }
    }

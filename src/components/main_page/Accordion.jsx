import { useState } from "react"
import '/src/App.css'


export function Accrdion({ id, title, price, days, text }) {
    const [accord, setAccord] = useState(false)
    return (
        <li key={id} typeof="radio" className={`border-[1px] border-white ${accord ? 'bg-white' : 'bg-black'} rounded-[10px] overflow-hidden animated`}>
            <div className="py-[25px] px-[20px]">
                <h2 className={`flex space-x-5 text-h7 leading-h7 ${accord ? 'text-black' : 'text-white'} uppercase mb-[20px] whitespace-nowrap relative`}>{title}<p className={`absolute right-0 flex gap-x-[53px] ${accord ? 'text-[#00000066]' : 'text-[#FFFFFF66]'} `}>{price}<span>{days}</span></p></h2>
                <p className={`text-h8 leading-h8 ${accord ? 'text-black' : 'text-[#FFFFFFB2]'}`}>{text}</p>
            </div>
            <button onClick={() => (setAccord(!accord))} className={`btn_animated flex items-center justify-center gap-x-[10px] uppercase w-full py-[21px] border-t-[1px] ${accord ? 'border-[#00000033] text-black' : 'border-white text-white' } text-h7 leading-h7`}>Этапы работ <img className="w-[15px] h-[15px]" src={accord ? 'public/main page/icons/x.svg' : 'public/main page/icons/+_wh.svg'}/></button>
        </li>
    )
}

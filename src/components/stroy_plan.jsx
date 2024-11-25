import '/src/App.css'

export function Block({title1, title2, num}) {
    return (
        <div className="rounded-[7px] border-black border-[1px] text-center uppercase manrope font-medium flex flex-col justify-between h-[170px] w-[170px] py-[15px]">
            <p>
                {title1} 
                <br />
                {title2}
            </p>
            <p>{num}</p>
        </div>
    )
}
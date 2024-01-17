import "../component/border.css"
import {Link} from "react-router-dom";

const border = () => {
    return (
        <div>
            <div className={`absolute z-10 bottom-16 right-10 w-20 rotate-180`}>
                <div className={`h-0.5 backdrop-invert wbr`}></div>
            </div>
            <div className={`absolute z-10 bottom-10 right-16 h-52 rotate-180`}>
                <div className={`w-1 backdrop-invert hbr`}></div>
            </div>

            <div className={`absolute z-10 top-16 left-10 w-48`}>
                <div className={`h-0.5 backdrop-invert wtl `}></div>
            </div>
            <div className={`absolute z-10 top-10 left-16 h-32`}>
                <div className={`w-1 backdrop-invert htl`}></div>
            </div>
        </div>
    )
}

export default border;

export const BorderBack = () => {
    return (
        <div>
            <div className={`absolute z-10 top-16 right-10 w-48 rotate-180`}>
                <div className={`h-0.5 backdrop-invert wbr`}></div>
            </div>
            <div className={`absolute z-10 bottom-10 left-16 h-32 rotate-180`}>
                <div className={`w-0.5 backdrop-invert hbr`}></div>
            </div>

            <div className={`absolute z-10 bottom-16 left-10 w-36`}>
                <div className={`h-0.5 backdrop-invert wtl `}></div>
            </div>
            <div className={`absolute z-10 top-10 right-16 h-36`}>
                <div className={`w-0.5 backdrop-invert htl`}></div>
            </div>
            <Link to={`/`} className={`absolute top-14 left-16 hover:text-[#cc326a] transition-all duration-500
            hover:-translate-x-2 flex items-center cursor-pointer
             text-stone-600`}>
                <svg className={`w-7 h-7`} fill="currentColor" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10"
                          stroke-width="48" d="M244 400L100 256l144-144"></path>
                    <path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10"
                          stroke-width="48" d="M120 256h292"></path>
                </svg>
                <div className={`ml-2 font-mono text-lg`}>back home</div>
            </Link>
        </div>
    )
}
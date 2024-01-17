
import {Link} from "react-router-dom";

const AboutView = () => {
    return (
        <div className={`w-screen h-screen relative bg-white bg-opacity-50 backdrop-blur-md`}>
            <iframe src={`https://api.chyan.moe/redoc`} className={`w-screen h-screen`} frameBorder={0}/>
            <Link to={`/`} className={`absolute bottom-14 left-16 hover:text-[#cc326a] transition-all duration-500
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

    export default AboutView;
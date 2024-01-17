import Border from "../component/border.tsx";
import MioLogo from "../assets/icon.png"
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {GlobalContext} from "../store";
import {useTranslation} from "react-i18next";

const IndexView = () => {

    const { t } = useTranslation();

    const [ version, setVersion ] = useState("-");
    const { setShowTerminal } = useContext(GlobalContext);


    useEffect(() => {
        axios.get("/openapi.json")
            .then(response => {
                const ApiData = response.data;
                setVersion(ApiData["info"]["version"])
            })
    }, []);


    useEffect(() => {
            const MainView = document.getElementById("root");
            const ButtonView = document.getElementById("button");


            const handleScroll = (event: WheelEvent) => {
                if ((MainView?.scrollTop || document.body.clientHeight) <= document.body.clientHeight && event.deltaY > 0) {
                    scroll();
                }
            }

            function scroll() {
                MainView?.scrollTo({
                    top: document.body.clientHeight,
                    behavior: "smooth"
                });
            }

            MainView?.addEventListener("wheel", handleScroll);
            ButtonView?.addEventListener("click", scroll);

            return () => {
                MainView?.removeEventListener("wheel", handleScroll);
                ButtonView?.removeEventListener("click", scroll);
            };
        },
        []);

    return (
        <div id={"main"} className={`w-screen flex flex-col justify-center items-center bg-white bg-opacity-50 backdrop-blur-md`}>

            <div className={`flex flex-col justify-center items-center init w-full h-screen select-none`}>
                <div className={`flex items-center h-14 relative`}>
                    <img src={MioLogo} alt={`Mio Logo`} className={`h-full`}/>
                    <div className={`ml-5 flex flex-col h-full justify-center sm:justify-between items-end`}>
                        <div className={`text-3xl font-mono hidden sm:flex`}>Miourasaki's Public API</div>
                        <div className={`text-3xl font-mono flex sm:hidden`}>Mio's PublicAPI</div>
                        <div className={`tracking-[0.2rem] text-sm hidden sm:flex font-[gh-mona]`}>{t('sub')}
                        </div>
                    </div>
                    <span className={`absolute px-1.5 py-0.5 -top-2.5 -right-8 bg-white bg-opacity-70 backdrop-blur-3xl border rounded-2xl
                text-sm text-pink-800 font-mono font-bold`}>{version}</span>
                </div>
                <div className={`flex items-center justify-between gap-8 mt-20 font-[gh-mona]`}>

                    <Link to={"/assets"} className={`w-28 h-9 border-[#7f1f42] border flex justify-center items-center
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-[#7f1f42] text-[#7f1f42] focus-visible:bg-[#7f1f42] focus-visible:text-white
                transition-all duration-500 hover:bg-[#7f1f42] hover:text-white`}>{t('data.link.document')}
                    </Link>
                    <button onClick={() => {
                        setShowTerminal(true)
                    }} className={`w-28 h-9 border-[#7f1f42] border flex justify-center items-center
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-[#7f1f42] text-[#7f1f42] focus-visible:bg-[#7f1f42] focus-visible:text-white
                transition-all duration-500 hover:bg-[#7f1f42] hover:text-white`}>{t('data.link.terminal')}
                    </button>

                </div>

                <div id={"button"} className={`absolute bottom-12 text-xl float opacity-10 hover:opacity-100 transition-all duration-500`}>
                    ﹀
                </div>
            </div>

            <div className={`w-full h-screen flex justify-center items-center font-mono`}>
                <div className={`flex flex-col items-start`}>
                    <div className={`mr-4`}>curl -X 'GET' \</div>
                    <div className={`ml-4`}> 'https://api.chyan.moe/openapi.json' \</div>
                    <div className={`ml-4`}> -H 'accept: application/json'</div>
                </div>
            </div>


            <Border/>
        </div>
    )
}

export default IndexView;
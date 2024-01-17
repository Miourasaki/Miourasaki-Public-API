import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../store";
import {ReactTerminal} from "react-terminal";
import i18n from "../i18n";

const Terminal = () => {

    const { showTerminal, setShowTerminal} = useContext(GlobalContext);
    const commands = {
        help: "www",
        lang: (local:string) => {
            i18n.changeLanguage(local);
            return `change language to ${i18n.t('lang')} (✿◡‿◡)`
        }
    };

    const [ sMove, setSMove] = useState(false);
    const [ terminalStyle, setTerminalStyle] = useState({ height: `340px` });

    const body = document.body;
    function EnableMove() {
        setSMove(true);
        body.classList.add("cursor-ns-resize")
        body.classList.add("select-none")
    }
    function DisableMove() {
        setSMove(false);
        body.classList.remove("cursor-ns-resize")
        body.classList.remove("select-none")
    }

    useEffect(() => {

        function MouseMove(event: MouseEvent) {
            if (sMove) {
                const newHeight = event.clientY;
                if (newHeight <= 1) {
                    setShowTerminal(false);
                    DisableMove();
                    setTerminalStyle({ height: `340px` });
                    return;
                }

                setTerminalStyle({ height: `${newHeight}px` });
            }
        }


        body.addEventListener('mouseup',DisableMove)
        body.addEventListener('mouseleave',DisableMove)

        body.addEventListener('mousemove',MouseMove)

        return ()=> {
            body.removeEventListener('mouseup',DisableMove)
            body.removeEventListener('mouseleave',DisableMove)

            body.removeEventListener('mousemove',MouseMove)
        }
    }, [sMove,body]);


    return (
        <div style={terminalStyle} onMouseUp={DisableMove} className={`absolute top-0 ${showTerminal ? '' : '-translate-y-full'} transition-transform duration-1000
        w-screen {bg-stone-800} bg-[#2685c2] shadow text-white`}>


            <div className={`w-full h-full absolute top-0 left-0 overt  overflow-auto
            bg-[#272b36]`}>
                <ReactTerminal
                    commands={commands}
                    themes={{
                        "default": {
                            themeBGColor: "#272B36",
                            themeToolbarColor: "#272b36",
                            themeColor: "#FFFEFC",
                            themePromptColor: "#fff"
                        }
                    }}
                    theme="default"
                    showControlBar={false}
                    // welcomeMessage={`Hello World!! `}
                    errorMessage={`NotFound ᗜˬᗜ baka!`}
                    prompt={"miourasaki $"}
                />
            </div>

            <span onMouseDown={EnableMove} onMouseDownCapture={DisableMove} onMouseUp={DisableMove} className={`absolute w-screen bottom-0 left-0 shadow-xl h-2
            ${sMove?'border-b-cyan-600':'border-b-[#ffffff00]'} border-b-2 hover:border-b-cyan-600 cursor-ns-resize`}></span>

            <span onClick={() => {
                setShowTerminal(!showTerminal)
            }} className={`w-20 h-3.5 absolute -bottom-3.5 left-1/2 
            -translate-x-1/2 rounded-b-md ${showTerminal? '':'opacity-5'} hover:opacity-100 transition-all duration-700
            flex justify-center items-center text-sm text-[#7f1f42] 
            bg-white bg-opacity-50 backdrop-blur-sm border-t-0 border border-[#7f1f42]`}>
                <svg className={`w-5 h-5 ${showTerminal ? '-rotate-180' : ''} transition-all duration-700`}
                     viewBox="0 0 32 32"><path
                    d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" fill="currentColor"></path></svg>
            </span>
        </div>);
}

export default Terminal;
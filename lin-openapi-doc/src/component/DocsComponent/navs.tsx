import {Link} from "react-router-dom";
import MioLogo from "../../assets/icon.png";
import {useEffect, useState} from "react";

const Navs = () => {
    const [menu, setMenu] = useState(false);


    const [ mWidth, setMWidth] = useState(240);
    const [ sMove, setSMove] = useState(false);
    const [ menuStyle, setMenuStyle] = useState({ width: `${mWidth}px` });

    const body = document.body;
    function EnableMove() {
        setSMove(true);
        body.classList.add("cursor-ew-resize")
        body.classList.add("select-none")
    }

    function DisableMove() {
        setSMove(false);
        body.classList.remove("cursor-ew-resize")
        body.classList.remove("select-none")
    }

    
    const [ BlightStyle, setBlightStyle ] = useState({ top: `0px`,left:`0px` })

    useEffect(() => {


        function MouseMove(event: MouseEvent) {
            let newWidth = event.clientX;
            let newHeight = event.clientY;

            if (newHeight >= document.body.clientHeight - 40){
                newHeight = document.body.clientHeight - 40;
            }

            setBlightStyle({ top: `${newHeight}px`,left:`${newWidth}px` })


            if (sMove) {
                if (newWidth <= 240) {
                    newWidth = 240;
                }

                setMWidth(newWidth);
                setMenuStyle({ width: `${newWidth}px` });
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
    }, [sMove,body,EnableMove,DisableMove]);

    return (
        <>
            <div style={menuStyle} onMouseUp={DisableMove} className={` h-full border-r bg-white bg-opacity-80 backdrop-blur-2xl
                    flex flex-col justify-start items-start transition-transform duration-500  ${menu ? '' : '-translate-x-full'}
                    absolute md:relative md:translate-x-0 
                    overflow-y-auto overflow-x-hidden`}>
                <Link to={"/"} className={`w-full h-20 border-b drop-shadow-sm px-5 py-5 flex bg-white
                        justify-center items-center select-none z-10`}>
                    <img src={MioLogo} alt="MioLogo" className={`h-full`}/>
                    <div className={`ml-3 text-lg font-mono`}>Mio's PublicAPI</div>
                </Link>


                <div className={`flex flex-col w-full justify-between flex-grow px-0.5`}>
                    <div className={`flex flex-col w-full gap-0.5`}>
                        <Link to={"/assets/loli-value"} className={`w-full h-14 bg-white z-10 flex items-center justify-between
                        px-6 bg-opacity-95
                    hover:bg-opacity-70 hover:bg-pink-50 backdrop-blur-lg`}>
                            <div className={`flex items-center`}>
                                <svg className={`w-6 h-6 text-orange-400`}
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M22 11h-4.17l3.24-3.24l-1.41-1.42L15 11h-2V9l4.66-4.66l-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93L6.34 4.34L11 9v2H9L4.34 6.34L2.93 7.76L6.17 11H2v2h4.17l-3.24 3.24l1.41 1.42L9 13h2v2l-4.66 4.66l1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24l1.42-1.41L13 15v-2h2l4.66 4.66l1.41-1.42L17.83 13H22v-2z"
                                        fill="currentColor"></path>
                                </svg>
                                <div className={`font-[gh-mona] text-base ml-2`}>loli - value</div>
                            </div>
                            <div>
                                <svg className={`w-6 h-6 `}
                                     viewBox="0 0 24 24">
                                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                                          fill="currentColor"></path>
                                </svg>
                            </div>
                        </Link>
                        <Link to={"/assets/ip-location"} className={`w-full h-14 bg-white z-10 flex items-center justify-between
                        px-6 bg-opacity-95
                    hover:bg-opacity-70 hover:bg-pink-50 backdrop-blur-lg`}>
                            <div className={`flex items-center`}>
                                <svg className={`w-6 h-6 text-blue-400`}
                                     viewBox="0 0 20 20">
                                    <g fill="none">
                                        <path
                                            d="M10 18c.689 0 1.357-.087 1.995-.25a8.765 8.765 0 0 1-.932-1.243c-.358.335-.723.493-1.063.493c-.657 0-1.407-.59-2.022-1.908A9.254 9.254 0 0 1 7.42 13.5h2.844c.024-.344.084-.679.176-1H7.206A14.87 14.87 0 0 1 7 10c0-.883.073-1.725.206-2.5h5.588c.105.613.173 1.269.197 1.954a4.63 4.63 0 0 1 .986-.341a15.58 15.58 0 0 0-.17-1.613h2.733c.234.61.384 1.26.438 1.939c.369.173.712.392 1.021.651L18 10a8 8 0 1 0-8 8zm0-15c.657 0 1.407.59 2.022 1.908c.217.466.406 1.002.559 1.592H7.419c.153-.59.342-1.126.56-1.592C8.592 3.59 9.342 3 10 3zM7.072 4.485A10.502 10.502 0 0 0 6.389 6.5H3.936a7.022 7.022 0 0 1 3.778-3.118c-.241.33-.456.704-.642 1.103zM6.192 7.5A15.97 15.97 0 0 0 6 10c0 .87.067 1.712.193 2.5H3.46A6.984 6.984 0 0 1 3 10c0-.88.163-1.724.46-2.5h2.733zm.197 6c.176.743.407 1.422.683 2.015c.186.399.401.773.642 1.103A7.022 7.022 0 0 1 3.936 13.5H6.39zm5.897-10.118A7.021 7.021 0 0 1 16.064 6.5H13.61a10.504 10.504 0 0 0-.683-2.015a6.635 6.635 0 0 0-.642-1.103zM15 10c2.071 0 3.75 1.727 3.75 3.857c0 1.597-1.183 3.27-3.5 5.057a.407.407 0 0 1-.5 0c-2.317-1.787-3.5-3.46-3.5-5.057C11.25 11.727 12.929 10 15 10zm0 2.571c-.69 0-1.25.576-1.25 1.286c0 .71.56 1.286 1.25 1.286s1.25-.576 1.25-1.286c0-.71-.56-1.286-1.25-1.286z"
                                            fill="currentColor"></path>
                                    </g>
                                </svg>
                                <div className={`font-[gh-mona] text-base ml-2`}>ip - location</div>
                            </div>
                            <div>
                                <svg className={`w-6 h-6 `}
                                     viewBox="0 0 24 24">
                                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                                          fill="currentColor"></path>
                                </svg>

                            </div>
                        </Link>

                    </div>
                    <div className={`flex flex-col flex-grow w-full mt-0.5
                justify-between`}>
                        <div className={` bg-white flex-grow`}>a</div>

                        <Link to={"//api.chyan.moe/openapi.json"} className={`mt-0.5 border-t bg-white flex justify-center font-mono w-full py-0.5
                    text-sm hover:bg-opacity-40 hover:bg-pink-100 backdrop-blur-lg`}>/openapi.json</Link>
                    </div>
                </div>


                <span onMouseDown={EnableMove} onMouseDownCapture={DisableMove} onMouseUp={DisableMove} className={`absolute h-full top-0 -right-0 z-10 shadow-xl w-2 
            ${sMove ? 'border-r-cyan-600' : 'border-r-[#ffffff00]'} border-r-2 hover:border-r-cyan-600 cursor-ew-resize`}></span>


                <span style={BlightStyle} className={`fixed w-20 h-20 bg-sky-900 border rounded-full
            shadow-2xl -translate-x-1/2 -translate-y-1/2 blur-3xl -z-10`}></span>
            </div>
            <span onClick={() => {
                setMenu(!menu)
            }} className={` opacity-40 hover:opacity-100 transition-all duration-300
                         md:hidden hover:scale-125
                        fixed w-10 h-10 rounded-full border border-white bg-purple-950 bg-opacity-70
                         bottom-[6rem] right-10 text-white p-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g
                fill="none"><path
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1A1.5 1.5 0 0 1 6 3.5v1A1.5 1.5 0 0 1 4.5 6h-1A1.5 1.5 0 0 1 2 4.5v-1zM3.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM2 9.5A1.5 1.5 0 0 1 3.5 8h1A1.5 1.5 0 0 1 6 9.5v1A1.5 1.5 0 0 1 4.5 12h-1A1.5 1.5 0 0 1 2 10.5v-1zM3.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM2 15.5A1.5 1.5 0 0 1 3.5 14h1A1.5 1.5 0 0 1 6 15.5v1A1.5 1.5 0 0 1 4.5 18h-1A1.5 1.5 0 0 1 2 16.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM8 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                fill="currentColor"></path></g></svg>
        </span>


            <Link to={"/assets"} className={` opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-125
                        fixed w-10 h-10 rounded-full border border-white bg-purple-950 bg-opacity-70
                         bottom-10 right-10 text-white p-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                          fill="currentColor"></path>
                </svg>
            </Link>


        </>
    )
}

export default Navs;
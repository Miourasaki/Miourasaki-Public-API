import {Link} from "react-router-dom";
import {useContext} from "react";
import {GlobalContext} from "../store";
import {TFunction} from "i18next";

interface Props {
    t:TFunction<"translation",undefined>
}
const footer = ({t}:Props) => {


    const footerNavs = [
        {
            href: '/about',
            name: t('data.link.about')
        },
        {
            href: '/support',
            name: t('data.link.support')
        },
        {
            href: '/assets',
            name: t('data.link.document')
        },
        {
            href: '/redoc',
            name: t('data.link.redoc')
        },
        {
            href: '/swagger',
            name: t('data.link.openapi')
        },
    ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { count, todayCount } = useContext(GlobalContext);

    return (

        <footer id="footer" className={` shadow-[#b40202] shadow-2xl cursor-default `}>
            <footer className="text-gray-500 bg-white px-10 py-5 w-full mx-auto shadow-[#b40202] shadow-2xl z-50">
                <div className=" sm:mx-auto sm:text-center mt-3">

                    <Link to={"/"} className="sm:justify-center text-black flex flex-col sm:flex-row sm:items-center mt-4 justify-start gap-5 overflow-hidden w-full">
                        <img alt={`icon`} src="https://chyan.moe/favicon.ico" className="w-12 h-12 rounded rotate-20s" />
                        <div className="font-mono text-3xl">Miourasaki's Public API</div>
                    </Link>
                    <div className="font-mono flex items-center sm:justify-center mt-1">
                        <p className="">少女祈祷中</p> <p className="mx-2">~</p> <span className="rotate text-base">☯</span>

                    </div>
                    <p className="leading-relaxed my-4 text-[15px]">
                        {t('in')}
                    </p>
                </div>

                <ul className="items-center justify-center mt-6 space-y-5 text-base sm:grid sm:space-x-4 sm:space-y-0 sm:mx-20 grid-cols-5 gap-4">
                    {footerNavs.map((item,index) => {
                        return (
                        <li key={index} className="transition-all duration-500 hover:text-gray-800">
                            <Link to={item.href}>
                                    {item.name}
                            </Link>
                        </li>
                        )
                    })}
                {/*            <li v-for="(item,index) in footerNavs" :key="index" className="hover:text-gray-800">*/}
                {/*            <a :href="item.href">*/}
                {/*            {{item.name}}*/}
                {/*        </a>*/}
                {/*</li>*/}
                </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 <a href="https://mio.am/" className="mx-1 hover:text-[#2a2449] cursor-pointer transition-all duration-500">「澪」</a> All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0 mb-2">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-blue-400 group transition-all duration-500">
                            <a href="https://chyan.moe/@mio">
                                <svg className="svg-icon w-7 h-7 text-blue-400 group-hover:text-white transition-all duration-500" viewBox="0 0 20 20"  fill="currentColor">
                                    <path
                                          d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266">
                                    </path>
                                </svg>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-[#f76653] group transition-all duration-500">
                            <a href="javascript:void()">
                                <svg className="svg-icon w-7 h-7 mt-0.5 ml-0.5 text-[#f76653] group-hover:text-white transition-all duration-500"  viewBox="0 0 1024 1024"  fill="currentColor">
                                    <path d="M896 426.666667a256 256 0 1 1-512 0 256 256 0 0 1 512 0z" opacity=".6"></path>
                                    <path d="M128 170.666667h170.666667v682.666666H128V170.666667z"></path>
                                </svg>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-[#5b68f2] group transition-all duration-500">
                            <a href="javascript:void()">
                                <svg className="w-6 h-6 text-[#5b68f2] group-hover:text-white transition-all duration-500" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                </svg>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-[#1f2328] group transition-all duration-500">
                            <a href="https://github.com/Miourasaki">
                                <svg className="svg-icon w-6 h-6 text-[#1f2328] group-hover:text-white transition-all duration-500" viewBox="0 0 16 16"  fill="currentColor">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row items-start sm:justify-between sm:items-center text-sm gap-2">
                {/*// <div className="flex flex-col items-start gap-2">*/}
                <div className="flex items-center">MAINTAINER OF THIS WEBSITE <a href="https://mio.am/" className="ml-2 hover:text-[#2a2449] cursor-pointer transition-all duration-500 flex items-center"><img src="https://cdn.lolis.fyi/gravatar/a4cd208dc18e91177ea4cb94bf4ff32e?s=200&d=blank&r=g" className="w-5 h-5 rounded-full mr-0.5" alt={`avatar`}/>
                    Miourasaki</a></div>
                <div className="flex items-center">WEBSITE UI DESIGN BY <a href="https://kaslet.art/" className="ml-2 hover:text-[#f0c1b1] cursor-pointer transition-all duration-500">Kaslet.art</a></div>
                {/*/     </div>-->*/}
            </div>
        </footer>
            <div
                className=" w-full py-2 px-10 text-stone-400 shadow-inner shadow-pink-200 flex justify-between items-center text-sm bg-pink-100">
                    <div title={`use terminal command:lang {local}`}
                    className={`transition-all cursor-pointer duration-500 flex items-center hover:text-pink-800`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.48.48 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.6.6 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.45.45 0 0 0 .138-.326M5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.7.7 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52z"/>
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.88.88 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a7 7 0 0 1 3.425 7.692 1 1 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a1 1 0 0 0 .283.126 7 7 0 0 1-9.49-3.409Z"/>
                        </svg>
                        <span className={`ml-1`}>{t('lang')}</span>
                    </div>
                <div>{t('data.count.total')}: {count}</div>
                <div>{t('data.count.total_today')}: {todayCount}</div>
                {(t('lang') == "简体中文") && (
                    <div><a href="https://icp.gov.moe/?keyword=20240033" target="_blank"
                                                   className="hover:text-[#ff1686] transition-all duration-500">萌ICP备20240033号</a>
                    </div>
                )}
            </div>
        </footer>
    )
}


export default footer;
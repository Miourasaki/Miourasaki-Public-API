import { Routes, Route } from "react-router-dom"
import Footer from "./component/footer.tsx";
import {useContext, useEffect} from "react";
import IndexView from "./view/IndexView.tsx";
import AboutView from "./view/AboutView.tsx";
import SupportView from "./view/SupportView.tsx";
import SwaggerView from "./view/SwaggerView.tsx";

import { GlobalContext } from './store';
import RedocView from "./view/RedocView.tsx";
import axios from "axios";
import DocsView from "./view/DocsView.tsx";
import Terminal from "./component/terminal.tsx";
import {useTranslation} from "react-i18next";

function App() {

    const { t } = useTranslation();
    document.body.classList.remove()

    document.body.classList.add("bg-remilia")

    const { setCount, setTodayCount } = useContext(GlobalContext);
    const { showFooter, setShowFooter} = useContext(GlobalContext);

    useEffect(() => {

        axios.get("https://api.mio.am/apidata/request/count?regular=false")
            .then(response => {
                const ApiData = response.data
                setCount(ApiData['data']['total'])
                setTodayCount(ApiData['data']['total_today'])
            })


        const container = document.getElementById("root");
        const FunctionEle = (event: WheelEvent) => {
            const scrollHeight = container?.scrollHeight;
            const scrollTop = container?.scrollTop;
            const clientHeight = container?.clientHeight;

            if (scrollTop !== undefined && clientHeight !== undefined && scrollHeight !== undefined) {
                if (scrollTop + clientHeight >= scrollHeight - 1) {
                    if (event.deltaY > 0) {
                        setShowFooter(true);
                    }
                } else if (scrollTop + clientHeight <= scrollHeight - (document.getElementById("footer")?.scrollHeight || 0)) {
                    if (event.deltaY < 0) {
                        setShowFooter(false);
                    }
                }
            }
        };

        const FunctionEle2 = () => {
            const scrollHeight = container?.scrollHeight;
            const scrollTop = container?.scrollTop;
            const clientHeight = container?.clientHeight;

            if (scrollTop !== undefined && clientHeight !== undefined && scrollHeight !== undefined) {
                if (scrollTop + clientHeight >= scrollHeight - 1) {
                    setShowFooter(true);
                } else if (scrollTop + clientHeight <= scrollHeight - (document.getElementById("footer")?.scrollHeight || 0)) {
                    setShowFooter(false);
                }
            }
        };

        container?.addEventListener('wheel', FunctionEle);
        container?.addEventListener('scroll', FunctionEle2);

        return () => {
            container?.removeEventListener('wheel', FunctionEle);
            container?.removeEventListener('scroll', FunctionEle2);
        }
    }, []);


    return (
        <>
            <Routes>
                <Route path="/" element={<IndexView/>}></Route>
                <Route path="/support" element={<SupportView/>}></Route>
                <Route path="/about" element={<AboutView/>}></Route>'

                <Route path="/swagger" element={<SwaggerView/>}></Route>
                <Route path="/redoc" element={<RedocView/>}></Route>
                <Route path="/assets/*" element={<DocsView/>}></Route>
            </Routes>
            <div className={`h-[0.5px] z-50 bg-white`}></div>
            {showFooter && (<Footer t={t}></Footer>)}

            <Terminal />
        </>
    );
}


export default App;
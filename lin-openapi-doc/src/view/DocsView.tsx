import {Route, Routes} from "react-router-dom";
import Navs from "../component/DocsComponent/navs.tsx";


const DocsView = () => {


    return (
        <>
            <div className={`w-screen h-screen relative bg-white bg-opacity-50 backdrop-blur-md `}>

                <div className={`w-full h-full absolute top-0 left-0 transition-all duration-75 ease-out flex init`}>
                    <Navs />

                    <Routes>
                        <Route path="" element={<Home/>}></Route>
                        <Route path="about" element={<About/>}></Route>
                        <Route path="contact" element={<Contact/>}></Route>
                    </Routes>
                </div>
            </div>

        </>);
};

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

export default DocsView;

    import {BorderBack} from "../component/border.tsx";

const AboutView = () => {
    return (
        <div className={`w-screen h-screen relative bg-white bg-opacity-50 backdrop-blur-md`}>


            <div className={`w-screen h-screen 
            flex flex-col justify-center items-center 
            px-24 py-28 init`}>
                <h1 className={`text-2xl font-mono mb-8`}>About Miourasaki's PublicAPI</h1>

                <div>关于页面被魔理沙偷走了</div>
            </div>

            <BorderBack/>

        </div>
    )
}

export default AboutView;
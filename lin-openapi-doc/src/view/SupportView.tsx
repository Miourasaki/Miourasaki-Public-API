import {BorderBack} from "../component/border.tsx";

const AboutView = () => {


    return (
        <div className={`w-screen h-screen  relative bg-white bg-opacity-50 backdrop-blur-md`}>


            <div className={`w-screen h-screen 
            flex flex-col justify-center items-center 
            px-24 py-28 init  `}>
                <h1 className={`text-2xl font-mono mb-8`}>Miourasaki's PublicAPI Support</h1>

                <div className={`flex flex-col w-full max-w-[25rem]  h-[calc(100vh-16rem)] flex-grow `}>
                    <div className="relative flex flex-col items-start justify-start  w-full   ">
                        <label className="text-[#7f1f42] font-mono uppercase mb-0.5">Title</label>
                        <input className="w-full h-12 bg-opacity-10 bg-white border
                        outline-0 px-3 text-[#7f1f42] leading-3 tracking-wider
                        transition-all duration-300 border-[#7f1f42]
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-[#7f1f42]"
                               placeholder="Title" type="text"/>
                        {/*<label :class="TrueClass()"*/}
                        {/*class="absolute bottom-2.5 text-xl right-4">{{True()}}</label>*/}
                    </div>
                    <div className="relative flex flex-col items-start justify-start flex-grow w-full mt-5 ">
                        <label className="text-[#7f1f42] font-mono uppercase mb-0.5">Content</label>
                        <textarea className="w-full bg-opacity-10 bg-white border
                        outline-0 px-3 py-3 text-[#7f1f42] leading-5 tracking-wider
                         border-[#7f1f42]
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-[#7f1f42] max-h-60 h-full "
                                  placeholder="Content"/>
                        {/*<label :class="TrueClass()"*/}
                        {/*class="absolute bottom-2.5 text-xl right-4">{{True()}}</label>*/}
                    </div>
                </div>
            </div>

            <BorderBack/>

        </div>
    )
}

export default AboutView;
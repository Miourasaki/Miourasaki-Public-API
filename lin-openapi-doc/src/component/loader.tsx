import "./loader.css"


const Loader = () => {

    return(<>
        <div className="loading">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <span className="rotate absolute text-[#b40202] text-7xl">☯</span>
    </>)
}

export default Loader;
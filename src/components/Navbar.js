import Logo from "../assets/Logo.png"

const Navbar = ({switchNavbar, display}) => {
    return (
        <>
            <div className="flex justify-between md:justify-between items-center px-7 py-5 h-[11.2%]">
                <div className="w-32 md:w-40 flex justify-center">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="w-96 hidden md:flex md:justify-around ">
                    <p className="navbar-text text-[#7780A1] cursor-pointer">Auctions</p>
                    <p className="navbar-text text-[#7780A1] cursor-pointer">Roadmap</p>
                    <p className="navbar-text text-[#7780A1] cursor-pointer">Discover</p>
                    <p className="navbar-text text-[#7780A1] cursor-pointer">Community</p>
                </div>
                <div className="hidden md:w-64 md:flex md:justify-around">
                    <button className="navbar-text text-[#7780A1] border-2 border-solid border-[#7780A1] rounded-lg py-1 px-2 md:py-2 md:px-4">Contact</button>
                    <button className="navbar-text text-white bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg py-1 px-2 md:py-2 md:px-4 boxshadow ml-3 md:ml-0">My account</button>
                </div>
                <div className="md:hidden cursor-pointer" onClick={switchNavbar}>
                    <p className={`border-t-4 border-[#7780A1] w-9 my-2 rounded-sm ${display ? "-rotate-45 -translate-x-1 translate-y-3":""}`}></p>
                    <p className={`border-t-4 border-[#7780A1] w-9 my-2 rounded-sm ${display ? "opacity-0":""}`}></p>
                    <p className={`border-t-4 border-[#7780A1] w-9 my-2 rounded-sm ${display ? "rotate-45 -translate-x-1 -translate-y-3":""}`}></p>
                </div>
            </div>
            <div className={`${display ? "flex flex-col":"hidden"} items-center mt-10 mb-10 md:hidden`}>
                <div className="">
                    <p className="navbar-text text-[#7780A1] m-4">Auctions</p>
                    <p className="navbar-text text-[#7780A1] m-4">Roadmap</p>
                    <p className="navbar-text text-[#7780A1] m-4">Discover</p>
                    <p className="navbar-text text-[#7780A1] m-4">Community</p>
                </div>
                <div className="flex mt-6">
                    <button className="navbar-text text-[#7780A1] border-2 border-solid border-[#7780A1] rounded-lg py-1 px-2 md:py-2 md:px-4">Contact</button>
                    <button className="navbar-text text-white bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg py-1 px-2 md:py-2 md:px-4 boxshadow ml-3 md:ml-0">My account</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;
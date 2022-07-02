import Logo from "../assets/Logo.png"
import Social from "../assets/Social.png"

const Footer = () => {
    return (
        <div className="mx-5 my-12 lg:my-24 lg:mx-40 flex flex-col lg:flex-row lg:h-[395px]">
            <div className="lg:w-[33.33%] mt-10 lg:mt-0 p-9 flex flex-col items-center lg:items-start lg:justify-between border-2 rounded-[1rem_1rem_0rem_0rem] lg:rounded-[1rem_0rem_0rem_1rem]">
                <img className="h-[34px] w-[213px]" src={Logo}/>
                <div className="flex justify-between mt-7 w-full">
                    <p className="font-[Inter] font-normal text-sm text-[#7780A1] cursor-pointer">Support</p>
                    <p className="font-[Inter] font-normal text-sm text-[#7780A1] cursor-pointer">Term of service</p>
                    <p className="font-[Inter] font-normal text-sm text-[#7780A1] cursor-pointer">Support</p>
                </div>
            </div>
            <div className="lg:w-[33.33%] p-9 flex flex-col justify-between border-[0px_2px_0px_2px] lg:border-[2px_0px_2px_0px]">
                <div>
                    <p className="font-[Sora] font-semibold text-base text-[#060714] m-2">Auction</p>
                    <p className="font-[Sora] font-semibold text-base text-[#060714] m-2">Roadmap</p>
                    <p className="font-[Sora] font-semibold text-base text-[#060714] m-2">Discover</p>
                    <p className="font-[Sora] font-semibold text-base text-[#060714] m-2">Community</p>
                    <button className="Navbar text-white bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg py-2 px-4 boxshadow mt-5 lg:mt-10">My account</button>
                </div>
                <img className="h-[20px] w-[200px] mt-10 lg:mt-0" src={Social} alt="social"/>
            </div>
            <div className="lg:w-[33.33%] p-9 flex flex-col justify-between border-2 rounded-[0rem_0rem_1rem_1rem] lg:rounded-[0rem_1rem_1rem_0rem] overflow-hidden">
                <p className="font-[Inter] font-normal text-sm text-[#7780A1]">Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p>
                <div className="input-footer px-6 py-4 flex justify-between mt-10 lg:mt-0">
                    <input placeholder="Newsletter"/>
                    <button className="text-[#2A27C9] font-semibold text-base">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;
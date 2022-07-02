import Background from "../assets/Background.png"
import Frame from "../assets/Frame.png"
import Adidas from "../assets/Adidas.png"
import Nike from "../assets/Nike.png"
import NewHolland from "../assets/NewHolland.png"
import RitterSport from "../assets/RitterSport.png"
import Square1 from "../assets/Square01.png"
import Square2 from "../assets/Square02.png"
import Square3 from "../assets/Square03.png"
import Square4 from "../assets/Square04.png"
import Square5 from "../assets/Square05.png"
import Square6 from "../assets/Square06.png"
import SearchIcon from "../assets/SearchIcon.png"
import ArrowDown from "../assets/ArrowDown.png"

const HeroSection = ({display}) => {
    return (
        <div className={`h-[88.8%] flex justify-center items-center ${display}`}>
            <img src={Background} className="absolute top-4 -z-10 overflow-hidden" alt="background"/>
            <div className="hidden lg:block -z-5">
                <img src={Square1} className="absolute top-48 h-32 right-48" alt="Square1"/>
                <img src={Square2} className="absolute top-56 h-32 left-28" alt="Square2"/>
                <img src={Square3} className="absolute top-[22rem] h-32 right-16" alt="Square3"/>
                <img src={Square4} className="absolute bottom-48 h-32 left-48 xl:left-72" alt="Square4"/>
                <img src={Square5} className="absolute bottom-28 h-32 right-64" alt="Square5"/>
                <img src={Square6} className="absolute bottom-28 h-32 left-0" alt="Square6"/>
            </div>
            <div className="text-center mx-5">
                <p className="pb-4 text-small">Non Fungible Tokens</p>
                <img src={Frame} alt="frame" className="h-36 pb-6"/>
                <p className="mb-7 text-small">Discover, collect and sell</p>
                <div className="w-full divide-x-2 flex justify-evenly items-center bg-white py-4 rounded-lg">
                    <input placeholder="Item, collections and creators"/>
                    <div className="flex justify-between w-24 items-center">
                        <p className="text-[#BBC0D0] font-[Inter] font-normal text-sm pl-3">Category</p>
                        <img className="h-1" src={ArrowDown} alt="arrow down"/>
                    </div>
                    <img className="h-4 pl-3" src={SearchIcon} alt="search icon"/>
                </div>
                <div className="mt-36 flex justify-between">
                    <img className="h-7" src={RitterSport} alt="RitterSport"/>
                    <img className="h-7" src={Nike} alt="Nike"/>
                    <img className="h-7" src={Adidas} alt="Adidas"/>
                    <img className="h-7" src={NewHolland} alt="NewHolland"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
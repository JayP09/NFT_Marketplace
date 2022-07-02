import item1 from "../assets/Item1.png"
import item2 from "../assets/Item2.png"
import item3 from "../assets/Item3.png"
import TimerIcon from "../assets/TimerIcon.png"
import Avatars from "../assets/Avatars.png"
import HeartIcon from "../assets/HeartIcon.png"
import { data } from "autoprefixer"

const auctionData =[
    {
        image: item1,
        title: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        price: "3.19 ETH",
        numberOfPeople: "35",
        numberOfLikes: "120"
    },
    {
        image: item2,
        title: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        price: "3.19 ETH",
        numberOfPeople: "35",
        numberOfLikes: "120"
    },
    {
        image: item3,
        title: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        price: "3.19 ETH",
        numberOfPeople: "35",
        numberOfLikes: "120"
    },
]

const Auctions = () => {
    return (
        <div className="mt-16 text-center">
            <h1 className="font-[Sora] font-semibold text-3xl">Latest live auctions</h1>
            <div className="flex flex-wrap justify-center items-center my-5">
                {auctionData.map((data,key) => (
                    <div className="p-4 w-96" key={key}>
                        <img className="w-auto" src={data.image} alt="item1"/>
                        <div className="mt-3">
                            <div className="flex w-80 justify-between items-center">
                                <p className="text-left w-60 font-[Sora] font-semibold text-lg">{data.title}</p>
                                <p className="font-[sora] font-semibold text-xs text-[#2A27C9] py-2 bg-[#E9E9FA] px-2 rounded-md">{data.price}</p>
                            </div>
                            <div className="flex mt-2 items-center">
                                <img className="h-4" src={TimerIcon} alt="Time Icon"/>
                                <p className="pl-2 font-[Inter] font-normal text-xs">{data.time} min left</p>
                            </div>
                            <p className="w-full my-2 border-t-2">
                            </p>
                            <div className="flex items-center justify-between">
                                <img className="h-6" src={Avatars} alt="avatars"/>
                                <p className="font-[Inter] font-normal text-xs text-[#7780A1]">{data.numberOfPeople} people are bidding</p>
                                <div className="flex items-center pl-16">
                                    <img className="h-4" src={HeartIcon}/>
                                    <p className="pl-2 font-[Inter] font-normal text-xs text-[#7780A1]">{data.numberOfLikes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Auctions;
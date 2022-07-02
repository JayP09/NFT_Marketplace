import TimerIcon from "../assets/TimerIcon.png"
import HeartIcon from "../assets/HeartIcon.png"
import AuctionData from "../utils/Data.js"

const PopularAuctions = () => {
    return (
        <>
            <div className="mt-16 text-center mb-16">
                <div className="mx-6">
                    <p className="font-[Inter] font-medium text-sm text-[#BBC0D0] uppercase tracking-widest">Overline</p>
                    <h1 className="font-[Sora] font-semibold text-3xl">Most popular live auctions</h1>
                </div>
                <div className="flex flex-wrap justify-center mt-7"> 
                    <p className="tabs">Architecture</p>
                    <p className="tabs">Photography</p>
                    <p className="tabs">Games</p>
                    <p className="tabs">Music</p>
                </div>
                <div className="flex justify-center flex-wrap my-5">
                    {AuctionData.map((data,index) => (
                        <div className="m-2 w-[175px]" key={index}>
                            <img className="" src={data.image} alt="item1"/>
                            <div className="mt-3">
                                <div className="flex justify-between items-center">
                                    <p className="text-left font-[Sora] font-semibold text-base">{data.title}</p>
                                </div>
                                <div className="flex mt-2 items-center justify-between">
                                    <div className="flex items-center">
                                        <img className="h-4" src={TimerIcon} alt="Time Icon"/>
                                        <p className="pl-2 font-[Inter] font-normal text-xs">{data.time}</p>
                                    </div>
                                    <p className="font-[sora] font-semibold text-xs text-[#2A27C9] py-2 bg-[#E9E9FA] px-2 rounded-md">{data.price}</p>
                                </div>
                                <p className="w-full my-2 border-t-2">
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="font-[Inter] font-normal text-xs text-[#7780A1]">{data.people} people are bidding</p>
                                    <img className="h-4" src={HeartIcon} alt='hearticon'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="font-[Sora] font-semibold text-base tracking-wide not-italic leading-5 text-[#7780A1] border-2 border-solid border-[#7780A1] rounded-lg py-2 px-4">
                    Show more
                </button>
            </div>
            <p className="w-full my-2 border-t-2"></p>
        </>
    )
}

export default PopularAuctions;
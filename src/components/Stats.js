import ArtIcon from "../assets/ArtIcon.png"
import worksIcon from "../assets/worksIcon.png"
import WalletIcon from "../assets/WalletIcon.png"
import UserIcon from "../assets/UserIcon.png"

const marketplaceStats= [
    {
        image: UserIcon,
        amount: "300k",
        description: "Users Active",
    },
    {
        image: worksIcon,
        amount: "52,5k",
        description: "Artworks",
    },
    {
        image: ArtIcon,
        amount: "17,5k",
        description: "Artists",
    },
    {
        image: WalletIcon,
        amount: "35.58",
        description: "ETH Spent",
    }
]

const Stats = () => {
    return (
        <div className="flex justify-center md:justify-between my-10 mx-10 md:my-24 md:mx-40">
            <div className="flex flex-wrap justify-center md:justify-between w-full">
               {
                   marketplaceStats.map((data,index) => (
                    <div className="flex flex-col items-center m-4" key={index}>
                        <img className="h-8 w-8" src={data.image} alt="user Icon" />
                        <p className="mt-4 font-[Sora] font-semibold text-5xl text-[#060714]">{data.amount}</p>
                        <p className="font-[Inter] font-normal text-base text-[#7780A1]">{data.description}</p>
                    </div>
                   ))
               }
            </div>
        </div>
    )
}

export default Stats;
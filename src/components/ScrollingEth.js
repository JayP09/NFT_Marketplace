import image1 from "../assets/02.png"
import image2 from "../assets/03.png"
import image3 from "../assets/04.png"
import image4 from "../assets/05.png"
import image5 from "../assets/06.png"
import image6 from "../assets/07.png"
import image7 from "../assets/08.png"
import image8 from "../assets/09.png"
import image9 from "../assets/10.png"
import image10 from "../assets/11.png"
import image11 from "../assets/12.png"
import image12 from "../assets/13.png"
import image13 from "../assets/14.png"
import image14 from "../assets/15.png"
import image15 from "../assets/16.png"

const ImagesArray = [
    {
        image: image1,
        price: "1.51 ETH"
    },
    {
        image: image2,
        price: "3.25 ETH"
    },
    {
        image: image3,
        price: "3.62 ETH"
    },
    {
        image: image4,
        price: "3.82 ETH"
    },
    {
        image: image5,
        price: "2.77 ETH"
    },
    {
        image: image6,
        price: "1.61 ETH"
    },
    {
        image: image7,
        price: "2.29 ETH"
    },
    {
        image: image8,
        price: "2.03 ETH"
    },
    {
        image: image9,
        price: "3.69 ETH"
    },
    {
        image: image10,
        price: "1.49 ETH"
    },
    {
        image: image11,
        price: "3.21 ETH"
    },
    {
        image: image12,
        price: "2.22 ETH"
    },
    {
        image: image13,
        price: "2.82 ETH"
    },
    {
        image: image14,
        price: "1.49 ETH"
    },
    {
        image: image15,
        price: "1.57 ETH"
    }
]

const ScrollingEth = () => {
    return (
        <div className="mt-20 lg:mb-24 lg:mt-24 relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {ImagesArray.map((data,index) => (
                    <div className="m-2 text-center" key={index}>
                        <img src={data.image} className="w-36" alt="Eth address"/>
                        <p className="font-[Inter] font-normal text-xs text-[#7780A1] mt-2">{data.price}</p>
                    </div>
                ))}
            </div>
            <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
                {ImagesArray.map((data,index) => (
                    <div className="m-2 text-center" key={index}>
                        <img src={data.image} className="w-36" alt="Eth address"/>
                        <p className="font-[Inter] font-normal text-xs text-[#7780A1] mt-2">{data.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScrollingEth;
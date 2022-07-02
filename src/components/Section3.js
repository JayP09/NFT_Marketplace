import LeftImage from "../assets/LeftImage.png"
import Icon1 from "../assets/Icon1.png"
import Icon2 from "../assets/Icon2.png"

const Section3 = () => {
    return (
        <>
            <div className="my-24 md:my-24 md:mx-40 flex flex-col md:flex-row justify-around items-center lg:gap-20">
                <img className="my-12 md:my-0 h-[300px] md:h-[500px]" src={LeftImage} alt="Left Image"/>
                <div className="md:w-[50%] mx-6">
                    <div>
                        <p className="font-[Inter] font-medium text-sm text-[#BBC0D0] uppercase tracking-widest">Overline</p>
                        <p className="font-[Sora] font-semibold text-6xl tracking-normal leading-[100%]">Habitant tristique aliquam in vel scelerisque</p>
                        <p className="font-[Inter] font-normal text-sm text-[#7780A1] lg:w-[22rem] pt-6" >Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                    </div>
                    <div className="flex pt-6">
                        <div className="mr-10">
                            <img className="h-6 mb-4" src={Icon1} alt="icon 1"/>
                            <p className="font-[Sora] font-semibold text-base text-[#060714]" >Sollicitudin sapien</p>
                            <p className="font-[Inter] font-normal text-sm text-[#7780A1]">Cursus fermentum</p>
                        </div>
                        <div>
                            <img className="h-6 mb-4" src={Icon2} alt="icon 2"/>
                            <p className="font-[Sora] font-semibold text-base text-[#060714]">Pulvinar metus</p>
                            <p className="font-[Inter] font-normal text-sm text-[#7780A1]">Nunc sed</p>
                        </div>
                    </div>
                    <div className="flex w-64 justify-between pt-8">
                        <button className="headerText text-white bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg py-2 px-4 boxshadow">Get started</button>
                        <button className="headerText text-[#7780A1] border-2 border-solid border-[#7780A1] rounded-lg py-2 px-4">Learn more</button>
                    </div>
                </div>
            </div>
            <p className="w-full my-2 border-t-2"></p>
        </>
    )
}

export default Section3;
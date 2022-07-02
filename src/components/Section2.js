import RightImage from "../assets/RightImage.png"

const Section2 = () => {
    return (
        <div className="my-24 md:my-24 md:mx-40 flex flex-col md:flex-row justify-around items-center">
            <div className="md:w-[50%] mx-6">
                <div>
                    <p className="font-[Inter] font-medium text-sm text-[#BBC0D0] uppercase tracking-widest">Overline</p>
                    <p className="font-[Sora] font-semibold text-6xl tracking-normal leading-[100%]">Sapien ipsum scelerisque convallis fusce</p>
                    <p className="font-[Inter] font-normal text-sm text-[#7780A1] lg:w-[22rem] pt-6" >Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                </div>
                <div className="flex w-64 justify-between pt-8">
                    <button className="Navbar text-white bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg py-2 px-4 boxshadow">Get started</button>
                    <button className="Navbar text-[#7780A1] border-2 border-solid border-[#7780A1] rounded-lg py-2 px-4">Learn more</button>
                </div>
            </div>
            <img className="mt-24 md:mt-0 h-[300px] md:h-[500px]" src={RightImage} alt="Right Image"/>
        </div>
    )
}

export default Section2;
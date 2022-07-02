import Pleat from "../assets/Pleat.png"
import Users from "../assets/Users.png"

const FolderSection = () => {
    return  (
        <div className="mx-5 md:my-24 md:mx-40">
            <div>
                <img src={Pleat} />
                <div className="flex flex-col xl:flex-row bg-[#F2F3F6] justify-center items-center rounded-tl-none rounded-tr-none sm:rounded-tr-3xl rounded-3xl overflow-hidden">
                    <div className="m-10 lg:m-20">
                        <div>
                            <p className="font-[Inter] font-medium text-sm text-[#BBC0D0] uppercase tracking-widest">Overline</p>
                            <p className="font-[Sora] font-semibold text-6xl tracking-normal leading-[100%]">Sapien ipsum scelerisque convallis fusce</p>
                            <p className="font-[Inter] font-normal text-sm text-[#7780A1] pt-6" >Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                        </div>
                        <div className="flex w-64 justify-between pt-8">
                            <button className="Navbar text-white bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg py-2 px-4 boxshadow">Get started</button>
                            <button className="Navbar text-[#7780A1] border-2 border-solid border-[#7780A1] rounded-lg py-2 px-4">Learn more</button>
                        </div>
                    </div>
                    <img className="h-52 md:h-96 m-10 lg:m-0" src={Users} alt="Right Image"/>
                </div>
            </div>
        </div>
    )
}

export default FolderSection;
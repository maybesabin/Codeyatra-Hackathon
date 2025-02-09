import { ArrowUpRight } from "lucide-react"
import smile from "../../assets/smile.png"
import heart from "../../assets/heart.png"

const cards = () => {
    return (
        <div
            className="w-full flex items-end justify-center gap-2">

            <div className="flex flex-col items-start gap-2 w-1/6">
                <div
                    className="w-full rounded-[32px] h-96 relative">

                    <img
                        className="h-full w-full object-cover rounded-[32px] scale-x-[-1] brightness-[65%]"
                        src="https://thumbs.dreamstime.com/b/happy-african-farmer-working-countryside-holding-wood-box-fresh-vegetables-215052594.jpg"
                    />

                    <div className="flex flex-col items-start gap-2 absolute left-3 top-24 text-white ">
                        <h1 className="font-semibold text-5xl">65%</h1>
                        <p className="text-xs text-left w-[95%] text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate, incidunt expedita nemo molestias itaque nisi quibusdam pariatur..</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div
                            style={{ padding: "7px 7px 7px 15px" }}
                            className="w-[95%] bg-neutral-500 text-white rounded-full flex items-center text-base justify-between absolute bottom-2"
                        >
                            Enroll Now
                            <div className="bg-neutral-200 rounded-full w-12 h-12 flex items-center justify-center">
                                <ArrowUpRight color="green" />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{ padding: "0 30px" }}
                    className="w-full rounded-[32px] bg-[#222222] text-white h-24 relative flex items-center justify-between gap-6">
                    <img src={smile} className="size-[35px]" alt="" />
                    <p className="text-xl font-medium text-left">Let them be heard</p>
                </div>
            </div>

            <div
                className="w-1/6 rounded-[32px] h-96 relative">

                <img
                    className="h-full w-full object-cover rounded-[32px] scale-x-[-1] brightness-[65%]"
                    src="https://imgs.search.brave.com/e5x54zsd4ZSZq_RmRZBYYJBSpcyxgr84JQ-xLxHHYUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NzA2ODIxNi9waG90/by9pbmRpYW4tZmFy/bWVyLXN0b2NrLXBo/b3RvLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1vV2dvN1h1/ekhaQUdsRzU1YnNp/eVh3cXZXSVVCeGtO/TWl4cHpPUlVPQjdR/PQ"
                />

                <h3
                    style={{ padding: "5px 15px" }}
                    className="absolute top-4 left-4 text-white text-sm bg-black rounded-full">
                    Real-time Data
                </h3>
                <p className="absolute bottom-4 left-4 text-white font-medium text-left">Smart recommendations based on local weather conditions</p>
            </div>

            <div
                style={{ padding: "10px" }}
                className="rounded-[32px] bg-[#d1dcdb] flex flex-col items-center gap-6 w-1/6">
                <h1
                    style={{ paddingTop: "24px" }}
                    className="text-3xl font-semibold font-[Montserrat]">
                    Join with
                    <br />
                    Smart Farmers
                </h1>

                <div
                    style={{ marginTop: "40px", padding: "7px 7px 7px 15px" }}
                    className="w-full bg-[#b9c2bf] rounded-full flex items-center text-base justify-between"
                >
                    Join Community
                    <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center">
                        <ArrowUpRight color="white" />
                    </div>
                </div>
            </div>

            <div
                className="w-1/6 rounded-[32px] h-96 relative">

                <img
                    className="h-full w-full object-cover rounded-[32px] scale-x-[-1] brightness-[65%]"
                    src="https://t3.ftcdn.net/jpg/04/32/15/18/360_F_432151892_oQ3YQDo2LYZPILlEMnlo55PjjgiUwnQb.jpg"
                />

                <h3
                    style={{ padding: "5px 15px" }}
                    className="absolute top-4 right-4 text-white text-sm bg-black rounded-full">
                    Join 5000+ Farmers
                </h3>
                <p className="absolute bottom-4 right-4 text-right text-white font-medium">
                    Connect with a growing community of smart farmer all around the world
                </p>
            </div>

            <div className="flex flex-col items-start gap-2 w-1/6">
                <div
                    className="w-full rounded-[32px] h-96 relative">

                    <img
                        className="h-full w-full object-cover rounded-[32px] scale-x-[-1] brightness-[65%]"
                        src="https://t3.ftcdn.net/jpg/03/80/27/88/360_F_380278806_hU362lmcYRqkb8reIageNj4Qh7ID9mIg.jpg"
                    />

                    <div className="flex items-center justify-center">
                        <div
                            style={{ padding: "7px 7px 7px 15px" }}
                            className="w-[95%] bg-neutral-500 text-white rounded-full flex items-center text-base justify-between absolute bottom-2"
                        >
                            Explore More
                            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                <ArrowUpRight color="green" />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{ padding: "0 30px" }}
                    className="w-full rounded-[32px] bg-[#222222] text-white h-24 relative flex items-center justify-between gap-6">
                    <img src={heart} className="size-[35px]" alt="" />
                    <p className="text-xl font-medium text-left">Your home for help</p>
                </div>
            </div>
        </div >
    )
}

export default cards
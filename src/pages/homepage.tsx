import { Triangle } from "lucide-react"
import Cards from "../components/index/cards"

const homepage = () => {
    return (
        <div className="flex flex-col items-center gap-6">
            <h1
                style={{ marginTop: "64px" }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Great harvests are built
                <br />
                with smart farming
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
                The world's most advanced fertilizer recommendation platform, optimized for your farm in an easy way
            </p>

            <div className="flex items-center gap-4">
                <button
                    style={{ padding: "15px 35px" }}
                    className="bg-[#222222] hover:bg-zinc-900 cursor-pointer transition-all text-white rounded-full text-sm"
                >
                    Get Started
                </button>
                <button
                    style={{ padding: "15px 30px" }}
                    className="bg-gray-200 hover:bg-gray-300 cursor-pointer transition-all rounded-full flex items-center gap-2 text-sm"
                >
                    <Triangle size={'12px'} className="text-black fill-black rotate-90" />
                    Watch Video
                </button>
            </div>

            <Cards />
        </div>
    )
}

export default homepage
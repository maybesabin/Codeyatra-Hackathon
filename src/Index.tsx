import { Triangle } from "lucide-react"
import Navbar from "./components/index/navbar"
import Cards from "./components/index/cards"
import Features from "./Feautres"
import { Link } from "react-router-dom"
import Contact from "../src/contact"
import Accordion from "../src/accordion"
import About from "../src/About"

const index = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                style={{ paddingBottom: "32px" }}
                className="w-full h-screen flex flex-col items-center justify-between gap-12 text-center">
                <Navbar />


                <div className="flex flex-col items-center gap-6">
                    <h1
                        style={{ marginTop: "64px" }}
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Farming Simplified:
                        <br />
                        Your All-in-One Dashboard
                    </h1>

                    <p className="mx-auto max-w-xl text-gray-500">
                        Monitor your farm, track productivity, manage resources, and get AI-powered insights—all in one place.
                    </p>

                    <div className="flex items-center gap-4">
                        <button
                            style={{ padding: "15px 35px" }}
                            className="bg-[#222222] hover:bg-zinc-900 cursor-pointer transition-all text-white rounded-full text-sm"
                        >
                            <Link to={'/dashboard'}>
                                Get Started
                            </Link>
                        </button>
                        <button
                            style={{ padding: "15px 30px" }}
                            className="bg-gray-200 hover:bg-gray-300 cursor-pointer transition-all rounded-full flex items-center gap-2 text-sm"
                        >
                            <Triangle size={'12px'} className="text-black fill-black rotate-90" />
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Cards Section */}
                <Cards />
            </div >
            <Features />
            <About />
            <Accordion />
            <Contact />
        </>
    )
}

export default index
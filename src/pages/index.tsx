import Homepage from "../pages/homepage"
import Navbar from "../components/navbar"
import Features from "./features"

const index = () => {
    return (
        <div
            style={{ paddingBottom: "32px" }}
            className="w-full h-screen flex flex-col items-center justify-between gap-12 text-center">
            <Navbar />

            <Homepage />

            <Features />
        </div >
    )
}

export default index
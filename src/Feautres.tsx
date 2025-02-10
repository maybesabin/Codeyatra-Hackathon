import { ArrowUpRight } from 'lucide-react'
import "../src/styles/ContentCont.css"
import ContentCont from './components/ContentCont'

function Features() {
    return (
        <div
            style={{ paddingTop: "10rem" }}
            className="Features overflow-x-hidden flex flex-col items-center justify-center text-center gap-6">
            <div className="featureTitle">

                <p className='text-6xl text-center font-bold tracking-tighter'>
                    We strive to protect nature <br /> for future generation
                </p>

                <div
                    style={{ paddingTop: "30px" }}
                    className="flex items-center gap-4">
                    <button
                        style={{ padding: "17px 25px" }}
                        className="grnBtn button rounded-full">About Us</button>
                    <button
                        style={{ padding: "17px" }}
                        className="rounded-full button flex items-center gap-2 bg-gray-300">
                        View campaign
                        <ArrowUpRight />
                    </button>
                </div>

            </div>
            <div
                className="featuresContent">
                <p>We hold various events campaoigns and raise funds for the implementation of <br /> projects to preserve <span className='bg-[#d6e5be]' style={{ padding: "5px" }}>the environment</span> </p>
                <div className="featuresContainers">
                </div>
            </div>

            <div
                style={{ paddingTop: "36px" }}
                className="flex flex-wrap items-center justify-center gap-4 w-full">

                <ContentCont green heading="⛅ Real-time Weather & Alerts" desc="Get live weather updates, seasonal forecasts, and alerts to help plan farming activities efficiently." />
                <ContentCont green={false} heading="👨‍🌾 Connect with Farmers" desc="Join a network of farmers, share experiences, and get expert advice to solve farming challenges." />
                <ContentCont green={false} heading="📈 Track Market Prices & Demand" desc="Stay informed about real-time crop prices, demand trends, and best-selling opportunities." />
                <ContentCont green heading="📊 Farm Management & Productivity" desc="Monitor your farm’s productivity, manage resources efficiently, and keep records of past yields for better planning." />
                <ContentCont green heading="📊 Farm Management & Productivity" desc="Monitor your farm’s productivity, manage resources efficiently, and keep records of past yields for better planning." />
            </div>
        </div>
    )
}

export default Features
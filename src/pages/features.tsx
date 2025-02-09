import { MoveRight } from 'lucide-react'
import "../styles/feautres.css"
import ContentCont from '../components/features/ContentCont'
function Features() {
    return (
        <div className="Features">
            <div className="featureTitle">

                <p>We Strive to protect nature for future generation</p>
                <div className="featureTitleBtn">
                    <button className="grnBtn button">About Us</button>
                    <button className="plnBtn button">View campaign <MoveRight /> </button>
                </div>

            </div>
            <div className="featuresContent">

                <button className=" button">Our Projects</button>
                <p>We hold various events campaoigns and raise funds for the implementation of projects to preserve <span>the environment</span> </p>
                <div className="featuresContainers">
                </div>
            </div>
            <div className="contentConts">

                <ContentCont green heading="Cleaning up the Danube" desc="We hold various events campaoigns and raise funds for the implementation of projects to preserve the environment" />
                <ContentCont green={false} heading="Cleaning up the Danube" desc="We hold various events campaoigns and raise funds for the implementation of projects to preserve the environment" />
                <ContentCont green={false} heading="Cleaning up the Danube" desc="We hold various events campaoigns and raise funds for the implementation of projects to preserve the environment" />
                <ContentCont green heading="Cleaning up the Danube" desc="We hold various events campaoigns and raise funds for the implementation of projects to preserve the environment" />
            </div>
            <div className="featuresFooter">
                <h1>Green</h1>
                <img src="https://i.pinimg.com/736x/24/7a/cc/247acc3d331617259873c4d1d6029168.jpg" alt="" />

                <h1>Campain</h1>
            </div>
        </div>
    )
}

export default Features
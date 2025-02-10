import { Dot } from "lucide-react"
import logo from "../../assets/tree.png"

const navbar = () => {
    return (
        <div className="bg-transparent flex items-center justify-around w-full"
            style={{ paddingTop: "24px", fontFamily: "Montserrat" }}>

            <div className="flex items-end gap-4">
                <img src={logo} className="w-9 h-9" alt="Tree Logo" />
                <h1 className="font-bold text-xl text-[#033f2d]">FarmWise</h1>
            </div>

            <ul
                className="flex items-center gap-4 text-[0.85rem] leading-5 font-medium w-[27%]">
                <li><a href="">Home</a></li>
                <li><Dot size={'17px'} /></li>
                <li><a href="">About</a></li>
                <li><Dot size={'17px'} /></li>
                <li><a href="">Resources</a></li>
                <li><Dot size={'17px'} /></li>
                <li><a href="">Contact</a></li>
            </ul>

            {/* Menu */}
            <div className="flex flex-col items-center gap-2">
                <div className="h-[2px] bg-zinc-700 w-9"></div>
                <div className="h-[2px] bg-zinc-700 w-9"></div>
            </div>
        </div>
    )
}

export default navbar
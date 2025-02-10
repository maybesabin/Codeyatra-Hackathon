import { ArrowUpRight } from 'lucide-react'
import "../styles/ContentCont.css"

function ContentCont({ heading, desc, green }: { heading: string, desc: string, green: boolean }) {
    return (
        <div
            style={{ padding: "25px" }}
            className={`contentCont ${green ? "green" : "gray"} border rounded-xl w-1/4`}>
            <h1
                style={{ paddingBottom: "24px" }}
                className='text-2xl font-semibold'>{heading}</h1>
            <p>{desc}</p>

            <div className='flex justify-end w-full'>
                <button style={{ padding: "10px 17px", marginTop: " 24px" }}
                    className="bg-white flex items-center gap-2 border border-green-600 rounded-full">
                    Read More
                    < ArrowUpRight />
                </button >
            </div>
        </div >
    )
}

export default ContentCont
import { MoveUpRight } from 'lucide-react'
import "../../styles/ContentCont.css"

function ContentCont({ heading, desc, green }: { heading: string, desc: string, green: boolean }) {
  return (
    <div className={`contentCont ${green ? "green" : "gray"} text-left`}>
      <h1>{heading}</h1>
      <p>{desc}</p>
      <div className="buttons flex items-center justify-start">
        <button
          style={{ padding: "12px 17px" }}
          className='flex items-center gap-4 bg-white rounded-full'>Read More<MoveUpRight /></button>
      </div>
    </div>
  )
}

export default ContentCont
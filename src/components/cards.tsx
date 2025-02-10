import { useTaskContext } from "@/contexts/taskContext"
import Card from "./card"

const cards = () => {

    const { total, sales } = useTaskContext()

    return (
        <div className="w-full mt-4 flex items-start justify-between gap-4">
            <Card
                title="Total"
                value={total}
            />
            <Card
                title="Loss"
                value={3000}
            />
            <Card
                title="Profit"
                value={3000}
            />
            <Card
                title="Sales"
                value={sales}
            />
        </div>
    )
}

export default cards
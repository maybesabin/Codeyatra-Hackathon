import { TrendingDown, TrendingUp } from "lucide-react"

const card = ({
    title,
    value,
}: {
    title: string,
    value: number,
}
) => {
    return (
        <div className="border rounded-lg w-1/4 p-3 flex justify-between gap-4">

            <div className="flex items-center gap-2">
                <h3 className="md:text-sm text-xs font-medium">{title}</h3>
                {
                    title != "Loss" ?
                        <TrendingUp size={'17px'} color="green" /> :
                        <TrendingDown size={'17px'} color="red" />
                }
            </div>
            <p className="text-sm">
                Rs.&nbsp;
                {value.toFixed(2)}
            </p>

        </div>
    )
}

export default card
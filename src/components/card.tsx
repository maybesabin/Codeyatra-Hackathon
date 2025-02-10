const card = ({
    title,
    value,
    currency,
}: {
    title: string,
    value: number,
    currency: boolean
}
) => {
    return (
        <div className="border rounded-lg w-1/4 p-3 flex justify-between gap-4">

            <h3 className="md:text-sm text-xs font-medium">{title}</h3>
            <p className="text-sm">
                {currency && <span>Rs. </span>}
                {value}
            </p>

        </div>
    )
}

export default card
import Card from "./card"

const cards = () => {
    return (
        <div className="w-full mt-4 flex items-start justify-between gap-4">
            <Card
                title="Total"
                currency={true}
                value={3000}
            />
            <Card
                title="Loss"
                currency={true}
                value={3000}
            />
            <Card
                title="Profit"
                currency={true}
                value={3000}
            />
            <Card
                title="Sales"
                currency={false}
                value={3000}
            />
        </div>
    )
}

export default cards
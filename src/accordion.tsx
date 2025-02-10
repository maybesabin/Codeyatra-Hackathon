import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: "What is the Farmer Dashboard?",
        answer: "The Farmer Dashboard is a web application that helps farmers manage their farming activities efficiently by providing tools for tracking prices, calculating costs, managing tasks, and getting insights on farming operations."
    },
    {
        question: "How can I input the prices for farming products?",
        answer: "You can enter the prices for various farming products such as seeds, fertilizers, pesticides, and labor in the 'Price Input' section. Simply fill in the prices for each item, and the dashboard will calculate your costs accordingly."
    },
    {
        question: "How do I track my farming tasks?",
        answer: "You can track your farming tasks in the 'Task Management' section. Add tasks such as planting, harvesting, irrigation, etc., and mark them as completed when done. You can also set deadlines and get reminders for upcoming tasks."
    },
    {
        question: "How does the weather information help farmers?",
        answer: "The weather information provides real-time data on the climate conditions in your area. Knowing whether it’s going to rain, be sunny, or cloudy can help farmers plan their activities such as irrigation, fertilization, and harvesting."
    },
    {
        question: "Can I use the dashboard for different types of crops?",
        answer: "Yes! The Farmer Dashboard is versatile and allows you to manage different types of crops. You can add the specific crops you are growing and adjust prices and task schedules accordingly."
    },
    {
        question: "How do I calculate the total cost of my farming operations?",
        answer: "The dashboard automatically calculates the total cost based on the prices you input for various products and services. It factors in costs for seeds, fertilizers, pesticides, labor, transport, and more."
    },
    {
        question: "Is there a way to predict the amount of produce I'll get from my crops?",
        answer: "While the current version does not include advanced prediction models, the dashboard allows you to input various factors like the size of your farm, crop type, and expected yield per unit to get an estimate of your produce."
    },
    {
        question: "How can I save and access my data?",
        answer: "You can save your data by logging into your account. The dashboard securely stores your farming information, allowing you to access it anytime to monitor your progress and update prices, tasks, and weather details."
    },
    {
        question: "Is the Farmer Dashboard free to use?",
        answer: "Yes, the Farmer Dashboard is completely free to use during the hackathon period. We may offer additional features in the future with paid plans, but the basic features will always remain free."
    },
    {
        question: "Can I access the Farmer Dashboard on mobile?",
        answer: "Yes, the Farmer Dashboard is mobile-friendly and can be accessed via your mobile browser. We're also working on a mobile app for easier access to features on the go."
    }
];

const accordion = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full my-[7vh] gap-12 ">
            <p className='text-6xl text-center font-bold tracking-tighter'>
                Frequently Asked <br /> Questions 💡
            </p> 

            <Accordion type="single" collapsible className="w-1/2">
                {faqData.map((item, idx) => (
                    <AccordionItem key={idx} value={item.question}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </div>
    )
}

export default accordion
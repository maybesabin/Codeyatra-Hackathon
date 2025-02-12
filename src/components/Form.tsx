'use strict'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { useTaskContext } from "@/contexts/taskContext";
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

const Form = ({ taskType }: { taskType: string }) => {
    interface Task {
        title: string;
        price: number;
        taskType: string;
        category: string;
        incomeOrExpense: string;
    }
    const { toast } = useToast()
    const { addTask } = useTaskContext();

    //task submit
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [incomeOrExpense, setIncomeOrExpense] = useState("")

    const handleSubmit = () => {
        const newTask: Task = {
            title,
            price,
            taskType,
            category,
            incomeOrExpense
        };
        if (!title) {
            toast({
                title: "Error",
                description: "Title is required",
            });
            return;
        }
        if (title.length >= 30) {
            toast({
                title: "Error",
                description: "Title must be less than 30 characters",
            });
            return;
        }

        if (!category) {
            toast({
                title: "Error",
                description: "Category is required",
            });
            return;
        }
        if (!incomeOrExpense) {
            toast({
                title: "Error",
                description: "Specify whether income or expense",
            });
            return;
        }

        addTask(newTask);
        setTitle('');
        setPrice(0);
        setCategory('');
    }

    return (
        <>
            <Toaster />
            <Sheet>
                <SheetTrigger>
                    <CirclePlus className="w-6 h-6 cursor-pointer text-white fill-gray-500 hover:fill-gray-700" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Add <span className="lowercase  ">{taskType}</span> task</SheetTitle>
                        <SheetDescription>
                            Fill up all the fields to add a new task to your board.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-12">
                            <Label htmlFor="name" className='text-sm'>
                                Title*
                            </Label>
                            <Input
                                id="name"
                                className="col-span-3"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-12">
                            <Label htmlFor="price" className='text-sm'>
                                Price
                            </Label>
                            <Input
                                id="price"
                                className="col-span-3"
                                value={price}
                                onChange={(e: any) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-12">
                            <Label className="text-sm">Source*</Label>
                            <div className="flex gap-4 col-span-3">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="incomeOrExpense"
                                        value="Income"
                                        checked={incomeOrExpense === "Income"}
                                        onChange={(e) => setIncomeOrExpense(e.target.value)}
                                        className="hidden"
                                    />
                                    <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${incomeOrExpense === "Income" ? "border-blue-500" : "border-gray-400"}`}>
                                        {incomeOrExpense === "Income" && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                                    </div>
                                    <span>Income</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="incomeOrExpense"
                                        value="Expense"
                                        checked={incomeOrExpense === "Expense"}
                                        onChange={(e) => setIncomeOrExpense(e.target.value)}
                                        className="hidden"
                                    />
                                    <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${incomeOrExpense === "Expense" ? "border-red-500" : "border-gray-400"}`}>
                                        {incomeOrExpense === "Expense" && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
                                    </div>
                                    <span>Expense</span>
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-12">
                            <Label htmlFor="taskType" className='text-sm'>
                                Type*
                            </Label>
                            <div className="col-span-3">
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder={
                                            taskType == "To Do" ? "Planning"
                                                : taskType == "In Progress" ? "Harvesting" :
                                                    taskType == "In Review" ? "Processing" :
                                                        "Delivery"
                                        } />
                                    </SelectTrigger>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-12">
                            <Label htmlFor="taskType" className='text-sm'>
                                Category*
                            </Label>
                            <div className="col-span-3">
                                <Select onValueChange={setCategory}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Grains & Cereals">Grains & Cereals</SelectItem>
                                        <SelectItem value="Fruits">Fruits</SelectItem>
                                        <SelectItem value="Vegetables">Vegetables</SelectItem>
                                        <SelectItem value="Dairy Products">Dairy Products</SelectItem>
                                        <SelectItem value="Livestock">Livestock</SelectItem>
                                        <SelectItem value="Special Crops">Special Crops</SelectItem>
                                        <SelectItem value="Miscellaneous">Miscellaneous</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit" onClick={handleSubmit}>Add task</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Form
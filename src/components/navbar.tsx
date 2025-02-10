'use strict'

import { Plus } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'
import { useState } from 'react'
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
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { useTaskContext } from '@/contexts/taskContext'
import Filters from './Filters'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Tree from "../assets/tree.png"
import Cards from "../components/cards"

const Navbar = () => {
    interface Task {
        title: string;
        price: number;
        taskType: string;
        category: string;
    }
    const { toast } = useToast()
    const { addTask } = useTaskContext();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [taskType, setTaskType] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const newTask: Task = {
            title,
            price,
            taskType,
            category
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
        if (!price) {
            toast({
                title: "Error",
                description: "Price is required",
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

        addTask(newTask);
        setTitle('');
        setPrice(0);
        setCategory('');
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4 w-full'>
            <Toaster />
            <div
                className="flex items-center justify-between w-full">
                <div
                    className='flex items-center gap-2'>
                    <img src={Tree} className='w-8 h-8' />
                    <span className='text-neutral-800 text-4xl font-semibold'>FarmWise</span>
                </div>
                <Sheet>
                    <SheetTrigger>
                        <Button variant={"outline"}
                            className="flex items-center justify-center gap-2">
                            <Plus className='w-4 h-4' />
                            New Supply
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Add new supply</SheetTitle>
                            <SheetDescription>
                                Fill up all the fields to add a new supply to your board.
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
                                    Price*
                                </Label>
                                <Input
                                    id="name"
                                    className="col-span-3"
                                    value={price}
                                    onChange={(e: any) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-12">
                                <Label htmlFor="taskType" className='text-sm'>
                                    Type*
                                </Label>
                                <div className="col-span-3">
                                    <Select onValueChange={setTaskType}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select task type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="To Do">Planning</SelectItem>
                                            <SelectItem value="In Progress">Harvesting</SelectItem>
                                            <SelectItem value="In Review">Processing</SelectItem>
                                            <SelectItem value="Done">Delivery</SelectItem>
                                        </SelectContent>
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
            </div>

            {/* Filters */}
            <Filters />

            <Cards />

        </div >
    )
}

export default Navbar
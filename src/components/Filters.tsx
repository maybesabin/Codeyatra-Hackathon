'use strict'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Cloud, LayoutGrid, List, Redo, Undo } from 'lucide-react'
import { Button } from "./ui/button"
import { useTaskContext } from "@/contexts/taskContext"

const Filters = () => {

    const weather: any = localStorage.getItem("weatherData")
    const user: any = localStorage.getItem("user")
    const userData = JSON.parse(user)
    const weatherData = JSON.parse(weather);
    const { canRedo, canUndo, handleRedo, handleUndo, toggleLayout, setToggleLayout, taskFilter, setTaskFilter, icons } = useTaskContext();


    return (
        <div className='flex items-center justify-between w-full'>

            <div className="flex flex-col items-start gap-2">

                <div className="flex items-center gap-2 mb-6">

                    <Cloud />
                    <span className="capitalize">{userData.location}:</span>
                    {weatherData?.main?.temp}<sup className="-ml-1">o</sup><span className="-ml-1">C</span>
                </div>

                {/* Add Task */}
                <div className='flex items-center gap-2'>
                    <Select value={taskFilter} onValueChange={setTaskFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All Categories">All Categories</SelectItem>
                            {icons.map((item, idx) => (
                                <SelectItem key={idx} className="capitalize" value={item.name}>{item.name}</SelectItem>
                            ))}
                        </SelectContent>
                        <div className="lg:flex hidden">
                            <div
                                onClick={() => setToggleLayout("list")}
                                className={`${toggleLayout == "list" ? "hidden" : "flex"} items-center gap-2 border rounded-md p-2 cursor-pointer hover:bg-neutral-100 transition-all`}>
                                <List className='w-5 h-5' />
                                <span className='text-neutral-800 text-sm font-medium'>List</span>
                            </div>
                            <div
                                onClick={() => setToggleLayout("grid")}
                                className={`${toggleLayout == "grid" ? "hidden" : "flex"} items-center gap-2 border rounded-md p-2 cursor-pointer hover:bg-neutral-100 transition-all`}>
                                <LayoutGrid className='w-5 h-5' />
                                <span className='text-neutral-800 text-sm font-medium'>Grid</span>
                            </div>
                        </div>
                    </Select>
                </div>
            </div>

            {/* Undo Redo Buttons */}
            <div className="flex items-center gap-2">
                <Button
                    disabled={!canUndo}
                    onClick={() => handleUndo()} variant="outline" size="icon">
                    <Undo className="w-4 h-4" />
                </Button>
                <Button
                    disabled={!canRedo}
                    onClick={() => handleRedo()} variant="outline" size="icon">
                    <Redo className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}

export default Filters
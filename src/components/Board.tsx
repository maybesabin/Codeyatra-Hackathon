import { useTaskContext } from "@/contexts/taskContext";
import { Circle, Trash } from "lucide-react";
import Form from "./Form";
import { useState } from "react";

const Board = () => {
    interface Task {
        title: string;
        price: number;
        taskType: string;
        category: string;
        incomeOrExpense: string;
    }

    const { filteredTasks, icons, deleteTask, setTasks, toggleLayout } = useTaskContext();
    const [draggedOver, setDraggedOver] = useState<string | null>(null);

    //filtered tasks for columns
    const done = filteredTasks.filter((task) => task.taskType === "Done");
    const toDo = filteredTasks.filter((task) => task.taskType === "To Do");
    const inProgress = filteredTasks.filter((task) => task.taskType === "In Progress");
    const inReview = filteredTasks.filter((task) => task.taskType === "In Review");

    //drag and drop
    const handleDragStart = (e: React.DragEvent, task: Task) => {
        e.dataTransfer.setData("task", JSON.stringify(task));
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        const element = e.target as HTMLElement;
        // Find the closest drop zone
        const dropZone = element.closest('[data-drop-zone]');
        if (dropZone) {
            setDraggedOver(dropZone.getAttribute('data-drop-zone'));
        }
    }

    const handleDragLeave = (e: React.DragEvent) => {
        const element = e.target as HTMLElement;
        const dropZone = element.closest('[data-drop-zone]');
        if (dropZone && dropZone.getAttribute('data-drop-zone') === draggedOver) {
            setDraggedOver(null);
        }
    }

    const handleOnDrop = (e: React.DragEvent, taskType: string) => {
        e.preventDefault();
        setDraggedOver(null);
        const draggedTask: Task = JSON.parse(e.dataTransfer.getData("task"));
        const updatedTasks = filteredTasks.map(task => {
            if (task.title === draggedTask.title) {
                return { ...task, taskType };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const TaskCard = ({ task, idx }: { task: Task; idx: number }) => {
        const taskIcon = icons.find((icon) => icon.name.toLowerCase() === task.category.toLowerCase());
        return (
            <div
                onDragStart={(e) => handleDragStart(e, task)}
                draggable={true}
                key={idx}
                className={`flex flex-col items-start gap-4 p-4 border rounded-lg ${toggleLayout === "grid" ? "hover:scale-105" : "hover:scale-100"} active:scale-100 cursor-pointer transition-all bg-white`}
            >
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {taskIcon?.icon}
                        <h1 className="text-sm font-semibold capitalize">{task.title}</h1>
                    </div>
                    <Circle size={'10px'} className={`${task.incomeOrExpense == "Income" ? "fill-green-600" : "fill-red-600"} animate-pulse`} />
                </div>
                <p className="text-xs text-gray-500 first-letter:capitalize">Rs. {task.price}</p>
                <div className="flex items-center gap-4">
                    <div className={`px-2 py-1 text-xs capitalize border rounded-full ${taskIcon?.color}`}>
                        {task.category}
                    </div>
                    <Trash onClick={() => deleteTask(task)} className="w-4 h-4 cursor-pointer" />
                </div>
            </div>
        );
    };

    const TaskColumn = ({ title, tasks, taskType }: { title: string; tasks: Task[]; taskType: string, }) => (
        <div
            className={`${toggleLayout === "list" ? "w-full" : "lg:w-1/4 w-full"} flex flex-col gap-6`}
        >
            <div className="flex items-center justify-between">
                <h1 className="md:text-lg text-sm font-semibold uppercase">
                    {title}
                    <span className="text-gray-500">&nbsp;&nbsp;{tasks.length}</span>
                </h1>
                <Form taskType={taskType} />
            </div>
            <div
                data-drop-zone={taskType}
                onDrop={(e) => handleOnDrop(e, taskType)}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`${toggleLayout === "grid" ? "lg:min-h-[70vh]" : "lg:min-h-[15vh]"} rounded-lg transition-colors ${draggedOver === taskType
                    ? 'bg-gray-100 border-2 border-dashed border-gray-300'
                    : 'border-2 border-transparent'
                    } flex flex-col gap-4`}
            >
                {tasks.map((task, idx) => (
                    <TaskCard key={idx} task={task} idx={idx} />
                ))}
                {tasks.length === 0 && (
                    <div className="h-full pt-4 px-2 flex items-center justify-start text-gray-400 text-sm">
                        Drop supply here
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className={`flex ${toggleLayout === "list" ? "flex-col gap-12" : "lg:gap-6 gap-12 lg:flex-row flex-col"} items-start justify-between mt-6`}>
            <TaskColumn title="Planning" tasks={toDo} taskType="To Do" />
            <TaskColumn title="Harvesting" tasks={inProgress} taskType="In Progress" />
            <TaskColumn title="Processing" tasks={inReview} taskType="In Review" />
            <TaskColumn title="Delivery" tasks={done} taskType="Done" />
        </div>
    );
};

export default Board;
import { createContext, SetStateAction, useContext, useEffect, useState } from "react";
import { Cherry, Dumbbell, Egg, Grid2X2, LeafyGreen, Milk, Wheat } from "lucide-react";
import axios from "axios"

interface Task {
    title: string;
    price: number;
    taskType: string;
    category: string;
    incomeOrExpense: string;
}

interface Icon {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface TaskContextType {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    icons: Icon[];
    addTask: (task: Task) => void;
    deleteTask: (task: Task) => void;
    handleUndo: () => void;
    handleRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
    toggleLayout: string;
    setToggleLayout: (layout: string) => void;
    taskFilter: string;
    setTaskFilter: (filter: string) => void;
    filteredTasks: Task[];
    total: number,
    setTotal: React.Dispatch<SetStateAction<number>>;
    sales: number;
    fetchWeather: () => Promise<void>;
    city: string;
    setCity: React.Dispatch<SetStateAction<string>>;
    profit: number;
    loss: number
}


const taskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {

    //storing tasks in local storage
    const [tasks, setTasksState] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    //storing history for undo/redo
    const [history, setHistory] = useState<Task[][]>([tasks]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Update localStorage when tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    //relative icons for task category
    const icons = [
        { name: "Grains & Cereals", icon: <Wheat className="w-4 h-4" />, color: "bg-green-100" },
        { name: "Fruits", icon: <Cherry className="w-4 h-4" />, color: "bg-blue-100" },
        { name: "Vegetables", icon: <LeafyGreen className="w-4 h-4" />, color: "bg-red-100" },
        { name: "Dairy Products", icon: <Milk className="w-4 h-4" />, color: "bg-purple-100" },
        { name: "Livestock", icon: <Egg className="w-4 h-4" />, color: "bg-orange-100" },
        { name: "Special Crops", icon: <Dumbbell className="w-4 h-4" />, color: "bg-yellow-100" },
        { name: "Miscellaneous", icon: <Grid2X2 className="w-4 h-4" />, color: "bg-gray-100" },
    ];

    // Helper function to add to history
    const addToHistory = (newTasks: Task[]) => {
        const newHistory = history.slice(0, currentIndex + 1);
        newHistory.push([...newTasks]);
        setHistory(newHistory);
        setCurrentIndex(newHistory.length - 1);
        setTasksState(newTasks);
    };

    // Modified setTasks to track history
    const setTasks = (newTasks: Task[]) => {
        addToHistory([...newTasks]);
    };

    const addTask = (task: Task) => {
        const newTasks = [...tasks, task];
        addToHistory(newTasks);
    };

    const deleteTask = (task: Task) => {
        const newTasks = tasks.filter((t) => t.title !== task.title);
        addToHistory(newTasks);
    };

    const handleUndo = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setTasksState(history[currentIndex - 1]);
        }
    };

    const handleRedo = () => {
        if (currentIndex < history.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setTasksState(history[currentIndex + 1]);
        }
    };

    const canUndo = currentIndex > 0;
    const canRedo = currentIndex < history.length - 1;

    //board layout
    const [toggleLayout, setToggleLayout] = useState<string>("grid")

    //task filtering
    const [taskFilter, setTaskFilter] = useState<string>("All Categories");

    const filteredTasks = tasks.filter((task) => {
        if (taskFilter === "All Categories") return true;
        return task.category.toLowerCase() === taskFilter.toLowerCase();
    });

    //calculating data
    const [total, setTotal] = useState(0);
    const [profit, setProfit] = useState(0);
    const [loss, setLoss] = useState(0);
    const [sales, setSales] = useState(0);

    useEffect(() => {
        const totalCost = tasks.reduce((acc: any, item: any) => parseInt(acc) + parseInt(item.price), 0);
        setTotal(totalCost);

        const totalSales = tasks.reduce((acc: any, item: any) => {
            if (item.taskType == "Done") {
                return acc + parseInt(item.price, 10);
            }
            return acc;
        }, 0);
        setSales(totalSales);

        const totalProfit = tasks.reduce((acc: any, item: any) => {
            if (item.incomeOrExpense == "Income") {
                return acc + parseInt(item.price, 10);
            }
            return acc;
        }, 0)
        setProfit(totalProfit)

        const totalLoss = tasks.reduce((acc: any, item: any) => {
            if (item.incomeOrExpense == "Expense") {
                return acc + parseInt(item.price, 10);
            }
            return acc;
        }, 0)
        setLoss(totalLoss)
    }, [tasks]);


    //weather api
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    const [weatherData, setWeatherData] = useState([])
    const [city, setCity] = useState("")

    localStorage.setItem("weatherData", JSON.stringify(weatherData));

    const fetchWeather = async () => {
        try {
            const userData = localStorage.getItem("user");
            if (!userData) return;
            const { location } = JSON.parse(userData);
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error: any) {
            console.log(`Error: ${error.message}`);
        }
    }


    return (
        <taskContext.Provider
            value={{
                tasks,
                setTasks,
                icons,
                addTask,
                deleteTask,
                handleUndo,
                handleRedo,
                canUndo,
                canRedo,
                toggleLayout,
                setToggleLayout,
                taskFilter,
                setTaskFilter,
                filteredTasks,
                total,
                setTotal,
                sales,
                fetchWeather,
                setCity,
                city,
                profit,
                loss
            }}
        >
            {children}
        </taskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(taskContext);
    if (!context) {
        throw new Error("useTaskContext must be used within a TaskProvider");
    }
    return context;
};
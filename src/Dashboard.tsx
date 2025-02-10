'use strict'

import Navbar from "./components/navbar"
import Board from "./components/Board"
import { useTaskContext } from "./contexts/taskContext"
import { useEffect } from "react"

const Dashboard = () => {

    const { fetchWeather } = useTaskContext();

    useEffect(() => {
        fetchWeather();
    }, [])

    return (
        <div className='w-full flex items-start justify-center'>
            <div className='xl:w-[80rem] w-full xl:px-0 px-4 py-[7vh]'>
                <div
                    className='w-full h-full flex flex-col gap-6'>
                    <Navbar />
                    <Board />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
import Homepage from "@/Homepage"
import Login from "@/Login"
import Signup from "../Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "../pages/index"
import Login from "../pages/Login"
import Signup from "@/pages/Signup"
import Chat from "../pages/chat"

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Index />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    )
}

export default routes
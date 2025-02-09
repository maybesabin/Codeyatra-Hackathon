import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "../pages/index"

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </Router>
    )
}

export default routes
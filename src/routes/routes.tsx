// import { Navigate, Outlet } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "../Dashboard";
// import Login from "@/Login";
// import Signup from "../Signup";
// import Index from "../Index";
// import { useLoginContext } from "@/contexts/loginContext";

// const AuthGuard = () => {
//     const { isLoggedIn } = useLoginContext();
//     return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
// };

// const AppRoutes = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />

//                 <Route element={<AuthGuard />}>
//                     <Route path="/home" element={<Index />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                 </Route>
//             </Routes>
//         </Router>
//     );
// };

// export default AppRoutes;

import Dashboard from "../Dashboard"
import Login from "@/Login"
import Signup from "../Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "../Index"

const routes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Index />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default routes
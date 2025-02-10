import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useLoginContext } from "../src/contexts/loginContext";
import { Eye, EyeOff, Lock, Mail, MapPin, User } from "lucide-react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const Signup = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useLoginContext();

    const [formData, setFormData] = useState({ username: "", email: "", password: "", location: "" });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const existingUser = localStorage.getItem("user");

        if (existingUser) {
            setSnackbarMessage("A user account already exists!");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }

        localStorage.setItem("user", JSON.stringify(formData));
        setSnackbarMessage("Account created successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setIsLoggedIn(true);
        setTimeout(() => navigate("/"), 500);
    };

    return (
        <div className="h-screen w-full flex items-center justify-center bg-[url('../src/assets/signupoverlay.png')] bg-cover bg-center bg-no-repeat">
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            <form
                onSubmit={handleSubmit}
                className="absolute top-56 right-40 flex flex-col items-center gap-6 text-white bg-opacity-90 p-6 rounded-lg"
            >
                <h1 className="text-5xl font-bold tracking-tighter">Create an account</h1>
                <p className="text-neutral-100 w-full text-left -mt-4">Join us today!</p>

                <div className="mt-4 w-full border border-white bg-white p-4 flex items-center gap-4 rounded-lg">
                    <User color="gray" />
                    <input
                        value={formData.username}
                        onChange={handleChange}
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="outline-none border-none text-black w-full"
                        required
                    />
                </div>

                <div className="w-full border border-white bg-white p-4 flex items-center gap-4 rounded-lg">
                    <Mail color="gray" />
                    <input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="outline-none border-none text-black w-full"
                        required
                    />
                </div>

                <div className="w-full border border-white bg-white p-4 flex items-center gap-4 rounded-lg">
                    <Lock color="gray" />
                    <input
                        value={formData.password}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="outline-none border-none text-black w-full"
                        required
                    />
                    {showPassword ? (
                        <Eye onClick={() => setShowPassword(false)} className="cursor-pointer text-gray-500 hover:text-black" />
                    ) : (
                        <EyeOff onClick={() => setShowPassword(true)} className="cursor-pointer text-gray-500 hover:text-black" />
                    )}
                </div>

                <div className="w-full border border-white bg-white p-4 flex items-center gap-4 rounded-lg">
                    <MapPin color="gray" />
                    <input
                        value={formData.location}
                        onChange={handleChange}
                        type="text"
                        name="location"
                        placeholder="Enter location"
                        className="outline-none border-none text-black w-full"
                        required
                    />
                </div>

                <button type="submit" className="w-full font-medium bg-gradient-to-bl from-green-700 to-green-500 text-white p-4 rounded-lg">
                    Sign Up
                </button>

                <h3 className="text-center">
                    Already have an account?{" "}
                    <Link to={"/login"} className="font-semibold">
                        Log in
                    </Link>
                </h3>
            </form>
        </div>
    );
};

export default Signup;
import React, { useState } from "react";
import image from "../assets/loginoverlay.png";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userData: any = localStorage.getItem("user");
        const user = JSON.parse(userData);

        if (user.email === formData.email && user.password === formData.password) {
            setSnackbarMessage("Logged in successfully!");
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            navigate('/home');
        } else {
            setSnackbarMessage("Invalid credentials!");
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            setFormData({
                email: '',
                password: ''
            });
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-[url('../src/assets/backgroundLogin.png')] bg-cover bg-center bg-no-repeat relative">

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            <img src={image} className="rounded-xl w-[60%] h-[80%] object-cover" alt="" />

            <div className="flex flex-col items-start gap-6 absolute left-[60%] text-white">
                <h1 className="text-3xl font-semibold tracking-tighter">Login</h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-start gap-4 text-[0.85rem]"
                >
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            value={formData.email}
                            onChange={handleChange}
                            type="email" name="email"
                            style={{ padding: "15px 10px" }}
                            placeholder="johndoe@gmail.com"
                            className="outline-none w-80 rounded-lg bg-[#1e332a]"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            required
                            value={formData.password}
                            onChange={handleChange}
                            type="password" name="password"
                            style={{ padding: "15px 10px" }}
                            placeholder="*************"
                            className="outline-none w-80 rounded-lg bg-[#1e332a]"
                        />
                    </div>
                    <h3 className="text-sm text-white">
                        Don't have an account ?&nbsp;
                        <Link to={'/signup'} className="underline">
                            Create an account
                        </Link>
                    </h3>
                    <button
                        type="submit"
                        style={{ padding: "10px" }}
                        className="bg-[#5f9f9f] text-white rounded-lg w-full"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

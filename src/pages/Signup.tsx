import { useState } from "react";
import image from "../assets/loginoverlay.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const userData: any = localStorage.getItem("user");
        const user = JSON.parse(userData);
        if (user.username == formData.username) {
            return alert("Username already taken!")
        } else if (user.email == formData.email) {
            return alert("Email already taken!")
        }
        localStorage.setItem("user", JSON.stringify(formData))
        navigate('/')
    }

    return (
        <div className="h-screen flex items-center justify-center bg-[url('../src/assets/backgroundLogin.png')] bg-cover bg-center bg-no-repeat relative">
            <img src={image} className="rounded-xl w-[60%] h-[80%] object-cover" alt="" />
            <div className="flex flex-col items-start gap-6 absolute left-[60%] text-white">
                <h1 className="text-3xl font-semibold tracking-tighter">Signup</h1>
                <form
                    onSubmit={handleSubmit}
                    action=""
                    className="flex flex-col items-start gap-4 text-[0.85rem]"
                >
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="username">Username</label>
                        <input
                            value={formData.username}
                            onChange={handleChange}
                            type="text"
                            name="username"
                            required
                            style={{ padding: "15px 10px" }}
                            placeholder="Enter username..."
                            className="outline-none w-80 rounded-lg bg-[#1e332a]"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            style={{ padding: "15px 10px" }}
                            placeholder="johndoe@gmail.com"
                            className="outline-none w-80 rounded-lg bg-[#1e332a]"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            name="password"
                            style={{ padding: "15px 10px" }}
                            placeholder="*************"
                            className="outline-none w-80 rounded-lg bg-[#1e332a]"
                        />
                    </div>
                    <h3 className="text-sm text-white">
                        Already have an account ?&nbsp;
                        <Link to={'/'} className="underline">
                            Login here
                        </Link>
                    </h3>
                    <button
                        type="submit"
                        style={{ padding: "10px" }}
                        className="bg-[#5f9f9f] text-white rounded-lg w-full"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

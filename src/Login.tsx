import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "../src/hooks/use-toast"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { toast } = useToast()
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!email || !password) {
            toast({
                title: "Login Failed",
                description: "All fields are required.",
                variant: "destructive",
                duration: 3000,
            })
            return
        }

        try {
            const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")

            const validUser = storedUsers.find(
                (user: any) => user.email === email && user.password === password
            )

            if (!validUser) {
                toast({
                    title: "Login Failed",
                    description: "Invalid email or password. Please try again.",
                    variant: "destructive",
                    duration: 3000,
                })
                return
            }

            // Save logged-in user
            localStorage.setItem("loggedInUser", JSON.stringify(validUser))

            toast({
                title: "Login Successful",
                description: `Welcome back, ${validUser.username}!`,
                duration: 3000,
            })

            setTimeout(() => {
                navigate("/home")
            }, 1000)
        } catch (error) {
            toast({
                title: "Login Failed",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
                duration: 3000,
            })
        }
    }

    return (
        <div className="w-full mt-48 flex items-center justify-center">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter your credentials to access your account.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-sm">Don't have an account ? <Link to={'/signup'} className="underline">Create  here</Link></div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

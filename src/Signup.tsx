"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "../src/hooks/use-toast"

export default function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { toast } = useToast()
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Check if any field is empty
        if (!username || !email || !password) {
            toast({
                title: "Sign Up Failed",
                description: "All fields are required.",
                variant: "destructive",
                duration: 3000,
            })
            return
        }

        const userData = { username, email, password }

        try {
            // Get existing users from localStorage
            const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")

            // Check if username or email already exists
            const userExists = storedUsers.some(
                (user: any) => user.username === username || user.email === email
            )

            if (userExists) {
                toast({
                    title: "Sign Up Failed",
                    description: "Username or email already exists. Please try another one.",
                    variant: "destructive",
                    duration: 3000,
                })
                return
            }

            // Save new user
            storedUsers.push(userData)
            localStorage.setItem("users", JSON.stringify(storedUsers))

            // Also store the logged-in user
            localStorage.setItem("loggedInUser", JSON.stringify(userData))

            toast({
                title: "Sign Up Successful",
                description: "Your account has been created successfully.",
                duration: 3000,
            })

            setTimeout(() => {
                navigate("/")
            }, 1000)
        } catch (error) {
            toast({
                title: "Sign Up Failed",
                description: "There was an error creating your account. Please try again.",
                variant: "destructive",
                duration: 3000,
            })
        }
    }

    return (
        <div className="w-full mt-48 flex items-center justify-center">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Create your account to get started.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="johndoe"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
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
                        <div className="text-sm">Already have an account ? <Link to={'/'} className="underline">Login here</Link></div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

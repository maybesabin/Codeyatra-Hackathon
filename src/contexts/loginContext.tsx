import { createContext, useContext, useState } from "react";

interface LoginContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context
const LoginContext = createContext<LoginContextType | undefined>(undefined);

// Create provider
export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoginContext.Provider>
    );
};

// Custom hook to use LoginContext
export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLoginContext must be used within a LoginProvider");
    }

    return context;
};

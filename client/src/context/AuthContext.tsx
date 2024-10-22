import { createContext, useState, ReactNode, useEffect } from "react";

interface AuthContextProps {
  currentUser: User | null;
  updateUser: (data: User | null) => void;
}

interface User {
  id: string;
  username: string;
  email: string;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const updateUser = (data: User | null) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

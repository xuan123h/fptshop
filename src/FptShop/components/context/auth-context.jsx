import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "Evondev",
    email: "evondev@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1645528099962-235389d6aabc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used with in a AuthProvider");
  return context;
}

export { AuthProvider, useAuth };

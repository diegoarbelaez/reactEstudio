import { useState, createContext, useContext } from "react";

const AuthContext = createContext({
  isAuthenticated: true,
  setIsAuthenticated: () => {},
});

export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}